0// src/utils/quoteCalculator.js
export function calculateQuote(volumeCm3, materialType) {
  const baseServiceFee = 10;
  const materialPrices = {
    plastic: 0.25,
    resin: 0.35,
    metal: 1.5,
    sandstone: 0.4,
  };

  const materialPrice = materialPrices[materialType] || materialPrices['plastic'];
  const totalCost = (volumeCm3 * materialPrice) + baseServiceFee;

  return totalCost.toFixed(2);
}