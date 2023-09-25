import { describe, it, expect } from "vitest";
import fs from "node:fs/promises";

describe("Ticket 2 - Create a bootcamper list", () => {
  it("should have a valid bootcampers.json with the correct structure", async () => {
    let jsonData;
    try {
      jsonData = await fs.readFile("./bootcampers.json", "utf-8");
    } catch (error) {
      throw new Error(
        "bootcampers.json file is missing from the project root."
      );
    }

    let bootcampers;
    try {
      bootcampers = JSON.parse(jsonData);
    } catch (error) {
      throw new Error("bootcampers.json contains invalid JSON.");
    }

    expect(bootcampers).to.be.an("array");
    expect(bootcampers).not.to.be.empty;

    bootcampers.forEach((bootcamper) => {
      expect(bootcamper).to.be.an("object");
      expect(bootcamper.firstName).to.be.a("string");
      expect(bootcamper.lastName).to.be.a("string");
      expect(bootcamper.age).to.be.a("number");
      expect(bootcamper.hasPets).to.be.a("boolean");
    });
  });
});
