
const { calculateFinalAmount } = require("../src/pricing");

describe("calculateFinalAmount", () => {
  test("sanity check", () => {
    expect(1 + 1).toBe(2);
  });
  test("invalid subtotal throws error", () => {
    expect(() => calculateFinalAmount(-10, "SAVE10"))
      .toThrow("Invalid subtotal");
  });
  test("no coupon returns same subtotal", () => {
    expect(calculateFinalAmount(100)).toBe(100);
  });

  test("SAVE10 coupon applies 10% discount", () => {
    expect(calculateFinalAmount(500, "SAVE10")).toBe(450);
  });

  test("SAVE10 coupon is case-insensitive", () => {
    expect(calculateFinalAmount(500, "save10")).toBe(450);
  });

  test("FLAT50 coupon subtracts 50", () => {
    expect(calculateFinalAmount(200, "FLAT50")).toBe(150);
  });

  test("FLAT50 boundary: total never goes below zero", () => {
    expect(calculateFinalAmount(40, "FLAT50")).toBe(0);
  });
});

