import { useLang } from "../ctx/LangContext.tsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer";
import { Container, Grid, Typography } from "@mui/material";
import TripBigger from "../components/TripBigger";
const data = [
	{
		id: 6,
		name: "Rafting",
		description:
			"Ako ste spremni dan provesti avanturistički – Rafting tura idealna za Vas. Ne treba Vas biti strah je iskustvo  nije potrebno, a za svaku sigurnost tu je naš skipper. Našu avanturu počinjemo ispred Maestralić agencije. Prvo slijedi 40 min ugodne vožnje do Podgrađa tijekom koje možete uživati promatrajući netaknutu prirodu, visoke planine i guste šume našeg krajolika. Na startu oblačite prsluke i kacige ( a cipele obavezno ponesite ), te su Vam dana i vesla. Zatim kreće avantura brzacima rijeke Cetine koja traje 3 sata uz dulje pauze. Naravno, imat ćete vremena za osvježenje u hladnoj vodi rijeke Cetine. U svakom trenutku, skipper je s Vama tijekom cijele rafting ture. Ohrabrite se i napunite adrenalinom za nezaboravno proveden dan u prirodnom krajoliku.",
		description_en:
			"If you are ready to spend an adventurous day - Rafting tour is ideal for you. You don't need to be afraid, experience is not necessary, and our skipper is there for all safety. We start our adventure in front of the Maestralić agency. First, there is a 40-minute pleasant drive to Podgrađe, during which you can enjoy observing the untouched nature, high mountains and dense forests of our landscape. At the start, you put on vests and helmets (and you must bring your shoes), and you are also given oars. Then the adventure begins with the rapids of the Cetina river, which lasts 3 hours with longer breaks. Of course, you will have time to refresh yourself in the cold water of the Cetina River. At all times, the skipper is with you during the entire rafting tour. Take courage and fill with adrenaline for an unforgettable day spent in nature.",
		images: ["/rafting/1.jpeg", "/rafting/2.jpeg", "/rafting/3.jpeg"],
	},
	{
		id: 1,
		name: "Rent a boat",
		description:
			"Postani kapetan broda na jedan dan! Uživaj u krajolicima rijeke Cetine vozeći brod sam. Mi ćemo ti pokazati koliko je jednostavno, a tu se uputi u avanturu. Ne moraš biti profesionalac, dapače nikako iskustvo nije ni potrebno. Dođi sam, okupi obitelj ili prijatelje i pođite zajedno u istraživanje kanjona. Vozeći se otkrit ćeš sve tajne i spokoj rijeke Cetine, čak ćeš ugledati i ljepotu raskošnih šuma i planina. Ako dovoljnom dobro pogledaš, oči se neće moći zasititi boja i kombinacija valova koje rijeka proizvodi, kao i mnoštvo malih živih bića poput žaba, kornjača te raznih riba. O cvrkutu ptica i mira koje će ti ova vožnja donijeti ne treba puno više govoriti. Što čekaš, kreni u novu avanturu i uvjeri se sam!",
		description_en:
			"Become a ship captain for a day! Enjoy the scenery of the river Cetina driving the boat yourself. We will show you how simple it is, and then go on an adventure. You don't have to be a professional, in fact no experience is necessary. Come alone, gather your family or friends and explore the canyon together. While driving, you will discover all the secrets and tranquility of the Cetina river, you will even see the beauty of the magnificent forests and mountains. If you look hard enough, your eyes will not be able to get enough of the colors and combinations of waves that the river produces, as well as the multitude of small living creatures such as frogs, turtles and various fish. We don't need to say much more about the chirping of birds and the peace that this ride will bring you. What are you waiting for, go on a new adventure and see for yourself!",
		images: ["/rent/1.jpeg", "/rent/2.jpeg", "/rent/3.jpeg"],
	},
	{
		id: 2,
		name: "Kayaking",
		description:
			"Veslo u ruke i započnite svoj odmor na kayaking turi. Vaš je odabir hoćete li istražiti Cetinu ili saznati tajne bisera Dalmacije – našeg Jadranskog mora. Savršena prilika za jedan rekreativan dan  proveden u prirodi. Mi imamo kayak spreman za Vas od 9 ujutro, a Vi uživajte u svom danu do 6 popodne. Ponesite sa sobom sve što poželite i upustite se u kayaking avanturu sami ili s društvom. Dajemo Vam potpuno pravo da svoju rutu odredite sami, a tu smo da pomognemo sa svime što Vam treba. Odmor i Omišu sam po sebi je predivan, ali može biti još ljepši uz veslanje kayaka. Iskustvo Vam nije potrebno, a ovu turu isprobajte odmah jer vjerujte, nećete nimalo požaliti.",
		description_en:
			"Paddle in hand and start your vacation on a kayaking tour. It is your choice whether you want to explore Cetina or find out the secrets of the pearl of Dalmatia - our Adriatic Sea. A perfect opportunity for a recreational day spent in nature. We have a kayak ready for you from 9 am, and you can enjoy your day until 6 pm. Take everything you want with you and embark on a kayaking adventure alone or with a group. We give you the full right to determine your route yourself, and we are here to help with everything you need. A vacation in Omiš is wonderful in itself, but it can be even more beautiful with kayaking. You don't need experience, and try this tour right away, because believe me, you won't regret it at all.",
		images: ["/kayak/1.jpeg", "/kayak/2.jpeg", "/kayak/3.jpeg"],
	},
	{
		id: 3,
		name: "Quad Safari",
		description:
			"Želite iskusiti vožnju novim quadovima? Quad Safari tura je koja Vam pruža priliku da postanete vozač jednog od najtraženijih vozila ove sezone. Udobnost i brzina na četiri kotača. Putujući uz Jadransku obalu, moći ćete uživati u čarobnim krajolicima Dalmacije. Nakon vožnje do Zadvarja, osvježite se na slapu Gubavica. Možete plivati u bistroj vodi rijeke Cetine. Poslije pauze vraćate se drugom rutom vozeći se kraj kanjona rijeke Cetine. Što čekate? Ohrabrite se i sjedajte na quad!",
		description_en:
			"Do you want to experience driving new quads? Quad Safari is a tour that gives you the opportunity to become the driver of one of the most sought-after vehicles this season. Comfort and speed on four wheels. Traveling along the Adriatic coast, you will be able to enjoy the magical landscapes of Dalmatia. After driving to Zadvarje, refresh yourself at the Gubavica waterfall. You can swim in the clear water of the river Cetina. After the break, you return by another route, driving by the Cetina river canyon. What are you waiting for? Take heart and get on the quad!",
		images: ["/quad/1.png", "/quad/2.png", "/quad/3.png"],
	},
	{
		id: 4,
		name: "Canyoning Tour",
		description:
			"Ako ste avanturističkog duha ili jednostavno spremni i za drugačije iskustvo, isprobajte canyoning turu. Prethodno iskustvo nije potrebno, već samo dobra volja i želja. Otkrijte mistične kreacije koje krije rijeka Cetina. Kombinacija šetanja, penjanja, skakanja, plivanja i uživanja. 3 – 4 sata osvježenja u divnoj rijeci, istraživanja netaknute prirode i 500 metara visokog slapa Gubavica. Zabavite se i u isto vrijeme doživite mirnoću koju nosi Cetina. S Vama je vodič tijekom cijele ture, pa se za ništa ne morate brinuti ni bojati. Uostalom, život je prekratak da ne bi iskoristili ovu jedinstvenu priliku i isprobali canyoning.",
		description_en:
			"If you are adventurous or simply ready for a different experience, try a canyoning tour. Previous experience is not necessary, only good will and desire. Discover the mystical creations hidden by the river Cetina. A combination of walking, climbing, jumping, swimming and enjoying. 3-4 hours of refreshing in the wonderful river, exploring untouched nature and the 500-meter high Gubavica waterfall. Have fun and at the same time experience the tranquility of Cetina. The guide is with you during the entire tour, so you don't have to worry or fear anything. After all, life is too short not to take advantage of this unique opportunity and try canyoning.",
		images: ["/canyon/1.jpeg", "/canyon/2.jpeg", "/canyon/3.jpeg"],
	},
	{
		id: 5,
		name: "Boat ride",
		description:
			"Zaplovite s nama u jedinstveno iskustvo vožnje rijekom Cetinom. Očekuje Vas 7 km istraživanja čarobnog krajolika, prilika da u 2 sata vidite planine i životinje koje se skrivaju u dubinama rijeke. Rashladite se u vrućim ljetnim danima uživajući u netaknutoj prirodi. Nakon 40 min stižete na odredište – Radmanove mlinice. Restoran, izletište u kojem ćete kroz spokoj kamenih mlinskih kola, krošnji visokih stabala i pastrva u bazenu osjetiti duh prošlosti. Nadalje, osim što možete iskusiti Dalmaciju u restoranu, možete i istražiti ovaj park prirode. Izlet koji je idealan za svakoga, a vraćajući se poželjet ćete da ovo doživite još jednom.",
		description_en:
			"Sail with us in a unique experience of driving on the Cetina River. 7 km of exploration of the magical landscape awaits you, an opportunity to see mountains and animals hiding in the depths of the river in 2 hours. Cool off on hot summer days while enjoying untouched nature. After 40 minutes you will arrive at your destination - Radmanovo mlinice. A restaurant, picnic area where you will feel the spirit of the past through the serenity of stone mill carts, the crowns of tall trees and trout in the pool. Furthermore, in addition to experiencing Dalmatia in a restaurant, you can also explore this nature park. An excursion that is ideal for everyone, and when you return you will want to experience this one more time.",
		images: ["/voznja/1.jpeg", "/voznja/2.jpeg", "/voznja/3.jpeg"],
	},
];

export default function Izleti() {
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
					fontFamily="Lobster, cursive"
					variant="h2"
					style={{ marginTop: "2rem	", textAlign: "center" }}
				>
					{lang === "EN" ? "Excursions" : "Izleti"}
				</Typography>
				<Container>
					<Grid container spacing={4} mt={4} mb={4}>
						{data.map((trip) => (
							<Grid item xs={12} md={6} key={trip.id}>
								<TripBigger
									name={trip.name}
									description={trip.description}
									image={trip.images[0]}
									description_en={trip.description_en}
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
