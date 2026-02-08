# Jest DevOps Workshop (Graded)

## Rules
- Do NOT modify `src/` files.
- Write tests inside `tests/`.
- CI must be green for evaluation.

## Tasks (Create these test files)
Create the following files:

1) `tests/health.test.js`
- Test `GET /health` returns 200 and "OK"

2) `tests/orders.contract.test.js`
- Test `POST /orders` with valid payload returns 201
- Expect response has `orderId` and `payment.status`

3) `tests/orders.validation.test.js`
- Missing amount => 400
- amount <= 0 => 400
- amount not a number => 400

4) `tests/orders.paymentFailure.test.js`
- Mock payment failure and expect 502
- Response should contain `{ error: "payment gateway failed" }`

## Commands
- Install: `npm ci`
- Run: `npm test`

## Submission
- Push your code.
- Create tag:
  `git tag submission`
  `git push origin submission`
- Submit fork URL + Actions run URL in the Google Form.

## Grading (20 Marks)
- API contract tests: 8
- Validation tests: 4
- Mocking payment failure: 4
- CI green + submission tag: 2
- Test clarity/readability: 2
