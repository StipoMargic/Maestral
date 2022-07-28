import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer";
import { ContactForm } from "../components/ContactForm.tsx";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import { Typography } from "@material-ui/core";

export default function Kontakt() {
	return (
		<>
			<Navbar />
			<Container sx={{ padding: "5rem 0 5rem" }}>
				<Typography variant="h2" align="center" gutterBottom>
					Nes odi{" "}
				</Typography>
				<Box sx={{ flexGrow: 1, marginTop: "1rem" }}>
					<Grid container spacing={2}>
						<Grid item sm={12} md={5}>
							<ContactForm />
						</Grid>
						<Grid item sm={12} md={5}>
							{/* // eslint-disable-next-line @next/next/no-img-element */}
							<img
								src="https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap
&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&key=AIzaSyDGlqdh7h7Me5fC9WJojYoC_wvm-0CARco"
								alt="map"
								style={{ width: "100%", height: "100%" }}
							/>
						</Grid>
					</Grid>
				</Box>
			</Container>
			<Footer />
		</>
	);
}
