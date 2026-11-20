import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import useAlertStream from "./useAlertStream";

// A fake Socket.IO client. It stores handlers so the test can fire events
// by hand with trigger(). This replaces the real socket, which would try to
// connect to the backend.
const fakeSocket = vi.hoisted(() => {
  const handlers: Record<string, Array<(data: unknown) => void>> = {};
  return {
    on(event: string, fn: (data: unknown) => void) {
      (handlers[event] ??= []).push(fn);
    },
    off(event: string, fn: (data: unknown) => void) {
      handlers[event] = (handlers[event] ?? []).filter((h) => h !== fn);
    },
    trigger(event: string, data: unknown) {
      (handlers[event] ?? []).forEach((h) => h(data));
    },
    reset() {
      for (const key of Object.keys(handlers)) delete handlers[key];
    },
    count(event: string) {
      return (handlers[event] ?? []).length;
    },
  };
});

vi.mock("../contexts/SocketContext", () => ({
  useSocketContext: () => fakeSocket,
}));

const alertA = { id: "1", message: "BUY signal", timestamp: "2025-01-15T14:32:00Z" };
const alertB = { id: "2", message: "SELL signal", timestamp: "2025-01-15T14:40:00Z" };

describe("useAlertStream", () => {
  beforeEach(() => {
    fakeSocket.reset();
  });

  it("starts with an empty list", () => {
    const { result } = renderHook(() => useAlertStream());
    expect(result.current).toEqual([]);
  });


  it("adds a single alert object received on botAlert", () => {
    const { result } = renderHook(() => useAlertStream());

    act(() => fakeSocket.trigger("botAlert", alertA));

    expect(result.current).toEqual([alertA]);
  });

  it("appends alerts in arrival order", () => {
    const { result } = renderHook(() => useAlertStream());

    act(() => fakeSocket.trigger("botAlert", alertA));
    act(() => fakeSocket.trigger("botAlert", alertB));

    expect(result.current).toEqual([alertA, alertB]);
  });

  it("removes its listener on unmount", () => {
    const { unmount } = renderHook(() => useAlertStream());
    expect(fakeSocket.count("botAlert")).toBe(1);

    unmount();

    expect(fakeSocket.count("botAlert")).toBe(0);
  });
});
