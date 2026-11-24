import { describe, expect, it } from "vitest";
import { APP } from "../src/app";

describe("aplikace", () => {
  it("má název a popis", () => {
    expect(APP.name.trim().length).toBeGreaterThan(0);
    expect(APP.tagline.trim().length).toBeGreaterThan(0);
  });
});
