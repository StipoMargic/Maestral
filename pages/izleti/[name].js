import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { TextField, Button } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
	container: {
		display: "flex",
		flexWrap: "wrap",
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: 200,
	},
}));
const data = [
	{
		id: 1,
		name: "Rent a boat",
		description:
			"Postani kapetan broda na jedan dan! Uživaj u krajolicima rijeke Cetine vozeći brod sam. Mi ćemo ti pokazati koliko je jednostavno, a tu se uputi u avanturu. Ne moraš biti profesionalac, dapače nikako iskustvo nije ni potrebno. Dođi sam, okupi obitelj ili prijatelje i pođite zajedno u istraživanje kanjona. Vozeći se otkrit ćeš sve tajne i spokoj rijeke Cetine, čak ćeš ugledati i ljepotu raskošnih šuma i planina. Ako dovoljnom dobro pogledaš, oči se neće moći zasititi boja i kombinacija valova koje rijeka proizvodi, kao i mnoštvo malih živih bića poput žaba, kornjača te raznih riba. O cvrkutu ptica i mira koje će ti ova vožnja donijeti ne treba puno više govoriti. Što čekaš, kreni u novu avanturu i uvjeri se sam!",
		images: ["0.jpeg"],
		price: 50,
		max: 8,
		apiID: "price_1LSOeVD3yQS6sHiOTNo0l7FV",
	},
	{
		id: 2,
		name: "Kayaking",
		description:
			"Veslo u ruke i započnite svoj odmor na kayaking turi. Vaš je odabir hoćete li istražiti Cetinu ili saznati tajne bisera Dalmacije – našeg Jadranskog mora. Savršena prilika za jedan rekreativan dan  proveden u prirodi. Mi imamo kayak spreman za Vas od 9 ujutro, a Vi uživajte u svom danu do 6 popodne. Ponesite sa sobom sve što poželite i upustite se u kayaking avanturu sami ili s društvom. Dajemo Vam potpuno pravo da svoju rutu odredite sami, a tu smo da pomognemo sa svime što Vam treba. Odmor i Omišu sam po sebi je predivan, ali može biti još ljepši uz veslanje kayaka. Iskustvo Vam nije potrebno, a ovu turu isprobajte odmah jer vjerujte, nećete nimalo požaliti.",
		images: ["1.jpeg"],
		price: 40,
		max: 20,
		apiID: "price_1LSOfRD3yQS6sHiOubCIW8iJ",
	},
	{
		id: 3,
		name: "Quad Safari",
		description:
			"Želite iskusiti vožnju novim quadovima? Quad Safari tura je koja Vam pruža priliku da postanete vozač jednog od najtraženijih vozila ove sezone. Udobnost i brzina na četiri kotača. Putujući uz Jadransku obalu, moći ćete uživati u čarobnim krajolicima Dalmacije. Nakon vožnje do Zadvarja, osvježite se na slapu Gubavica. Možete plivati u bistroj vodi rijeke Cetine. Poslije pauze vraćate se drugom rutom vozeći se kraj kanjona rijeke Cetine. Što čekate? Ohrabrite se i sjedajte na quad!",
		images: ["2.jpeg"],
		price: 140,
		max: 10,
		apiID: "price_1LSObmD3yQS6sHiOo520wdBA",
	},
	{
		id: 4,
		name: "Canyoning Tour",
		description:
			"Ako ste avanturističkog duha ili jednostavno spremni i za drugačije iskustvo, isprobajte canyoning turu. Prethodno iskustvo nije potrebno, već samo dobra volja i želja. Otkrijte mistične kreacije koje krije rijeka Cetina. Kombinacija šetanja, penjanja, skakanja, plivanja i uživanja. 3 – 4 sata osvježenja u divnoj rijeci, istraživanja netaknute prirode i 500 metara visokog slapa Gubavica. Zabavite se i u isto vrijeme doživite mirnoću koju nosi Cetina. S Vama je vodič tijekom cijele ture, pa se za ništa ne morate brinuti ni bojati. Uostalom, život je prekratak da ne bi iskoristili ovu jedinstvenu priliku i isprobali canyoning.",
		images: ["3.jpeg"],
		price: 70,
		mas: 20,
		apiID: "price_1LSOdnD3yQS6sHiOYrZx494e",
	},
	{
		id: 5,
		name: "Vožnja brodom",
		description:
			"Zaplovite s nama u jedinstveno iskustvo vožnje rijekom Cetinom. Očekuje Vas 7 km istraživanja čarobnog krajolika, prilika da u 2 sata vidite planine i životinje koje se skrivaju u dubinama rijeke. Rashladite se u vrućim ljetnim danima uživajući u netaknutoj prirodi. Nakon 40 min stižete na odredište – Radmanove mlinice. Restoran, izletište u kojem ćete kroz spokoj kamenih mlinskih kola, krošnji visokih stabala i pastrva u bazenu osjetiti duh prošlosti. Nadalje, osim što možete iskusiti Dalmaciju u restoranu, možete i istražiti ovaj park prirode. Izlet koji je idealan za svakoga, a vraćajući se poželjet ćete da ovo doživite još jednom.",
		images: ["4.jpeg"],
		price: 15,
		max: 20,
		apiID: "price_1LSOccD3yQS6sHiOxVj0HScd",
	},
	{
		id: 6,
		name: "Rafting",
		description:
			"Ako ste spremni dan provesti avanturistički – Rafting tura idealna za Vas. Ne treba Vas biti strah je iskustvo  nije potrebno, a za svaku sigurnost tu je naš skipper. Našu avanturu počinjemo ispred Maestralić agencije. Prvo slijedi 40 min ugodne vožnje do Podgrađa tijekom koje možete uživati promatrajući netaknutu prirodu, visoke planine i guste šume našeg krajolika. Na startu oblačite prsluke i kacige ( a cipele obavezno ponesite ), te su Vam dana i vesla. Zatim kreće avantura brzacima rijeke Cetine koja traje 3 sata uz dulje pauze. Naravno, imat ćete vremena za osvježenje u hladnoj vodi rijeke Cetine. U svakom trenutku, skipper je s Vama tijekom cijele rafting ture. Ohrabrite se i napunite adrenalinom za nezaboravno proveden dan u prirodnom krajoliku.",
		images: ["5.jpeg"],
		price: 30,
		max: 8,
		apiID: "price_1LSOdFD3yQS6sHiOceZxl8kH",
	},
];

export async function getStaticPaths() {
	const paths = data.map((trip) => ({
		params: { name: trip.name },
	}));

	return {
		paths,
		fallback: "blocking",
	};
}

export const getStaticProps = async ({ params }) => {
	const trip = data.find((trip) => trip.name === params.name);
	return {
		props: {
			trip,
		},
	};
};

const Img = styled("img")({
	margin: "auto",
	display: "block",
	maxWidth: "100%",
	maxHeight: "100%",
});

export default function ComplexGrid(props) {
	const { trip } = props;
	const [order, setOrder] = useState({
		quantity: 1,
		price: trip.apiID,
		time: null,
		date: null,
	});
	const classes = useStyles();
	const handleSubmit = (e) => {
		e.preventDefault();

		fetch(`${window.location.origin}/api/checkout_session`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(order),
		})
			.then((res) => res.json())
			.then((data) => window.open(data.url, "_blank"))
			.catch((err) => console.log(err));
	};

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
				<Paper
					sx={{
						p: 2,
						margin: "auto",
						maxWidth: 1000,
						flexGrow: 1,
						backgroundColor: (theme) =>
							theme.palette.mode === "dark" ? "#1A2027" : "#fff",
					}}
				>
					<Grid container mt={4} spacing={2}>
						<Grid item>
							<ButtonBase sx={{ width: 256, height: 256 }}>
								<Img alt="complex" src={`/img/${trip.images[0]}`} />
							</ButtonBase>
						</Grid>
						<Grid item xs={12} sm container>
							<Grid item xs container direction="column" spacing={2}>
								<Grid item xs>
									<Typography gutterBottom variant="title" component="div">
										{trip.name}
									</Typography>
									<Typography mt={2} variant="body2" gutterBottom>
										{trip.description}
									</Typography>
									<TextField
										type="number"
										name="number"
										InputProps={{
											inputProps: {
												max: 10,
												min: 1,
											},
										}}
										onChange={(e) => {
											setOrder({ ...order, quantity: e.target.value });
										}}
										value={order.quantity}
										label="Broj osoba"
										variant="outlined"
										defaultValue={3}
									/>
								</Grid>
								<Grid item>
									<form className={classes.container}>
										<TextField
											id="time"
											onChange={(e) => {
												setOrder({ ...order, time: e.target.value });
											}}
											value={order.time}
											label="Vrijeme"
											type="time"
											defaultValue="10:00"
											className={classes.textField}
											InputLabelProps={{
												shrink: true,
											}}
											inputProps={{
												step: 1800, // 30 min
												min: "08:00",
												max: "22:00",
											}}
										/>

										<TextField
											id="date"
											label="Datum"
											type="date"
											onChange={(e) => {
												setOrder({ ...order, date: e.target.value });
											}}
											value={order.date}
											defaultValue={new Date().toISOString().split("T")[0]}
											className={classes.textField}
											InputLabelProps={{
												shrink: true,
											}}
											InputProps={{
												min: "2022-04-01",
												max: "2022-10-31",
											}}
										/>
									</form>
								</Grid>
								<Grid
									item
									sx={{
										display: "flex",
										justifyContent: "center",
									}}
								>
									<Button
										mt={10}
										type="submit"
										onClick={handleSubmit}
										variant="contained"
										color="primary"
									>
										Rezerviraj odmah!
									</Button>
								</Grid>
							</Grid>
							<Grid item>
								<Typography variant="subtitle1" component="div">
									&euro; {trip.price}
								</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Paper>
			</div>
			<Footer />
		</>
	);
}
