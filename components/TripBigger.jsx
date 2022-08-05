import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useLang } from "../ctx/LangContext.tsx";

export default function TripBigger({
	name,
	description,
	image,
	description_en,
}) {
	const { lang } = useLang();
	return (
		<Card sx={{ maxWidth: "100%", margin: "20px 5px" }} elevation={5}>
			<CardMedia
				component="img"
				height="190"
				image={`/img/${image}`}
				alt={name}
			/>
			<CardContent>
				<Typography
					gutterBottom
					fontFamily="Lobster"
					variant="h5"
					component="div"
				>
					{name}
				</Typography>
				<Typography variant="body2" fontFamily="Lobster" color="text.secondary">
					{lang === "HR" ? (
						<p>{description.slice(0, 125)}...</p>
					) : (
						<p>{description_en.slice(0, 125)}...</p>
					)}
				</Typography>
			</CardContent>
			<CardActions
				sx={{
					display: "flex",
					justifyContent: "center",
				}}
			>
				<Button href={`/izleti/${name}`} variant="outlined" size="large">
					{lang === "HR" ? "Bukiraj sada" : "Book now"}
				</Button>
			</CardActions>
		</Card>
	);
}
