import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import navStyles from "../styles/RegisterPageNavbar.module.css";
import logo from "../public/logo1.png";
import Image from "next/image";
import Link from "next/link";

const RegPageNavbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const [colorChange, setColorchange] = React.useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 10) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  React.useEffect(() => {
    // window is accessible here.
    window.addEventListener("scroll", changeNavbarColor);
  }, []);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar
        sx={{ padding: "0", margin: "0" }}
        position="fixed"
        className={colorChange ? navStyles.colorChange : navStyles.navbar}
      >
        <Container maxWidth="xl" sx={{ padding: "0px 8px" }}>
          <Toolbar disableGutters sx={{ padding: "0px", margin: "0" }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              <Image
                src={logo}
                width={150}
                height={37}
                priority
                className={navStyles.img}
                alt=""
              />
            </Typography>

            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                marginLeft: "12px",
              }}
            >
              <Image src={logo} width={100} height={35} priority alt="" />
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
              }}
            >
              <Button
                className="navItems"
                href="#"
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  mx: 5,
                  color: "white",
                  padding: "5px 15px",
                  fontSize: "0.95rem",
                  fontWeight: "300",
                  display: "block",
                  "&:hover": {
                    transition: "0.4s",
                    color: "#ea4c89",
                    backgroundColor: "rgba(40, 39, 39, 0.9)",
                    boxShadow: "1",
                  },
                }}
              >
                Home
              </Button>
              <Button
                className="navItems"
                href="#about"
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  mx: 5,
                  color: "white",
                  padding: "5px 15px",
                  fontSize: "0.95rem",
                  fontWeight: "300",
                  display: "block",
                  "&:hover": {
                    transition: "0.4s",
                    color: "#ea4c89",
                    backgroundColor: "rgba(40, 39, 39, 0.9)",
                    boxShadow: "1",
                  },
                }}
              >
                About
              </Button>
              <Button
                className="navItems"
                href="#events"
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  mx: 5,
                  color: "white",
                  padding: "5px 15px",
                  fontSize: "0.95rem",
                  fontWeight: "300",
                  display: "block",
                  "&:hover": {
                    transition: "0.4s",
                    color: "#ea4c89",
                    backgroundColor: "rgba(40, 39, 39, 0.9)",
                    boxShadow: "1",
                  },
                }}
              >
                Events
              </Button>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "block", md: "none" },
                position: "absolute",
                right: "1px",
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Button
                    href="/"
                    style={{ color: "rgba(0 ,0,0,0.8)" }}
                    textAlign="center"
                  >
                    Home
                  </Button>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Button
                    href="#about"
                    style={{ color: "rgba(0 ,0,0,0.8)" }}
                    textAlign="center"
                  >
                    About
                  </Button>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Button
                    href="#events"
                    style={{ color: "rgba(0 ,0,0,0.8)" }}
                    textAlign="center"
                  >
                    Events
                  </Button>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
export default RegPageNavbar;
