import { buffer } from "micro";
import Stripe from "stripe";
import { sendMail } from "../../lib/mailer";

const sendMailToOwner = (body) => {
	const { email, phone, name } = body.billing_details;
	const { date, time, tripName } = body.metadata;

	const mailOptions = {
		from: process.env.GMAIL_USER,
		to: process.env.GMAIL_USER,
		subject: `${name} -reserved  ${tripName}`,
		html: `<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Your reservation is done!</title>
	</head>
	<body>
		${name} je rezervirao ${tripName} !<br />
		<br />
		Datum: ${date}<br />
Vrijeme: ${time}<br />
Email: ${email}<br />
Telefon: ${phone}<br />
		<br />
	</body>
</html>
`,
	};

	return sendMail(mailOptions);
};

const sendMailToCustomer = (body) => {
	const { email, name } = body.billing_details;
	const { date, time, tripName } = body.metadata;

	const mailOptions = {
		from: process.env.GMAIL_USER,
		to: email,
		subject: "Your order has been placed",
		html: `<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Your reservation is done!</title>
	</head>
	<body>
		Hi, ${name} !<br />
		<br />
		You have successfully made a reservation on ${date} at ${time} !<br />
		<br />
		<br />
		Enjoy in your ${tripName} trip!<br />
		<br />
		<br />
		Kind regards,<br />
		Agencija Maestralić
	</body>
</html>
`,
	};

	return sendMail(mailOptions);
};

export const config = {
	api: {
		bodyParser: false,
	},
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
	apiVersion: "2020-08-27",
});

// Stripe CLI / dashboard webhook signing secret — read from the environment.
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

export default async function handler(req, res) {
	if (req.method !== "POST") {
		res.setHeader("Allow", "POST");
		return res.status(405).end("Method Not Allowed");
	}

	const buf = await buffer(req);
	const sig = req.headers["stripe-signature"];

	let event;

	try {
		event = stripe.webhooks.constructEvent(buf, sig, endpointSecret);
	} catch (err) {
		res.status(400).send(`Webhook Error: ${err.message}`);
		return;
	}

	try {
		if (event.type === "charge.succeeded") {
			const charge = event.data.object;
			await Promise.all([sendMailToCustomer(charge), sendMailToOwner(charge)]);
		} else {
			console.warn(`Unhandled event type: ${event.type}`);
		}

		res.json({ received: true });
	} catch (err) {
		console.error("Failed to handle webhook event:", err);
		res.status(500).json({ error: "Failed to process webhook" });
	}
}
