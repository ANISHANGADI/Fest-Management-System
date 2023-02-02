import { Grid } from "@mui/material";
import Link from "next/link";
import React from "react";
import { Fragment } from "react";
import adminStyles from "../../styles/Admin.module.css";

const Home = () => {
  return (
    <Fragment>
      <section id={adminStyles.adminHome}>
        <div className={adminStyles.caption}>
          <h2>Choose an option...</h2>
        </div>

        <div className={adminStyles.adminHomeCardContainer}>
          <Grid container spacing={8} sx={{width:"70%"}}>
            <Grid
              item
              xs={12}
              md={6}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link href="/admin/view-participants">
                <div className={adminStyles.adminHome_card}>
                  <p>View Participants</p>
                </div>
              </Link>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link href="/admin/declare-winners">
                <div className={adminStyles.adminHome_card}>
                  <p>Declare Winners</p>
                </div>
              </Link>
            </Grid>
          </Grid>
        </div>
      </section>
    </Fragment>
  );
};
export default Home;
