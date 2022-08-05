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

		const { quantity, tripName, time, date, email, tel } = req.body;

		let mailOptions = {
			from: email,
			to: "agencijamaestralic@gmail.com",
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
