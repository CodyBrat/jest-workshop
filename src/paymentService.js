async function charge(amount) {
  // Real world: call Stripe/Razorpay etc.
  // Here: just simulate success
  return {
    status: "success",
    transactionId: `txn_${Date.now()}`
  };
}

module.exports = { charge };
