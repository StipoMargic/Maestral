import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="hr">
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link
					href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
					rel="stylesheet"
				/>
				<title>Agencija Maestralic</title>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
