const express = require("express");
const { createOrder } = require("./orderService");

const app = express();
app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.post("/orders", async (req, res) => {
  const result = await createOrder(req.body);

  if (!result.ok) {
    return res.status(result.statusCode).json({ error: result.message });
  }

  return res.status(result.statusCode).json(result.data);
});

module.exports = app;
