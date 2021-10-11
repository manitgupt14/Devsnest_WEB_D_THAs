const express = require("express");
const session = require("express-session");
const stripe = require("stripe")(
  "sk_test_51JdYjGSCStxPVyDT0t326hfBTeYWWKrv1Mjs4VaQVhTeiHQdx2HCObV4GvNeHjZymDgJx0rjm8lDF33CI9bqfM3400wijEUe3U"
);
const path = require("path");
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.post("/stripe", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          amount: req.body.price * 100,
          name: "shopping",
          currency: "usd",
          quantity: 1,
        },
      ],
      payment_method_types: ["card"],
      success_url: `${req.headers.origin}?success=true`,
      cancel_url: `${req.headers.origin}?cancel=true`,
    });
    res.redirect(303, session.url);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
