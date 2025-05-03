// src/pages/api/calculate-quote.js
import { calculateQuote } from "@/utils/quoteCalculator";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { volumeCm3, materialType } = req.body;
    const price = calculateQuote(volumeCm3, materialType);
    return res.status(200).json({ price });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}