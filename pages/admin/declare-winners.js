import { Autocomplete, Button, Grid, TextField } from "@mui/material";
import axios from "axios";
import React, { Fragment, useEffect } from "react";
import declareWinnersStyle from "../../styles/DeclareWinners.module.css";
import eventData from "../../Components/Events/events";
import { useRouter } from "next/router";
import { serverUrl } from "../../config/index";
const DeclareWinners = () => {
  const [eve, setEve] = React.useState("");
  const [firstWinnerUsn, setFirstWinnerUsn] = React.useState("");
  const [secondWinnerUsn, setSecondWinnerUsn] = React.useState("");
  const [thirdWinnerUsn, setThirdWinnerUsn] = React.useState("");
  const [usersUsn, setUsersUsn] = React.useState([]);
  const [winnerEve, setWinnerEve] = React.useState([]);

  const router = useRouter();

  //To be changed further
  let eveArr = [];
  eventData.map((item) => eveArr.push(item.title));

  let declaredEventRes = [];
  winnerEve.map((item) => {
    declaredEventRes.push(item.event);
  });

  let intersection = [];
  let difference = eveArr.filter((x) => !declaredEventRes.includes(x));
  difference.map((item) => intersection.push(item));

  // const eveArr = [
  //   { label: "Treasure Hunt" },
  //   { label: "Squid Game" },
  //   { label: "Bob the web builder" },
  //   { label: "Type master" },
  // ];

  let result;
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(serverUrl + "/api/declare-winners");
      result = data.usnData;
      const result2 = data.winnerData;
      setUsersUsn(result);
      setWinnerEve(result2);
    };
    fetchData();
  }, []);

  // const eveArrForAutoComplete = eveArr.map((section) => section.label);
  const usnArrForAutoComplete = usersUsn.map((section) => section);

  //   console.log(usnArrForAutoComplete);

  async function sendWinnerServer(e) {
    e.preventDefault();
    const obj = {
      eve,
      firstWinnerUsn,
      secondWinnerUsn,
      thirdWinnerUsn,
    };
    try {
      alert("Successfully declared the winners !! 😉");
      router.push("/admin/home");
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      await axios.post(serverUrl + "/api/declare-winners", obj, config);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Fragment>
      <section id={declareWinnersStyle.declareWinner}>
        <form onSubmit={sendWinnerServer}>
          <p className={declareWinnersStyle.caption}>
            Choose the event and the respective winners
          </p>
          <Grid
            container
            spacing={4}
            className={declareWinnersStyle.selectWinnersParent}
          >
            <Grid
              item
              xs={12}
              md={12}
              className={declareWinnersStyle.selectWinnersChild}
            >
              <Autocomplete
                disablePortal
                options={intersection}
                sx={{ width: "100%", margin: "0 1%" }}
                onChange={(event, value) => setEve(value)}
                renderInput={(params) => (
                  <TextField {...params} label="Events" value={eve} required />
                )}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <Autocomplete
                disablePortal
                options={usnArrForAutoComplete}
                sx={{ width: "100%", margin: "0 1%" }}
                onChange={(event, value) => setFirstWinnerUsn(value)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="First Winner"
                    value={firstWinnerUsn}
                    required
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <Autocomplete
                disablePortal
                options={usnArrForAutoComplete}
                sx={{ width: "100%", margin: "0 1%" }}
                onChange={(event, value) => setSecondWinnerUsn(value)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Second Winner"
                    value={secondWinnerUsn}
                    required
                  />
                )}
              />
            </Grid>

            <Grid item xs={12} md={12}>
              <Autocomplete
                disablePortal
                options={usnArrForAutoComplete}
                sx={{ width: "100%", margin: "0 1%" }}
                onChange={(event, value) => setThirdWinnerUsn(value)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Third Winner"
                    value={thirdWinnerUsn}
                    required
                  />
                )}
              />
            </Grid>
            <Button
              variant="contained"
              style={{
                position: "relative",
                left: "245px",
                top: "30px",
                background: "linear-gradient(to right, #fd2d008c,#df007c9c)",
                color: "white",
                fontWeight: "500",
              }}
              type="submit"
            >
              Submit
            </Button>
          </Grid>
        </form>
      </section>
    </Fragment>
  );
};

export default DeclareWinners;
