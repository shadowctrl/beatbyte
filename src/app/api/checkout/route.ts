import { NextRequest } from "next/server";
import Stripe from "stripe";
import { productDataType } from "@/types";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export const POST = async (req: NextRequest) => {
  const {
    cart,
    user: { id, fullName },
  } = await req.json();

  const line_items = cart.map((item: productDataType) => ({
    price_data: {
      currency: "usd",
      unit_amount: item.price * 100,
      product_data: {
        name: item.title,
      },
    },
    quantity: item.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items,
    client_reference_id: id,
    metadata: {
      userId: id,
      name: fullName,
    },
    success_url: `${process.env.NEXT_PUBLIC_URL}/thank-you`,
  });
  return Response.json(session);
};
