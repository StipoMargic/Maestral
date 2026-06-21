import nodemailer from "nodemailer";

let cachedTransporter;

// Shared Gmail transporter. Credentials are read from the environment
// (GMAIL_USER / GMAIL_APP_PASSWORD) — never hardcode them in source.
export function getTransporter() {
	if (!cachedTransporter) {
		const user = process.env.GMAIL_USER;
		const pass = process.env.GMAIL_APP_PASSWORD;

		if (!user || !pass) {
			throw new Error(
				"Missing mail credentials: set GMAIL_USER and GMAIL_APP_PASSWORD (see .env.example)."
			);
		}

		cachedTransporter = nodemailer.createTransport({
			service: "gmail",
			auth: { user, pass },
		});
	}

	return cachedTransporter;
}

// Promise-based wrapper around transporter.sendMail so callers can await it
// and surface real success/failure to the HTTP response.
export function sendMail(mailOptions) {
	return getTransporter().sendMail(mailOptions);
}
