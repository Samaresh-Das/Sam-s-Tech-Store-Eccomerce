let publishable_key = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(publishable_key);
  }
  return stripePromise;
};

export default getStripe;
