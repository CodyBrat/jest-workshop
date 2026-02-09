// const { calculateFinalAmount } = require("../src/pricing");

// describe("calculateFinalAmount", () => {

//   test("sanity check", () => {
//     expect(1 + 1).toBe(2);
//   });

//   test("throws error for invalid subtotal (negative)", () => {
//     expect(() => calculateFinalAmount(-100, "DISCOUNT"))
//       .toThrow("Invalid subtotal");
//   });

//   test("throws error for invalid subtotal type", () => {
//     expect(() => calculateFinalAmount("100", "DISCOUNT"))
//       .toThrow("Invalid subtotal");
//   });

//   test("throws error for NaN subtotal", () => {
//     expect(() => calculateFinalAmount(NaN, "DISCOUNT"))
//       .toThrow("Invalid subtotal");
//   });

//   test("throws error for invalid coupon", () => {
//     expect(() => calculateFinalAmount(100, "INVALID"))
//       .toThrow("Invalid Coupon");
//   });

//   test("returns subtotal when no coupon", () => {
//     expect(calculateFinalAmount(100)).toBe(100);
//   });

//   test("applies 5% discount for subtotal >= 1000", () => {
//     expect(calculateFinalAmount(1500)).toBe(1425);
//   });

//   test("applies SAVE10 coupon", () => {
//     expect(calculateFinalAmount(500, "SAVE10")).toBe(450);
//   });

//   test("applies FLAT50 coupon", () => {
//     expect(calculateFinalAmount(200, "FLAT50")).toBe(150);
//   });

// });


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

