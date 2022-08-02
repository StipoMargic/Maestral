import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer";
import { Gallery } from "../components/Gallery.jsx";
import { Button, Grid, Typography } from "@mui/material";

export default function Onama() {
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
					Naši izleti{" "}
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
					Zavijeno u narančastu boju, Maestralić agencija smještena je u
					prekrasnom djelu starog grada Omiša. Naši radnici spremni su pomoći
					Vam i pružiti sve potrebne informacije. Dostupni smo za Vas u svakom
					trenutku. Mi smo agencija s preko 30 godina iskustva rada u turizmu.
					Grana je to koja cvjeta kod nas zbog Vas. Zato hvala što nas
					podržavate godinama i što ste postali ili ćete postati dio obitelji
					Maestralić
					<Button
						href="/izleti"
						size="large"
						sx={{ marginTop: "1rem" }}
						variant="contained"
						color="primary"
					>
						Vidi više
					</Button>
				</div>
				<Gallery />
			</div>
			<Footer />
		</>
	);
}
