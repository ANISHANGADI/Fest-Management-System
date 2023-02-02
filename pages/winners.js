import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import RegPageNavbar from "../Components/RegPageNavbar";
import Confetti from "react-confetti";
import axios from "axios";
import winnerStyle from "../styles/Winners.module.css";
import { Grid } from "@mui/material";
import { serverUrl } from "../config/index";
const Winners = ({ winnerData }) => {
  const [noConfetti, setNoConfetti] = React.useState(210);
  setTimeout(() => {
    //!yen madaduuuuuu
    setNoConfetti(100);
  }, 7000);

  return (
    <Fragment>
      <RegPageNavbar />
      <section id={winnerStyle.winnerPage}>
        <h1>Winners of Aikya 2023 !!!</h1>
        {winnerData.map((item) => {
          return (
            <div key={item.event} className={winnerStyle.cardContainer}>
              <h4
                style={{
                  color: "grey",
                  fontFamily: "poppins",
                  fontSize: "30px",
                  // marginTop: "90px",
                  marginBottom: "20px",
                  marginLeft: "100px",
                }}
              >
                {item.event}
              </h4>

              <Grid container>
                <Grid
                  item
                  xs={12}
                  md={4}
                  sx={{
                    marginBottom: { md: "0px", xs: "50px" },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  className={winnerStyle.cardParent}
                >
                  <div className={winnerStyle.winnerCard}>
                    <p className={winnerStyle.winnerName}>
                      {item.winnerList.firstWinnerName}
                    </p>
                    <p className={winnerStyle.winnerUsn}>
                      {item.winnerList.firstWinnerUsn}
                    </p>
                    <p className={winnerStyle.winnerSem}>
                      <span style={{ fontWeight: "600" }}>
                        {" "}
                        {item.winnerList.firstWinnerSem}
                      </span>{" "}
                      sem
                    </p>
                    <p className={winnerStyle.winnerSec}>
                      <span style={{ fontWeight: "600" }}>
                        {" "}
                        {item.winnerList.firstWinnerSec}{" "}
                      </span>
                      sec
                    </p>
                  </div>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={4}
                  sx={{
                    marginBottom: { md: "0px", xs: "50px" },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div className={winnerStyle.winnerCard}>
                    <p className={winnerStyle.winnerName}>
                      {item.winnerList.secondWinnerName}
                    </p>
                    <p className={winnerStyle.winnerUsn}>
                      {item.winnerList.secondWinnerUsn}
                    </p>
                    <p className={winnerStyle.winnerSem}>
                      <span style={{ fontWeight: "600" }}>
                        {item.winnerList.secondWinnerSem}{" "}
                      </span>
                      sem
                    </p>
                    <p className={winnerStyle.winnerSec}>
                      <span style={{ fontWeight: "600" }}>
                        {item.winnerList.secondWinnerSec}{" "}
                      </span>
                      sec
                    </p>
                  </div>
                </Grid>

                <Grid
                  item
                  xs={12}
                  md={4}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: { md: "0px", xs: "10px" },
                  }}
                >
                  <div className={winnerStyle.winnerCard}>
                    <p className={winnerStyle.winnerName}>
                      {item.winnerList.thirdWinnerName}
                    </p>
                    <p className={winnerStyle.winnerUsn}>
                      {item.winnerList.thirdWinnerUsn}
                    </p>
                    <p className={winnerStyle.winnerSem}>
                      <span style={{ fontWeight: "600" }}>
                        {item.winnerList.thirdWinnerSem}
                      </span>{" "}
                      sem
                    </p>
                    <p className={winnerStyle.winnerSec}>
                      <span style={{ fontWeight: "600" }}>
                        {item.winnerList.thirdWinnerSec}{" "}
                      </span>
                      sec
                    </p>
                  </div>
                </Grid>
              </Grid>

              <hr className={winnerStyle.winnersHr} />
            </div>
          );
        })}
      </section>
      {/* To be changed based on the number of events */}
      <Confetti width={1500} height="1500px" numberOfPieces={noConfetti} />
    </Fragment>
  );
};

export default Winners;

export const getServerSideProps = async () => {
  const { data } = await axios.get(serverUrl + "/api/declare-winners");
  return {
    props: { winnerData: data.winnerData },
  };
};

// 1. Student ->>>  USN, Name, Email, Semester, Section, Events Registered
// 2. Winners ->>>  event, firstWinner, secondWinner, thirdWinner
// 3. Admin   ->>>  Admin ID, Password
