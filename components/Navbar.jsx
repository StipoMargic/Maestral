import { useRouter } from "next/router";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import {
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
} from "@mui/material";
import AirIcon from "@mui/icons-material/Air";
import { useLang } from "../ctx/LangContext.tsx";
const pages = [
	{
		title_hr: "Naslovnica",
		title_en: "Home",
	},
	{
		title_hr: "O nama",
		title_en: "About us",
	},
	{
		title_hr: "Izleti",
		title_en: "Tours",
	},
	{
		title_hr: "Kontakt",
		title_en: "Contact",
	},
];

const Navbar = () => {
	const [drawer, setDrawer] = useState(false);
	const router = useRouter();

	const handleCloseNavMenu = (e) => {
		router.push(
			e.toLowerCase() === "naslovnica"
				? "/"
				: `/${e.toLowerCase().replace(/ /g, "")}`
		);
		setDrawer(false);
	};
	const { lang, setLang } = useLang();

	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<AirIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
					<Typography
						variant="h6"
						noWrap
						component="a"
						href="/"
						sx={{
							mr: 2,
							display: { xs: "none", md: "flex" },
							fontFamily: "monospace",
							fontWeight: 700,
							width: "200px",
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none",
						}}
					>
						Maestralić
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							color="inherit"
							onClick={() => setDrawer(true)}
						>
							<MenuIcon />
						</IconButton>
					</Box>
					<AirIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
					<Typography
						variant="h5"
						noWrap
						component="a"
						href=""
						sx={{
							mr: 2,
							display: { xs: "flex", md: "none" },
							flexGrow: 1,
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none",
						}}
					>
						Maestral
					</Typography>
					<Box
						sx={{
							justifyContent: "center",
							alignItems: "center",
							width: "80%",
							display: { xs: "none", md: "flex" },
						}}
					>
						{pages.map((page) => (
							<Button
								style={{ color: "white" }}
								key={page.title_hr}
								onClick={() => handleCloseNavMenu(page.title_hr)}
								sx={{ my: 2, color: "white", display: "block" }}
							>
								{lang === "HR" ? page.title_hr : page.title_en}
							</Button>
						))}
					</Box>
					<div style={{ marginRight: "2rem", display: "flex" }}>
						<ul style={{ display: "flex", listStyle: "none" }}>
							<li
								style={
									lang === "HR"
										? { color: "#b3f4a2", marginRight: "1rem" }
										: { marginRight: "1rem" }
								}
								onClick={() => setLang("HR")}
							>
								HR
							</li>
							<li
								style={lang === "EN" ? { color: "#b3f4a2" } : {}}
								onClick={() => setLang("EN")}
							>
								EN
							</li>
						</ul>
					</div>
				</Toolbar>
			</Container>
			<Drawer anchor={"left"} open={drawer} onClose={() => setDrawer(false)}>
				<Box
					sx={{ width: 170 }}
					role="presentation"
					onClick={() => setDrawer(false)}
					onKeyDown={() => setDrawer(false)}
				>
					<List>
						{pages.map((page) => (
							<ListItem
								onClick={() => handleCloseNavMenu(page.title_hr)}
								key={page.title_hr}
							>
								<ListItemButton>
									{lang === "EN" ? (
										<ListItemText primary={page.title_en} />
									) : (
										<ListItemText primary={page.title_hr} />
									)}
								</ListItemButton>
							</ListItem>
						))}
					</List>
				</Box>
			</Drawer>
		</AppBar>
	);
};
export default Navbar;

// const list = (anchor: Anchor) => (

// );
