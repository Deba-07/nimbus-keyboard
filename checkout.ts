declare global {
  interface Window {
    Razorpay: any;
  }
}

async function loadRazorpay(): Promise<boolean> {
  return new Promise((resolve) => {
    // already loaded
    if (window.Razorpay) {
      resolve(true);
      return;
    }

    const script = document.createElement("script");
    script.id = "razorpay-script";
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;

    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);

    document.body.appendChild(script);
  });
}

export async function checkout() {
  // Step 1 — create order
  const res = await fetch("/api/create-order", {
    method: "POST",
  });

  const order = await res.json();

  // Step 2 — load Razorpay SDK
  const isLoaded = await loadRazorpay();

  if (!isLoaded) {
    alert("Razorpay failed to load. Check internet.");
    return;
  }

  // Step 3 — payment popup
  const options = {
    key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
    amount: order.amount,
    currency: order.currency,
    name: "KeyCraft Keyboard",
    description: "Custom Mechanical Keyboard",
    order_id: order.id,

    handler: async function (response: any) {
      await fetch("/api/verify-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(response),
      });

      alert("Payment successful 🎉");
    },

    theme: {
      color: "#0ea5e9",
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
}
