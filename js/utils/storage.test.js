// storageUtils.test.js
import { describe, it, expect, beforeEach } from "vitest";
import { saveUser, getUsername, clearStorage } from "./storage.js";

describe("getUsername", () => {
  beforeEach(() => {
    clearStorage(); // Ensure localStorage is clean before each test
  });

  it("returns the name from the user object in storage", () => {
    const mockUser = { name: "Alice", email: "alice@example.com" };
    saveUser(mockUser);

    expect(getUsername()).toBe("Alice");
  });

  it("returns null when no user exists in storage", () => {
    expect(getUsername()).toBeNull();
  });
});
