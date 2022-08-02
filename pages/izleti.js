import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer";
import { Container, Grid, Typography } from "@mui/material";
import TripBigger from "../components/TripBigger";
const data = [
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
	{
		id: 6,
		name: "Rafting",
		description:
			"Ako ste spremni dan provesti avanturistički – Rafting tura idealna za Vas. Ne treba Vas biti strah je iskustvo  nije potrebno, a za svaku sigurnost tu je naš skipper. Našu avanturu počinjemo ispred Maestralić agencije. Prvo slijedi 40 min ugodne vožnje do Podgrađa tijekom koje možete uživati promatrajući netaknutu prirodu, visoke planine i guste šume našeg krajolika. Na startu oblačite prsluke i kacige ( a cipele obavezno ponesite ), te su Vam dana i vesla. Zatim kreće avantura brzacima rijeke Cetine koja traje 3 sata uz dulje pauze. Naravno, imat ćete vremena za osvježenje u hladnoj vodi rijeke Cetine. U svakom trenutku, skipper je s Vama tijekom cijele rafting ture. Ohrabrite se i napunite adrenalinom za nezaboravno proveden dan u prirodnom krajoliku.",
		images: ["5.jpeg"],
	},
];

export default function Izleti() {
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
					variant="h2"
					style={{ marginTop: "2rem	", textAlign: "center" }}
				>
					Izleti
				</Typography>
				<Container>
					<Grid container spacing={4} mt={4} mb={4}>
						{data.map((trip) => (
							<Grid item xs={12} md={6} key={trip.id}>
								<TripBigger
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
