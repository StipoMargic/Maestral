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
			<div
				className="content"
				style={{
					backgroundImage: "url(/papers.jpg)",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
				}}
			>
				<Container sx={{ padding: "5rem 0 5rem" }}>
					<Typography variant="h2" align="center" gutterBottom>
						Nes odi{" "}
					</Typography>
					<Box sx={{ flexGrow: 1, marginTop: "1rem" }}>
						<Grid container spacing={2}>
							<Grid item sm={12} md={5}>
								<ContactForm />
							</Grid>
							<Grid item sm={12} md={7}>
								{/* // eslint-disable-next-line @next/next/no-img-element */}
								<img
									src="https://maps.googleapis.com/maps/api/staticmap?center=Omis,Croatia&zoom=13&size=600x300&zoomLevel=5&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&key=AIzaSyBq4XzQTYxcqFKahd60xifRHft215gbwCk"
									alt="map"
									style={{ width: "100%", height: "100%" }}
								/>
							</Grid>
						</Grid>
					</Box>
				</Container>
			</div>
			<Footer />
		</>
	);
}
