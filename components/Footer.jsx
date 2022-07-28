import { AppBar, Container, Grid, Toolbar, Typography } from "@mui/material";

export default function Footer() {
	return (
		<footer className="footer">
			<Grid container columnSpacing={{ sm: 0, md: 2 }}>
				<Grid
					item
					sm={12}
					md={6}
					sx={{
						width: "100%",
					}}
					textAlign={{ sm: "center", md: "right" }}
					paddingRight={{ sm: "0", md: "5rem" }}
				>
					<h5 style={{ marginBottom: 0 }}>Maestral</h5>
					<h6 style={{ margin: ".5rem 0" }}>
						Obrt za usluge, trgovinu, vodeni <br /> prijevoz, iznajmljivanje i
						djelatnost putničke agencije
					</h6>
					<h6 style={{ margin: 0 }}>Ivanči Tafra</h6>
				</Grid>
				<Grid
					item
					sm={12}
					md={6}
					sx={{
						width: "100%",
					}}
					textAlign={{ sm: "center", md: "left" }}
					paddingLeft={{ sm: "0", md: "5rem" }}
				>
					<h6 style={{ marginBottom: 0 }}>Omiš, Četvrt Žarka Dražojevića 12</h6>
					<h6 style={{ margin: ".5rem  0" }}>MBO: 90592590</h6>
					<h6 style={{ margin: 0 }}>OIB: 05113198384</h6>
				</Grid>
				<Grid item xs={12} paddingBottom={1}>
					&copy; {new Date().getFullYear()} Maestral <br />
					<small>
						Powered by
						<a
							href="https://udruga-liberato.hr"
							target="_blank"
							rel="noopener noreferrer"
						>
							&nbsp; Udruga Liberato
						</a>
					</small>
				</Grid>
			</Grid>
		</footer>
	);
}
