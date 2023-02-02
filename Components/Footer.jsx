import React, { Fragment } from "react";
import { Grid, IconButton, Stack } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import footerStyles from "../styles/Footer.module.css";
import serverConfig, { server } from "../config/index";

const Footer = () => {
  return (
    <Fragment>
      <section id={footerStyles.footer}>
        <Stack
          direction="row"
          className={footerStyles.spaceToStack}
          spacing={2}
        >
          <IconButton href="https://instagram.com" target="__blank">
            <InstagramIcon className={footerStyles.socialIcons} />
          </IconButton>
          <IconButton href="https://facebook.com" target="__blank">
            <FacebookIcon className={footerStyles.socialIcons} />
          </IconButton>
          <IconButton href="https://www.linkedin.com/" target="__blank">
            <EmailIcon className={footerStyles.socialIcons} />
          </IconButton>
        </Stack>
        <p className={footerStyles.cpy}>
          {" "}
          &copy; Aikya 2022 All rights reserved{" "}
        </p>

        <p className={footerStyles.cpy1}>
          Designed and Developed By <br /><br />
          <span
            style={{
              color: "magenta",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Bhuvan S
            <IconButton
              href="https://www.linkedin.com/in/bhuvan2533/"
              target="__blank"
            >
              <LinkedInIcon className={footerStyles.socialIcons1} />
            </IconButton>
          </span>
          <span
            style={{
              color: "magenta",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Anish Angadi
            <IconButton
              href="https://www.linkedin.com/in/anish-angadi-28b26b221/"
              target="__blank"
            >
              <LinkedInIcon className={footerStyles.socialIcons1} />
            </IconButton>
          </span>
        </p>
      </section>
    </Fragment>
  );
};

export default Footer;
