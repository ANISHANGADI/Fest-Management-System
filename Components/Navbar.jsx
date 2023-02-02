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
import navStyles from "../styles/Navbar.module.css";
import logo from "../public/logo1.png";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";

const Navbar = () => {
  const navbarItms = React.useRef();
  const navbarLogo = React.useRef();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const [colorChange, setColorchange] = React.useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 100) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  React.useEffect(() => {
    // window is accessible here.
    window.addEventListener("scroll", changeNavbarColor);
    gsap.from(".navItems", 1, { opacity: 0, y: 35, delay: 0.1, ease: "in" });
    gsap.to(".navItems", 1, { opacity: 1, y: 0, delay: 0.1, ease: "in" });
    //For registerButton
    gsap.from(navbarItms.current, 1, {
      opacity: 0,
      x: 30,
      delay: 1,
      ease: "in",
    });
    gsap.to(navbarItms.current, 1, {
      opacity: 1,
      x: 0,
      delay: 1,
      ease: "in",
    });

    //For Aikyalogo
    gsap.from(navbarLogo.current, 1, {
      opacity: 0,
      x: -30,
      delay: 1,
      ease: "in",
    });
    gsap.to(navbarLogo.current, 1, {
      opacity: 1,
      x: 0,
      delay: 1,
      ease: "in",
    });
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
              sx={{ mr: 2, display: {  md: "flex" } }}  
              ref={navbarLogo}
            >
              <Image
                src={logo}
                width={130}
                height={34}
                priority
                className={navStyles.img}
                alt=""
              />
            </Typography>

            <Typography
              class="navbarLogo"
              variant="h6"
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                marginLeft: "12px",
              }}
              // ref={navbarLogo}
            >
              {/* <Image src={logo} width={100} height={35} priority alt="" /> */}
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

              <Link href="/winners">
                <Button
                  className="navItems"
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
                  Winners
                </Button>
              </Link>

              <Link href="/register">
                <Button
                  // className="navItems"
                  variant="contained"
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    mx: 5,
                    color: "white",
                    cursor: "pointer",
                    padding: "3px 15px",
                    fontSize: "0.94rem",
                    backgroundColor: "rgba(255, 0, 255, 0.793)",
                    fontWeight: "300",
                    display: "block",

                    "&:hover": {
                      transition: "0.4s",
                      color: "#fff",
                      backgroundColor: "rgba(255, 0, 255, 0.893)",
                      boxShadow: "1",
                    },
                  }}
                  ref={navbarItms}
                >
                  Register
                </Button>
              </Link>
            </Box>

            <Box sx={{ display: { xs: "block", md: "none" } }}>
              <Link href="/register">
                <Button
                  style={{ color: "rgba(0 ,0,0,1)" }}
                  size="small"
                  variant="contained"
                  sx={{
                    my: 3,
                    mx: 7,
                    color: "white !important",
                    cursor: "pointer",
                    backgroundColor: "rgba(255, 0, 255, 0.793)",
                    display: "block",
                    fontWeight: "400 !important",

                    "&:hover": {
                      transition: "0.4s",
                      color: "#fff",
                      backgroundColor: "rgba(255, 0, 255, 0.893)",
                      boxShadow: "1",
                    },
                  }}
                  // ref={navbarItms}
                >
                  Register
                </Button>
              </Link>
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
                // ref={navbarItms}
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
                <MenuItem onClick={handleCloseNavMenu}>
                  <Button
                    href="/winners"
                    style={{ color: "rgba(0 ,0,0,0.8)" }}
                    textAlign="center"
                  >
                    Winners
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
export default Navbar;
