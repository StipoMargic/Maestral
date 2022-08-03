import React from "react";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar.jsx";
import Image from "next/image";
import Footer from "../components/Footer";
import { Alert, Grid, Snackbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Trip from "../components/Trip.jsx";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const data = [
	{
		id: 6,
		name: "Rafting",
		description:
			"Ako ste spremni dan provesti avanturistički – Rafting tura idealna za Vas. Ne treba Vas biti strah je iskustvo  nije potrebno, a za svaku sigurnost tu je naš skipper. Našu avanturu počinjemo ispred Maestralić agencije. Prvo slijedi 40 min ugodne vožnje do Podgrađa tijekom koje možete uživati promatrajući netaknutu prirodu, visoke planine i guste šume našeg krajolika. Na startu oblačite prsluke i kacige ( a cipele obavezno ponesite ), te su Vam dana i vesla. Zatim kreće avantura brzacima rijeke Cetine koja traje 3 sata uz dulje pauze. Naravno, imat ćete vremena za osvježenje u hladnoj vodi rijeke Cetine. U svakom trenutku, skipper je s Vama tijekom cijele rafting ture. Ohrabrite se i napunite adrenalinom za nezaboravno proveden dan u prirodnom krajoliku.",
		images: ["5.jpeg"],
	},
	{
		id: 1,
		name: "Rent a boat",
		description:
			"Postani kapetan broda na jedan dan! Uživaj u krajolicima rijeke Cetine vozeći brod sam. Mi ćemo ti pokazati koliko je jednostavno, a tu se uputi u avanturu. Ne moraš biti profesionalac, dapače nikako iskustvo nije ni potrebno. Dođi sam, okupi obitelj ili prijatelje i pođite zajedno u istraživanje kanjona. Vozeći se otkrit ćeš sve tajne i spokoj rijeke Cetine, čak ćeš ugledati i ljepotu raskošnih šuma i planina. Ako dovoljnom dobro pogledaš, oči se neće moći zasititi boja i kombinacija valova koje rijeka proizvodi, kao i mnoštvo malih živih bića poput žaba, kornjača te raznih riba. O cvrkutu ptica i mira koje će ti ova vožnja donijeti ne treba puno više govoriti. Što čekaš, kreni u novu avanturu i uvjeri se sam!",
		images: ["0.jpeg"],
	},
	{
		id: 2,
		name: "Kayaking",
		description:
			"Veslo u ruke i započnite svoj odmor na kayaking turi. Vaš je odabir hoćete li istražiti Cetinu ili saznati tajne bisera Dalmacije – našeg Jadranskog mora. Savršena prilika za jedan rekreativan dan  proveden u prirodi. Mi imamo kayak spreman za Vas od 9 ujutro, a Vi uživajte u svom danu do 6 popodne. Ponesite sa sobom sve što poželite i upustite se u kayaking avanturu sami ili s društvom. Dajemo Vam potpuno pravo da svoju rutu odredite sami, a tu smo da pomognemo sa svime što Vam treba. Odmor i Omišu sam po sebi je predivan, ali može biti još ljepši uz veslanje kayaka. Iskustvo Vam nije potrebno, a ovu turu isprobajte odmah jer vjerujte, nećete nimalo požaliti.",
		images: ["1.jpeg"],
	},
	{
		id: 3,
		name: "Quad Safari",
		description:
			"Želite iskusiti vožnju novim quadovima? Quad Safari tura je koja Vam pruža priliku da postanete vozač jednog od najtraženijih vozila ove sezone. Udobnost i brzina na četiri kotača. Putujući uz Jadransku obalu, moći ćete uživati u čarobnim krajolicima Dalmacije. Nakon vožnje do Zadvarja, osvježite se na slapu Gubavica. Možete plivati u bistroj vodi rijeke Cetine. Poslije pauze vraćate se drugom rutom vozeći se kraj kanjona rijeke Cetine. Što čekate? Ohrabrite se i sjedajte na quad!",
		images: ["2.jpeg"],
	},
	{
		id: 4,
		name: "Canyoning Tour",
		description:
			"Ako ste avanturističkog duha ili jednostavno spremni i za drugačije iskustvo, isprobajte canyoning turu. Prethodno iskustvo nije potrebno, već samo dobra volja i želja. Otkrijte mistične kreacije koje krije rijeka Cetina. Kombinacija šetanja, penjanja, skakanja, plivanja i uživanja. 3 – 4 sata osvježenja u divnoj rijeci, istraživanja netaknute prirode i 500 metara visokog slapa Gubavica. Zabavite se i u isto vrijeme doživite mirnoću koju nosi Cetina. S Vama je vodič tijekom cijele ture, pa se za ništa ne morate brinuti ni bojati. Uostalom, život je prekratak da ne bi iskoristili ovu jedinstvenu priliku i isprobali canyoning.",
		images: ["3.jpeg"],
	},
	{
		id: 5,
		name: "Vožnja brodom",
		description:
			"Zaplovite s nama u jedinstveno iskustvo vožnje rijekom Cetinom. Očekuje Vas 7 km istraživanja čarobnog krajolika, prilika da u 2 sata vidite planine i životinje koje se skrivaju u dubinama rijeke. Rashladite se u vrućim ljetnim danima uživajući u netaknutoj prirodi. Nakon 40 min stižete na odredište – Radmanove mlinice. Restoran, izletište u kojem ćete kroz spokoj kamenih mlinskih kola, krošnji visokih stabala i pastrva u bazenu osjetiti duh prošlosti. Nadalje, osim što možete iskusiti Dalmaciju u restoranu, možete i istražiti ovaj park prirode. Izlet koji je idealan za svakoga, a vraćajući se poželjet ćete da ovo doživite još jednom.",
		images: ["4.jpeg"],
	},
];

export default function Home() {
	const router = useRouter();
	const { status } = router.query;
	const onSuccess = () => toast.success("Wow so easy!");
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
				<Container>
					{status && status === "success" && (
						<Snackbar
							open={open}
							autoHideDuration={10000}
							anchorOrigin={{ vertical: "top", horizontal: "center" }}
						>
							<Alert severity="success" sx={{ width: "100%" }}>
								Rezervacija je uspješno izvršena. Hvala Vam na povjerenju!
							</Alert>
						</Snackbar>
					)}

					{status && status === "canceled" && (
						<Snackbar
							open={open}
							autoHideDuration={10000}
							anchorOrigin={{ vertical: "top", horizontal: "center" }}
						>
							<Alert severity="error" sx={{ width: "100%" }}>
								Rezervacija je otkazana.
							</Alert>
						</Snackbar>
					)}

					<Grid container spacing={2} mt={4}>
						<Grid item xs={12} md={6}>
							<Image
								src={`/img/${Math.floor(Math.random() * 20)}.jpeg`}
								alt="Picture of the author"
								layout="intrinsic"
								height={450}
								width={700}
							/>
						</Grid>
						<Grid
							item
							xs={12}
							md={6}
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								fontSize: "2rem",
								lineHeight: "1.5rem",
								fontWeight: "bold",
								fontStyle: "italic",
							}}
						>
							Istraži Omiš uz dozu adrenalina
						</Grid>
					</Grid>
					<Typography
						variant="h4"
						fontFamily="Lobster, cursive"
						sx={{ textAlign: "center", marginTop: "2.5rem" }}
					>
						Naši izleti{" "}
					</Typography>
					<Grid container spacing={2} mt={4} mb={4}>
						{data.map((trip) => (
							<Grid item xs={12} md={4} key={trip.id}>
								<Trip
									name={trip.name}
									description={trip.description}
									image={trip.images[0]}
								/>
							</Grid>
						))}
					</Grid>
				</Container>
			</div>
			<Footer />
		</>
	);
}
