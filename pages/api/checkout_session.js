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

				phone_number_collection: {
					enabled: true,
				},
				metadata: {
					email: req.body.email,
					time: req.body.time,
					date: req.body.date,
					quantity: req.body.quantity,
					tripName: req.body.tripName,
				},
				payment_method_types: ["card"],
				mode: "payment",
				success_url: `${req.headers.origin}/?status=success`,
				cancel_url: `${req.headers.origin}/?status=canceled`,
			});
			res.json(session); // <-- this is the changed line
		} catch (err) {
			res.status(err.statusCode || 500).json(err.message);
		}
	} else {
		res.setHeader("Allow", "POST");
		res.status(405).end("Method Not Allowed");
	}
}
