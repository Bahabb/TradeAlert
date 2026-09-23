# TradeAlert
# Trading Bot Dashboard

A full-stack web application that monitors a C-based trading bot in real-time and displays alerts.

## MVP

**What it does:**
- C bot sends HTTP POST to Node backend when alerts trigger
- Node backend receives alert and broadcasts to React frontend via WebSocket
- React dashboard displays alerts in real-time

**Tech Stack:**
- Frontend: React
- Backend: Node.js + Express

## API Endpoints

### POST /api/bot/alert
Receives a TradingAlert from the C bot.

**Status Code:** 200 OK  
**Response:** `{"status": "received"}`

Note: TradingAlert request body structure is documented in the bot's implementation and will evolve as the DTO is enhanced.

## Quick Start

```bash
# Backend
cd backend && npm install && npm run dev

# Frontend
cd frontend && npm install && npm run dev

# C Bot
cd bot && gcc -o bot bot.c && ./bot
```

Visit `http://localhost:5173`

## Current State

**Working components:**
- C bot → sends POST requests to backend
- Backend → receives, parses, logs, and acknowledges alerts

**Not yet implemented:**
- WebSocket broadcasting (Socket.io) for real-time updates
- Alert caching/persistence
- Alert validation and error handling
- Market info section (right sidebar)

## Next Steps
Frontend displays static alerts in feed layout
Connect frontend to backend with WebSocket/Socket.io for real-time alert broadcasting.