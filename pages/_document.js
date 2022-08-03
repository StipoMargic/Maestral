import { Html, Head, Main, NextScript } from "next/document";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const THEME = createTheme({
	typography: {
		fontFamily: `"Lobster", cursive`,
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500,
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: `
        @font-face {
          font-family: 'Lobster';
					font-weight: 400;
        }
      `,
		},
	},
});

export default function Document() {
	return (
		<Html lang="hr">
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
					rel="stylesheet"
				/>
				<title>Agencija Maestralic</title>
			</Head>
			<body>
				<ThemeProvider theme={THEME}>
					<CssBaseline />
					<Main />
					<NextScript />
				</ThemeProvider>
			</body>
		</Html>
	);
}
