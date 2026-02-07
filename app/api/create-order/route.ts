import Razorpay from "razorpay";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST() {
  try {
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID!,
      key_secret: process.env.RAZORPAY_KEY_SECRET!,
    });
    console.log(
      "KEY_ID:",
      process.env.RAZORPAY_KEY_ID,
      "KEY_SECRET length:",
      process.env.RAZORPAY_KEY_SECRET?.length,
    );

    const options = {
      amount: 899900, // ₹8999 in paise
      currency: "INR",
      receipt: "keyboard_order_" + Date.now(),
    };

    const order = await razorpay.orders.create(options);

    return NextResponse.json(order);
  } catch (error: any) {
    console.error("RAZORPAY ORDER ERROR:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to create order" },
      { status: 500 },
    );
  }
}
