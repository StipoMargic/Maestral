import { buffer } from "micro";
import Stripe from "stripe";
const nodemailer = require("nodemailer");

const sendMailToOwner = (body) => {
	const { email, phone, name } = body.customer_details;
	const { date, time, tripName } = body.metadata;
	var transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: "agencijamaestralic@gmail.com",
			pass: "aixwndcmzqfjlwni",
		},
	});

	let mailOptions = {
		from: "agencijamaestralic@gmail.com",
		to: "agencijamaestralic@gmail.com",
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

	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			console.log(error);
		} else {
			console.log("Email sent: " + info.response);
		}
	});
};
const sendMailToCustomer = (body) => {
	const { email, name } = body.customer_details;
	const { date, time, tripName } = body.metadata;
	var transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: "agencijamaestralic@gmail.com",
			pass: "aixwndcmzqfjlwni",
		},
	});

	let mailOptions = {
		from: "agencijamaestralic@gmail.com",
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

	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			console.log(error);
		} else {
			console.log("Email sent: " + info.response);
		}
	});
};

export const config = {
	api: {
		bodyParser: false,
	},
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
	apiVersion: "2020-08-27",
});
// This is your Stripe CLI webhook secret for testing your endpoint locally.
const endpointSecret = "whsec_Nd5PP9awBng4blQ5Zh0ISoY2olVtS4h5";

export default async function handler(req, res) {
	if (req.method === "POST") {
		const buf = await buffer(req);
		const sig = req.headers["stripe-signature"];

		let event;

		try {
			event = stripe.webhooks.constructEvent(buf, sig, endpointSecret);

			if (event.type === "checkout.session.completed") {
				const charge = event.data.object;
				sendMailToCustomer(charge);
				sendMailToOwner(charge);
			} else {
				console.warn(`Unhandled event type: ${event.type}`);
			}
		} catch (err) {
			res.status(400).send(`Webhook Error: ${err.message}`);
			return;
		}

		res.json({ received: true });
	} else {
		res.setHeader("Allow", "POST");
		res.status(405).end("Method Not Allowed");
	}
}
