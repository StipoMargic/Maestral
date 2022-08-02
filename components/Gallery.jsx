import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Container, Typography } from "@mui/material";

export const Gallery = () => {
	return (
		<>
			<Container>
				<Typography
					variant="h4"
					sx={{ textAlign: "center", marginTop: "2.5rem" }}
				>
					Naši izleti{" "}
				</Typography>
				<ImageList sx={{ width: "100%", height: 501 }} cols={6} rowHeight={164}>
					{itemData.map((item) => (
						<ImageListItem key={item}>
							<img src={`/img/${item}`} loading="lazy" />
						</ImageListItem>
					))}
				</ImageList>
			</Container>
		</>
	);
};

const itemData = [
	"0.jpeg",
	"1.jpeg",
	"2.jpeg",
	"3.jpeg",
	"4.jpeg",
	"5.jpeg",
	"6.jpeg",
	"7.jpeg",
	"9.jpeg",
	"10.jpeg",
	"11.jpeg",
	"12.jpeg",
	"13.jpeg",
	"14.jpeg",
	"15.jpeg",
	"16.jpeg",
	"17.jpeg",
	"18.jpeg",
];
