import { add, formatDisplay } from "../src";

describe("add", () => {
  describe("with a = 1 and b = 2", () => {
    it("returns 3", () => {
      expect(add(1, 2)).toBe(3);
    });
  });
});

describe("formatDisplay", () => {
  describe("when the input is a string", () => {
    it("returns the string formatted with additionnal line breaks before and after", () => {
      expect(formatDisplay("Hello!")).toBe("\n\n\n\n\nHello!\n\n\n\n\n");
    });
  });

  describe("when the input is a stringified object", () => {
    it("returns a string containing the object as a string and formatted with additionnal line breaks before and after", () => {
      expect(formatDisplay(JSON.stringify({ sum: 3 }))).toBe(
        `\n\n\n\n\n{"sum":3}\n\n\n\n\n`,
      );
    });
  });

  describe("when the input is a number", () => {
    it("returns a string containing the interpolated number and formatted with additionnal line breaks before and after", () => {
      expect(formatDisplay(3)).toBe("\n\n\n\n\n3\n\n\n\n\n");
    });
  });
});
