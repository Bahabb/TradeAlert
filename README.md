# TradeAlert

Real-time trading dashboard. A C trading bot posts trading alerts and session recaps over HTTP, a Node.js backend validates and broadcasts them over WebSockets, and a React dashboard displays them the moment they arrive.

## How it works

```
C Bot ──HTTP POST──▶ Express (localhost:5000) ──Socket.IO──▶ React (localhost:5173)
        /api/bot/alert                          botAlert
        /api/bot/recap                          botRecap
```

1. The C bot detects a trading condition and sends `POST /api/bot/alert`. The backend validates the payload with Zod before anything is emitted. Invalid alerts are rejected with `400`. Valid alerts are acknowledged and emitted as a `botAlert` event to all connected clients.
2. At the start of a session, the C bot sends `POST /api/bot/recap`. The backend validates the payload against the `SessionRecap` Zod schema, which lives in the shared package, before anything is stored. Invalid payloads are rejected with `400` and nothing is stored or broadcast. A valid recap replaces the previously stored recap and is emitted as `botRecap` to all connected clients.
3. When a client connects, the backend sends it the stored recap, if one exists, so clients that connect after a session starts still receive the current analysis.
4. The frontend's `SocketContext` provides one shared Socket.IO connection to the whole app. Components subscribe to the events they need.

Design rationale lives in [ARCHITECTURE.md](ARCHITECTURE.md) and [TECH_STACK.md](TECH_STACK.md).

---

## Tech stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Frontend framework | React + Vite | React 19, Vite 8 |
| Language | TypeScript | via `@types/react` |
| Frontend real-time | Socket.IO client | 4.8.3 |
| Backend framework | Node.js + Express | Express 5 |
| Backend real-time | Socket.IO server | 4.8.3 |
| Validation | Zod (shared package, used by backend and frontend) | ^4.6.7 |
| Bot → Backend | HTTP POST | — |
| Storage | In-memory cache (latest recap only; alerts not persisted) | — |

---

## Prerequisites

- Node.js 18 or later
- npm
- A C compiler (gcc or clang); the bot is under active development

---

## Quick start

Run each component in its own terminal.

```bash
# 1. Shared folder
cd shared && npm install && npm run buil

# 2. Backend (http://localhost:5000)
cd backend
npm install
npm run dev

# 3. Frontend (http://localhost:5173)
cd frontend
npm install
npm run dev

# 4. C bot: under development, run manually
gcc -o main main.c -lcurl
./main
```

Open `http://localhost:5173`. Alerts sent by the bot appear in the feed in real time. The Market Recap panel shows a loading state until the bot sends a recap.

---

## Ports

| Service | Port |
|---------|------|
| Frontend (Vite dev server) | 5173 |
| Backend (Express + Socket.IO) | 5000 |

---

## API reference

### `POST /api/bot/alert`

Receives a trading alert from the bot and broadcasts it to all connected dashboard clients. The payload is validated with Zod before it is emitted, so malformed alerts never reach the dashboard.

**Request body**

```json
{
  "id": "abc123",
  "timestamp": "2025-01-15T14:32:00Z",
  "message": "BUY signal detected on BTC/USD"
}
```

| Field | Type | Description |
|-------|------|-------------|
| `id` | `string` | Unique alert identifier |
| `timestamp` | `string` | ISO 8601 timestamp of when the alert fired |
| `message` | `string` | Human-readable alert description |

**Response**

| Status | Body | Meaning |
|--------|------|---------|
| `200 OK` | `{"status": "received"}` | Alert accepted and broadcast |
| `400 Bad Request` | Validation error naming the invalid field | Alert is invalid. Nothing is emitted |

---

### `POST /api/bot/recap`

Receives a session recap from the bot. The payload is validated with Zod before it is stored or broadcast. A valid recap replaces the stored recap entirely.

**Request body**

The body must match the `SessionRecap` type in `types.ts`. Abbreviated example:

```json
{
  "dailyBias": { "direction": "BULLISH", "strength": "STRONG" },
  "activeSession": "LONDON",
  "nextKillZone": "NY",
  "marketSequence": [
    { "price": 1.0900, "type": "HH", "isSwept": false }
  ],
  "dealingRange": {
    "premium": 1.0924,
    "equilibrium": 1.0853,
    "discount": 1.0781,
    "currentPositionPercentage": 62,
    "summary": "Price is in premium"
  }
}
```

The example omits the remaining fields (`drawOnLiquidity`, `previousCandle`, `fairValueGaps`, `orderBlocks`, `liquidityPools`, `confluenceMatrix`). All fields are required. See `types.ts` for the full shape.

**Response**

| Status | Body | Meaning |
|--------|------|---------|
| `200 OK` | `{"status": "received"}` | Recap is valid, stored, and broadcast |
| `400 Bad Request` | Validation error naming the invalid field | Recap is invalid. Nothing is stored or broadcast, and the previous recap is kept |

---

## Socket.IO events

| Event | Direction | Payload | Description |
|-------|-----------|---------|-------------|
| `botAlert` | Server → Client | `AlertItemType[]` | Emitted once for each alert the backend receives |
| `botRecap` | Server → Client | `SessionRecap` | Emitted when a valid recap is received, and sent to each client on connection if a recap is stored |

---

## Features

- Live alert feed that updates in real time over Socket.IO
- Empty-state message when no alerts have been received
- Recap validation, in-memory caching, and delivery on connection (backend)
- Market Recap panel: live recap display driven by `botRecap`, with a loading state until the first recap arrives

---

## Current state

**Working**

- C bot sends alerts to the backend over HTTP
- Backend receives, acknowledges, and broadcasts alerts via Socket.IO
- Backend validates alerts with Zod before emitting them
- Backend validates session recaps with Zod, stores the latest valid recap, and sends it to newly connected clients
- Frontend connects to the backend via a shared `SocketContext` and renders incoming alerts in real time
- Market Recap panel: `useMarketRecap` subscribes to `botRecap`, and every card renders from the latest payload (SCRUM-39, SCRUM-40)

**In development**

- Nothing currently in progress on the frontend panels

**Not yet implemented**

- Alert caching: a page refresh clears all alerts
- Recap persistence: restarting the backend clears the stored recap
- Authentication on the bot endpoints
- Automated tests and CI

---

## Project structure

```
.
├── backend/src/
│   ├── app.js            Express app: CORS, JSON parsing, routes, 404 handler (no listen)
│   ├── server.js         HTTP server, Socket.IO, listen()
│   ├── config/env.js     Port and CORS origin configuration
│   ├── store/            In-memory latest-recap store
│   ├── routes/           botRoutes.js
│   └── middleware/       Zod validation middleware
├── shared/                   Zod schemas and inferred types, used by backend and frontend
├── frontend/
│   └── src/
│       ├── components/       AlertFeed, AlertItem, MarketRecap (one folder per panel)
│       ├── contexts/         SocketContext (shared socket connection and listener lifecycle)
│       ├── hooks/            useAlertStream, useMarketRecap
│       ├── socket.ts         Single Socket.IO client instance
│       ├── types.ts          Shared TypeScript types, including SessionRecap
│       └── App.tsx
├── main.c                    C trading bot (in development)
└── README.md
```

---

## Development workflow

- Work is planned in Jira sprints. Each user story gets its own branch named `SCRUM-<n>-<description>`.
- Commits are prefixed with the Jira story key, for example `SCRUM-36: Remove useSocket hook`.
- Stories are merged into `main` through pull requests.

---

## Documentation

- [ARCHITECTURE.md](ARCHITECTURE.md): how components communicate and key design decisions
- [TECH_STACK.md](TECH_STACK.md): why each technology was chosen
