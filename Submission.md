# Jest Workshop Submission

## Student Details
- Name:Priyabrata Singh
- Roll Number: 2024-B-22112005
- GitHub Username: https://github.com/CodyBrat

---

## Tests Written

List each test you wrote and briefly explain **what bug or regression it prevents**.

### 1. Test Name: no coupon returns same subtotal
**What it protects against:**
Ensures that the function does not apply any unintended discounts or modifications when no coupon is provided.

---

### 2. Test Name: SAVE10 coupon applies 10% discount
**What it protects against:**  
Prevents regression where the SAVE10 coupon logic might be removed, miscalculated, or capped incorrectly.

---

### 3. Test Name:SAVE10 coupon is case-insensitive
**What it protects against:**  
Ensures coupon validation works correctly regardless of letter casing, preventing user-facing coupon failures.
---

### 4. Test Name:FLAT50 coupon subtracts 50
**What it protects against:**  
Verifies that flat discounts are applied correctly and not treated as percentage-based discounts.
---

### 5. Test Name:FLAT50 boundary: total never goes below zero
**What it protects against:**  
Prevents negative billing amounts when flat discounts exceed the subtotal.
---

### 6. Test Name:invalid subtotal throws error
**What it protects against:**
Ensures invalid inputs (negative or non-numeric subtotals) are rejected early, maintaining data integrity.
---
## CI Pipeline (if implemented)
- Did CI pass successfully? Yes
- GitHub Actions Run URL:
https://github.com/CodyBrat/jest-workshop/actions/runs/21825120650
---

## Reflection (1–2 lines)
What is **one thing** you understood better about testing or CI after this workshop?
I learned how automated tests and CI pipelines work together to catch bugs early and ensure that every code change is validated before merging.
