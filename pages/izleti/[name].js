import { useLang } from "../..//ctx/LangContext.tsx";
import { loadStripe } from "@stripe/stripe-js";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { TextField, Button, Snackbar, Alert } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import { useRouter } from "next/router";

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
		id: 6,
		name: "Rafting",
		description:
			"Ako ste spremni dan provesti avanturistički – Rafting tura idealna za Vas. Ne treba Vas biti strah je iskustvo  nije potrebno, a za svaku sigurnost tu je naš skipper. Našu avanturu počinjemo ispred Maestralić agencije. Prvo slijedi 40 min ugodne vožnje do Podgrađa tijekom koje možete uživati promatrajući netaknutu prirodu, visoke planine i guste šume našeg krajolika. Na startu oblačite prsluke i kacige ( a cipele obavezno ponesite ), te su Vam dana i vesla. Zatim kreće avantura brzacima rijeke Cetine koja traje 3 sata uz dulje pauze. Naravno, imat ćete vremena za osvježenje u hladnoj vodi rijeke Cetine. U svakom trenutku, skipper je s Vama tijekom cijele rafting ture. Ohrabrite se i napunite adrenalinom za nezaboravno proveden dan u prirodnom krajoliku.",
		description_en:
			"If you are ready to spend an adventurous day - Rafting tour is ideal for you. You don't need to be afraid, experience is not necessary, and our skipper is there for all safety. We start our adventure in front of the Maestralić agency. First, there is a 40-minute pleasant drive to Podgrađe, during which you can enjoy observing the untouched nature, high mountains and dense forests of our landscape. At the start, you put on vests and helmets (and you must bring your shoes), and you are also given oars. Then the adventure begins with the rapids of the Cetina river, which lasts 3 hours with longer breaks. Of course, you will have time to refresh yourself in the cold water of the Cetina River. At all times, the skipper is with you during the entire rafting tour. Take courage and fill with adrenaline for an unforgettable day spent in nature.",
		images: ["/rafting/1.jpeg", "/rafting/2.jpeg", "/rafting/3.jpeg"],

		price: 35,
		max: 8,
		apiID: "price_1LSOdFD3yQS6sHiOceZxl8kH",
	},
	{
		id: 1,
		name: "Rent a boat",
		description:
			"Postani kapetan broda na jedan dan! Uživaj u krajolicima rijeke Cetine vozeći brod sam. Mi ćemo ti pokazati koliko je jednostavno, a tu se uputi u avanturu. Ne moraš biti profesionalac, dapače nikako iskustvo nije ni potrebno. Dođi sam, okupi obitelj ili prijatelje i pođite zajedno u istraživanje kanjona. Vozeći se otkrit ćeš sve tajne i spokoj rijeke Cetine, čak ćeš ugledati i ljepotu raskošnih šuma i planina. Ako dovoljnom dobro pogledaš, oči se neće moći zasititi boja i kombinacija valova koje rijeka proizvodi, kao i mnoštvo malih živih bića poput žaba, kornjača te raznih riba. O cvrkutu ptica i mira koje će ti ova vožnja donijeti ne treba puno više govoriti. Što čekaš, kreni u novu avanturu i uvjeri se sam!",
		description_en:
			"Become a ship captain for a day! Enjoy the scenery of the river Cetina driving the boat yourself. We will show you how simple it is, and then go on an adventure. You don't have to be a professional, in fact no experience is necessary. Come alone, gather your family or friends and explore the canyon together. While driving, you will discover all the secrets and tranquility of the Cetina river, you will even see the beauty of the magnificent forests and mountains. If you look hard enough, your eyes will not be able to get enough of the colors and combinations of waves that the river produces, as well as the multitude of small living creatures such as frogs, turtles and various fish. We don't need to say much more about the chirping of birds and the peace that this ride will bring you. What are you waiting for, go on a new adventure and see for yourself!",
		images: ["/rent/1.jpeg", "/rent/2.jpeg", "/rent/3.jpeg"],
		price: 60,
		max: 8,
		apiID: "price_1LSOeVD3yQS6sHiOTNo0l7FV",
	},
	{
		id: 2,
		name: "Kayaking",
		description:
			"Veslo u ruke i započnite svoj odmor na kayaking turi. Vaš je odabir hoćete li istražiti Cetinu ili saznati tajne bisera Dalmacije – našeg Jadranskog mora. Savršena prilika za jedan rekreativan dan  proveden u prirodi. Mi imamo kayak spreman za Vas od 9 ujutro, a Vi uživajte u svom danu do 6 popodne. Ponesite sa sobom sve što poželite i upustite se u kayaking avanturu sami ili s društvom. Dajemo Vam potpuno pravo da svoju rutu odredite sami, a tu smo da pomognemo sa svime što Vam treba. Odmor i Omišu sam po sebi je predivan, ali može biti još ljepši uz veslanje kayaka. Iskustvo Vam nije potrebno, a ovu turu isprobajte odmah jer vjerujte, nećete nimalo požaliti.",
		description_en:
			"Paddle in hand and start your vacation on a kayaking tour. It is your choice whether you want to explore Cetina or find out the secrets of the pearl of Dalmatia - our Adriatic Sea. A perfect opportunity for a recreational day spent in nature. We have a kayak ready for you from 9 am, and you can enjoy your day until 6 pm. Take everything you want with you and embark on a kayaking adventure alone or with a group. We give you the full right to determine your route yourself, and we are here to help with everything you need. A vacation in Omiš is wonderful in itself, but it can be even more beautiful with kayaking. You don't need experience, and try this tour right away, because believe me, you won't regret it at all.",
		images: ["/kayak/1.jpeg", "/kayak/2.jpeg", "/kayak/3.jpeg"],

		price: 40,
		max: 20,
		apiID: "price_1LSOfRD3yQS6sHiOubCIW8iJ",
	},
	{
		id: 3,
		name: "Quad Safari",
		description:
			"Želite iskusiti vožnju novim quadovima? Quad Safari tura je koja Vam pruža priliku da postanete vozač jednog od najtraženijih vozila ove sezone. Udobnost i brzina na četiri kotača. Putujući uz Jadransku obalu, moći ćete uživati u čarobnim krajolicima Dalmacije. Nakon vožnje do Zadvarja, osvježite se na slapu Gubavica. Možete plivati u bistroj vodi rijeke Cetine. Poslije pauze vraćate se drugom rutom vozeći se kraj kanjona rijeke Cetine. Što čekate? Ohrabrite se i sjedajte na quad!",
		description_en:
			"Do you want to experience driving new quads? Quad Safari is a tour that gives you the opportunity to become the driver of one of the most sought-after vehicles this season. Comfort and speed on four wheels. Traveling along the Adriatic coast, you will be able to enjoy the magical landscapes of Dalmatia. After driving to Zadvarje, refresh yourself at the Gubavica waterfall. You can swim in the clear water of the river Cetina. After the break, you return by another route, driving by the Cetina river canyon. What are you waiting for? Take heart and get on the quad!",
		images: ["/quad/1.png", "/quad/2.png", "/quad/3.png"],

		price: 140,
		max: 10,
		apiID: "price_1LSObmD3yQS6sHiOo520wdBA",
	},
	{
		id: 4,
		name: "Canyoning Tour",
		description:
			"Ako ste avanturističkog duha ili jednostavno spremni i za drugačije iskustvo, isprobajte canyoning turu. Prethodno iskustvo nije potrebno, već samo dobra volja i želja. Otkrijte mistične kreacije koje krije rijeka Cetina. Kombinacija šetanja, penjanja, skakanja, plivanja i uživanja. 3 – 4 sata osvježenja u divnoj rijeci, istraživanja netaknute prirode i 500 metara visokog slapa Gubavica. Zabavite se i u isto vrijeme doživite mirnoću koju nosi Cetina. S Vama je vodič tijekom cijele ture, pa se za ništa ne morate brinuti ni bojati. Uostalom, život je prekratak da ne bi iskoristili ovu jedinstvenu priliku i isprobali canyoning.",
		description_en:
			"If you are adventurous or simply ready for a different experience, try a canyoning tour. Previous experience is not necessary, only good will and desire. Discover the mystical creations hidden by the river Cetina. A combination of walking, climbing, jumping, swimming and enjoying. 3-4 hours of refreshing in the wonderful river, exploring untouched nature and the 500-meter high Gubavica waterfall. Have fun and at the same time experience the tranquility of Cetina. The guide is with you during the entire tour, so you don't have to worry or fear anything. After all, life is too short not to take advantage of this unique opportunity and try canyoning.",
		images: ["/canyon/1.jpeg", "/canyon/2.jpeg", "/canyon/3.jpeg"],

		price: 60,
		max: 20,
		apiID: "price_1LSOdnD3yQS6sHiOYrZx494e",
	},
	{
		id: 5,
		name: "Boat ride",
		description:
			"Zaplovite s nama u jedinstveno iskustvo vožnje rijekom Cetinom. Očekuje Vas 7 km istraživanja čarobnog krajolika, prilika da u 2 sata vidite planine i životinje koje se skrivaju u dubinama rijeke. Rashladite se u vrućim ljetnim danima uživajući u netaknutoj prirodi. Nakon 40 min stižete na odredište – Radmanove mlinice. Restoran, izletište u kojem ćete kroz spokoj kamenih mlinskih kola, krošnji visokih stabala i pastrva u bazenu osjetiti duh prošlosti. Nadalje, osim što možete iskusiti Dalmaciju u restoranu, možete i istražiti ovaj park prirode. Izlet koji je idealan za svakoga, a vraćajući se poželjet ćete da ovo doživite još jednom.",
		description_en:
			"Sail with us in a unique experience of driving on the Cetina River. 7 km of exploration of the magical landscape awaits you, an opportunity to see mountains and animals hiding in the depths of the river in 2 hours. Cool off on hot summer days while enjoying untouched nature. After 40 minutes you will arrive at your destination - Radmanovo mlinice. A restaurant, picnic area where you will feel the spirit of the past through the serenity of stone mill carts, the crowns of tall trees and trout in the pool. Furthermore, in addition to experiencing Dalmatia in a restaurant, you can also explore this nature park. An excursion that is ideal for everyone, and when you return you will want to experience this one more time.",
		images: ["/voznja/1.jpeg", "/voznja/2.jpeg", "/voznja/3.jpeg"],

		price: 15,
		max: 20,
		apiID: "price_1LSOccD3yQS6sHiOxVj0HScd",
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

const stripePromise = loadStripe(
	process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function ComplexGrid(props) {
	const { lang } = useLang();
	const { trip } = props;
	const router = useRouter();
	const [onPremiseButton, setOnPremiseButton] = useState(false);
	const { premise } = router.query;
	const [order, setOrder] = useState({
		quantity: 1,
		tripName: trip.name,
		price: trip.apiID,
		time: "10:00",
		date: new Date().toISOString().split("T")[0],
		email: "",
		tel: "",
	});
	const [premiseMail, setPremiseMail] = useState(null);
	const classes = useStyles();
	const createCheckOutSession = async () => {
		const stripe = await stripePromise;
		fetch(`/api/checkout_session`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(order),
		})
			.then(function (response) {
				return response.json();
			})
			.then(function (session) {
				console.log(session.customer);
				return stripe.redirectToCheckout({ sessionId: session.id });
			})
			.then(function (result) {
				// If `redirectToCheckout` fails due to a browser or network
				// error, you should display the localized error message to your
				// customer using `error.message`.
				if (result.error) {
					alert(result.error.message);
				}
			});
	};

	const payOnPremise = (e) => {
		e.preventDefault();
		fetch("/api/payOnPremise", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(order),
		})
			.then((res) => console.log(res))
			.catch((err) => console.log(err));

		setPremiseMail(true);
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
				{premise && premise === "true" && (
					<Snackbar
						open={open}
						autoHideDuration={10000}
						anchorOrigin={{ vertical: "top", horizontal: "center" }}
					>
						<Alert severity="success" sx={{ width: "100%" }}>
							{lang === "HR"
								? "Uspješno ste se prijavili na izlet. Rezervacija je poslana na vašu e-mail adresu."
								: "Successfully booked. Reservation sent to your email."}
						</Alert>
					</Snackbar>
				)}
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
									<Typography gutterBottom variant="h3" fontFamily="Lobster">
										{trip.name}
									</Typography>
									<Typography
										variant="body2"
										fontFamily="Lobster"
										mt={2}
										gutterBottom
									>
										{lang === "HR" ? trip.description : trip.description_en}
									</Typography>
								</Grid>
								<Grid container spacing={3} marginTop={1}>
									<Grid width={"100%"} item sm={12} md={4}>
										<TextField
											fullWidth
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
											label={lang === "HR" ? "Broj osoba" : "Number of people"}
											variant="outlined"
											className={classes.textField}
										/>
									</Grid>
									<Grid width={"100%"} item sm={12} md={4}>
										<TextField
											id="time"
											fullWidth
											onChange={(e) => {
												setOrder({ ...order, time: e.target.value });
											}}
											label="Vrijeme"
											type="time"
											defaultValue={lang === "HR" ? "Vrijeme" : "Time"}
											className={classes.textField}
											InputLabelProps={{
												shrink: true,
											}}
											InputProps={{
												step: 1800, // 30 min
												min: "08:00",
												max: "22:00",
											}}
										/>
									</Grid>
									<Grid item sm={12} md={4} width={"100%"}>
										<TextField
											id="date"
											fullWidth
											label={lang === "HR" ? "Datum" : "Date"}
											type="date"
											onChange={(e) => {
												setOrder({ ...order, date: e.target.value });
											}}
											defaultValue={new Date().toISOString().split("T")[0]}
											className={classes.textField}
											InputLabelProps={{
												shrink: true,
											}}
											InputProps={{
												min: new Date().toISOString().split("T")[0],
											}}
										/>
									</Grid>
								</Grid>
								<Grid
									item
									sx={{
										display: "flex",
										justifyContent: "space-between",
									}}
								>
									{onPremiseButton === false && (
										<Button
											mt={10}
											type="submit"
											onClick={createCheckOutSession}
											variant="contained"
											color="primary"
										>
											{lang === "HR"
												? "Rezerviraj i plati odmah"
												: "Reserve and pay now"}
										</Button>
									)}
									{onPremiseButton == false && (
										<Button
											mt={10}
											type="submit"
											onClick={() => setOnPremiseButton(true)}
											variant="outlined"
											color="success"
										>
											{lang === "HR"
												? "Rezerviraj i plati kasnije!"
												: "Reserve and pay later!"}
										</Button>
									)}
								</Grid>
								{onPremiseButton && (
									<>
										<small>Provide phone number and email!</small>
										<Grid container spacing={3} marginTop={1}>
											<Grid width={"100%"} item sm={12} md={4}>
												<TextField
													id="email"
													fullWidth
													onChange={(e) => {
														setOrder({ ...order, email: e.target.value });
													}}
													label={lang === "HR" ? "Email" : "E-mail"}
													type="email"
													defaultValue="10:00"
													className={classes.textField}
													InputLabelProps={{
														shrink: true,
													}}
													value={order.email}
													required
												/>
											</Grid>
											<Grid item sm={12} md={4} width={"100%"}>
												<TextField
													id="tel"
													fullWidth
													label={
														lang === "HR" ? "Broj telefona" : "Phone number"
													}
													type="tel"
													onChange={(e) => {
														setOrder({ ...order, tel: e.target.value });
													}}
													className={classes.textField}
													InputLabelProps={{
														shrink: true,
													}}
													value={order.tel}
													required
												/>
											</Grid>
											<Grid width={"100%"} item sm={12} md={4}>
												{premiseMail === true ? (
													<p>Vaša rezervacija je zaprimljena</p>
												) : (
													<Button
														mt={10}
														type="submit"
														onClick={payOnPremise}
														variant="outlined"
														color="success"
													>
														{lang === "HR"
															? "Rezerviraj i plati na izletu"
															: "Reserve and pay on-site"}
													</Button>
												)}
											</Grid>
										</Grid>
									</>
								)}
							</Grid>
							<Grid item>
								<Typography variant="subtitle1" component="div">
									{lang === "HR" ? "Cijena" : "Price"}: &euro; {trip.price}
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
