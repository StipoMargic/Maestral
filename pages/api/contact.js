import { sendMail } from "../../lib/mailer";

export default async function handler(req, res) {
	if (req.method !== "POST") {
		res.setHeader("Allow", "POST");
		return res.status(405).end("Method Not Allowed");
	}

	const { fullName, email, message } = req.body ?? {};

	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (
		typeof fullName !== "string" ||
		!fullName.trim() ||
		typeof email !== "string" ||
		!emailPattern.test(email) ||
		typeof message !== "string" ||
		!message.trim()
	) {
		return res.status(400).json({ error: "Invalid input" });
	}

	const mailOptions = {
		from: email,
		to: process.env.GMAIL_USER,
		subject: `${fullName} je poslao poruku`,
		html: `<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Your reservation is done!</title>
	</head>
	<body>
		${fullName} je poslao poruku !<br />
		<br />
    Email: ${email}<br /> <br />
    Poruka: ${message}<br />
		<br />
	</body>
</html>
`,
	};

	try {
		await sendMail(mailOptions);
		return res.status(200).json({ ok: true });
	} catch (error) {
		console.error("Failed to send contact email:", error);
		return res.status(500).json({ error: "Failed to send email" });
	}
}
