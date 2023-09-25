import { describe, it, expect } from "vitest";
import { introduce } from "../bootcamper.js";

describe("Ticket 3 - Create introduce functionality", () => {
  it("should correctly introduce a bootcamper without pets", () => {
    const bootcamper = {
      firstName: "John",
      lastName: "Doe",
      age: 32,
      hasPets: false,
    };

    const introduction = introduce(bootcamper);
    const expectedIntroduction =
      "Hi, my name is John Doe. I'm 32 years old and I have no pets.";
    expect(introduction).toEqual(expectedIntroduction);
  });

  it("should correctly introduce a bootcamper with pets", () => {
    const bootcamper = {
      firstName: "Jane",
      lastName: "Doe",
      age: 25,
      hasPets: true,
    };

    const introduction = introduce(bootcamper);
    const expectedIntroduction =
      "Hi, my name is Jane Doe. I'm 25 years old and I'm a pet owner.";
    expect(introduction).toEqual(expectedIntroduction);
  });
});
