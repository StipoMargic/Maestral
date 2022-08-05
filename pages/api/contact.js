const nodemailer = require("nodemailer");

export default async function handler(req, res) {
	if (req.method === "POST") {
		var transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: "agencijamaestralic@gmail.com",
				pass: "aixwndcmzqfjlwni",
			},
		});

		let mailOptions = {
			from: req.body.email,
			to: "agencijamaestralic@gmail.com",
			subject: `${req.body.fullName} je poslao poruku`,
			html: `<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Your reservation is done!</title>
	</head>
	<body>
		${req.body.fullName} je poslao poruku !<br />
		<br />
    Email: ${req.body.email}<br /> <br />
    Poruka: ${req.body.message}<br />
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
	} else {
		res.setHeader("Allow", "POST");
		res.status(405).end("Method Not Allowed");
	}
}
