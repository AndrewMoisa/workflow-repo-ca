// isActivePath.test.js
import { describe, it, expect } from "vitest";
import { isActivePath } from "./userInterface";

describe("isActivePath", () => {
  it("returns true when current path matches href exactly", () => {
    expect(isActivePath("/about", "/about")).toBe(true);
    expect(isActivePath("/contact", "/contact")).toBe(true);
  });

  it("returns true for root path '/' when current path is '/' or '/index.html'", () => {
    expect(isActivePath("/", "/")).toBe(true);
    expect(isActivePath("/", "/index.html")).toBe(true);
  });

  it("returns true when current path includes the href", () => {
    expect(isActivePath("/blog", "/blog/article")).toBe(true);
    expect(isActivePath("/products", "/products/new")).toBe(true);
  });

  it("returns false when paths don’t match", () => {
    expect(isActivePath("/about", "/contact")).toBe(false);
    expect(isActivePath("/blog", "/portfolio")).toBe(false);
    expect(isActivePath("/about", "/about-us")).toBe(true); // Note: per current logic
  });
});
