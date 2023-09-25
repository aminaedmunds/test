import { describe, it, expect } from "vitest";

describe("Ticket 1 - Installing Node.js", () => {
  it("should have Node.js installed with the correct version", async () => {
    const installedVersion = process.versions.node;
    const actualVersion = parseInt(installedVersion.split(".")[0]);
    const minimumVersion = 18;

    expect(
      actualVersion,
      `Expected Node.js version to be v${minimumVersion} or higher. You have v${installedVersion} installed.`
    ).toBeGreaterThanOrEqual(minimumVersion);
  });
});
