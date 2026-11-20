import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import AlertFeed from "./AlertFeed";


const mockAlerts = vi.hoisted(() => ({ value: [] as Array<{ id: string; message: string; timestamp: string }> }));

vi.mock("../../hooks/useAlertStream", () => ({
  default: () => mockAlerts.value,
}));

describe("AlertFeed", () => {
  it("shows the empty state when there are no alerts", () => {
    mockAlerts.value = [];

    render(<AlertFeed />);

    expect(screen.getByText("ICT Alert Feed")).toBeInTheDocument();
    expect(screen.getByText("No alerts recorded yet.")).toBeInTheDocument();
  });

  it("renders each alert's message and timestamp, and hides the empty state", () => {
    mockAlerts.value = [
      { id: "1", message: "BUY signal on BTC/USD", timestamp: "2025-01-15T14:32:00Z" },
      { id: "2", message: "SELL signal on ETH/USD", timestamp: "2025-01-15T14:40:00Z" },
    ];

    render(<AlertFeed />);

    expect(screen.getByText("BUY signal on BTC/USD")).toBeInTheDocument();
    expect(screen.getByText("2025-01-15T14:40:00Z")).toBeInTheDocument();
    expect(screen.queryByText("No alerts recorded yet.")).not.toBeInTheDocument();
  });
});
