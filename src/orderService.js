const paymentService = require("./paymentService");

function validateOrderInput(body) {
  const amount = body?.amount;

  // Keep it beginner-simple
  if (amount === undefined || amount === null) {
    return { ok: false, message: "amount is required" };
  }

  if (typeof amount !== "number" || Number.isNaN(amount)) {
    return { ok: false, message: "amount must be a number" };
  }

  if (amount <= 0) {
    return { ok: false, message: "amount must be > 0" };
  }

  return { ok: true };
}

async function createOrder(body) {
  const validation = validateOrderInput(body);
  if (!validation.ok) {
    return { ok: false, statusCode: 400, message: validation.message };
  }

  try {
    const payment = await paymentService.charge(body.amount);

    return {
      ok: true,
      statusCode: 201,
      data: {
        orderId: `ord_${Date.now()}`,
        payment
      }
    };
  } catch (err) {
    return {
      ok: false,
      statusCode: 502,
      message: "payment gateway failed"
    };
  }
}

module.exports = { validateOrderInput, createOrder };
