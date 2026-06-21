import { sendMail } from "../../lib/mailer";

export default async function handler(req, res) {
	if (req.method !== "POST") {
		res.setHeader("Allow", "POST");
		return res.status(405).end("Method Not Allowed");
	}

	const { quantity, tripName, time, date, email, tel } = req.body ?? {};

	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (
		typeof email !== "string" ||
		!emailPattern.test(email) ||
		!tripName ||
		!time ||
		!date ||
		!tel ||
		!Number.isInteger(Number(quantity)) ||
		Number(quantity) < 1
	) {
		return res.status(400).json({ error: "Invalid input" });
	}

	const mailOptions = {
		from: email,
		to: process.env.GMAIL_USER,
		subject: `Netko hoće izlet s plaćanjem na lokaciji`,
		html: `<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Your reservation is done!</title>
	</head>
	<body>
  ${email} hoće izlet s plaćanjem na lokaciji

  Podaci o izletu: <br />
  Broj putnika: ${quantity} <br />
  Naziv izleta: ${tripName} <br />
  Vrijeme: ${time} <br />
  Datum: ${date} <br />
  Telefon: ${tel} <br />
  Email: ${email} <br />
	</body>
</html>
`,
	};

	try {
		await sendMail(mailOptions);
		return res.status(200).json({ ok: true });
	} catch (error) {
		console.error("Failed to send pay-on-premise email:", error);
		return res.status(500).json({ error: "Failed to send email" });
	}
}
