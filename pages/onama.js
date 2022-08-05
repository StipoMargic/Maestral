import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer";
import { Gallery } from "../components/Gallery.jsx";
import { Button, Grid, Typography } from "@mui/material";
import { useLang } from "../ctx/LangContext.tsx";

export default function Onama() {
	const { lang } = useLang();
	return (
		<>
			<Navbar />
			<div
				className="content"
				style={{
					backgroundImage: "url(/papers.jpg)",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
				}}
			>
				<Typography
					variant="h4"
					sx={{ textAlign: "center", marginTop: "2.5rem" }}
				>
					{lang === "HR" ? "O nama" : "About us"}
				</Typography>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						maxWidth: "800px",
						width: "100%",
						margin: "0 auto",
						textAlign: "center",
						lineHeight: "1.5",
						fontSize: "1.3rem",
					}}
				>
					{lang === "HR" ? (
						<>
							Zavijeno u narančastu boju, Maestralić agencija smještena je u
							prekrasnom djelu starog grada Omiša. Naši radnici spremni su
							pomoći Vam i pružiti sve potrebne informacije. Dostupni smo za Vas
							u svakom trenutku. Mi smo agencija s preko 30 godina iskustva rada
							u turizmu. Grana je to koja cvjeta kod nas zbog Vas. Zato hvala
							što nas podržavate godinama i što ste postali ili ćete postati dio
							obitelji Maestralić
						</>
					) : (
						<>
							Wrapped in orange, the Maestralić agency is located in a beautiful
							part of the old town of Omiš. Our workers are ready to help you
							and provide all the necessary information. We are available for
							you at any time. We are an agency with over 30 years of experience
							working in tourism. It is the branch that blooms here because of
							you. So thank you for supporting us for years and for becoming or
							becoming part of the Maestralić family.
						</>
					)}
					<Button
						href="/izleti"
						size="large"
						sx={{ marginTop: "1rem" }}
						variant="contained"
						color="primary"
					>
						{lang === "HR" ? "Pogledajte izlete" : "See excursions"}
					</Button>
				</div>
				<Gallery />
			</div>
			<Footer />
		</>
	);
}
