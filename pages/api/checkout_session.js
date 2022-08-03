const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
	if (req.method === "POST") {
		try {
			const session = await stripe.checkout.sessions.create({
				line_items: [
					{
						// Provide the exact Price ID (for example, pr_1234) of the product you want to sell
						price: req.body.price,
						quantity: req.body.quantity,
					},
				],
				payment_method_types: ["card"],
				mode: "payment",
				success_url: `${window.location.origin}/?success=true`,
				cancel_url: `${window.location.origin}/?canceled=true`,
			});
			res.json({ url: session.url }); // <-- this is the changed line
		} catch (err) {
			res.status(err.statusCode || 500).json(err.message);
		}
	} else {
		res.setHeader("Allow", "POST");
		res.status(405).end("Method Not Allowed");
	}
}
