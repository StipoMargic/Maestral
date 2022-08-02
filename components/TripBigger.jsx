import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function TripBigger({ name, description, image }) {
	return (
		<Card sx={{ maxWidth: "100%", margin: "20px 5px" }} elevation={5}>
			<CardMedia
				component="img"
				height="190"
				image={`/img/${image}`}
				alt={name}
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{name}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{description.slice(0, 125)}
				</Typography>
			</CardContent>
			<CardActions
				sx={{
					display: "flex",
					justifyContent: "center",
				}}
			>
				<Button href={`/izleti/${name}`} variant="outlined" size="large">
					Saznaj vise
				</Button>
			</CardActions>
		</Card>
	);
}
