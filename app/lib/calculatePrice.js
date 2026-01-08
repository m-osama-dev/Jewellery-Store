import { GOLD_RATE } from "./goldRate";

// Safely parse any weight value
const parseWeight = (weight) => {
  if (weight == null) return 0;
  if (typeof weight === "number" && !Number.isNaN(weight)) return weight;
  if (typeof weight === "string") {
    const val = parseFloat(weight.replace(/[^\d.-]/g, ""));
    return Number.isNaN(val) ? 0 : val;
  }
  return 0;
};

// Main price calculation
export const calculatePrice = (weight) => {
  const grams = parseWeight(weight);
  if (!grams) return 0;

  const goldValue = grams * GOLD_RATE.perGram24K; // Base value of gold
  const polishFee = 0.2 * GOLD_RATE.perTola24K; // 0.2 tola polish fee
  const subtotal = goldValue + polishFee;
  const makingCharges = subtotal * 0.05; // 5% making charges

  return subtotal + makingCharges;
};
