import {
  Alert,
  Button,
  Checkbox,
  FormControl,
  Grid,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import { Fragment } from "react";
import registerPageStyle from "../styles/Register.module.css";
import eventData from "../Components/Events/events";
import { serverUrl } from "../config";
import axios from "axios";
import { useRouter } from "next/router";

//For event selection component
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

// const events = [
//   "Treasure Hunt",
//   "Squid Game",
//   "Website Recreation",
//   "Hogathon",
//   "Badminton",
//   "Reel Making",
//   "Karaoke",
// ];

const RegisterPageComponent = () => {
  const events = eventData.map((item) => {
    return item.title;
  });

  const router = useRouter();
  const [eventRegistered, setEventRegistered] = React.useState([]);
  const [userUsn, setUserUsn] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [userEmail, setUserEmail] = React.useState("");
  const [userSemester, setUserSemester] = React.useState("");
  const [userSection, setUserSection] = React.useState("");

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setEventRegistered(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  // console.log(
  //   userUsn,
  //   userName,
  //   userEmail,
  //   userSemester,
  //   userSection,
  //   eventRegistered
  // );

  //POST Request
  const submitRegisterData = async (e) => {
    e.preventDefault();
    const obj = {
      userUsn,
      userName,
      userEmail,
      userSemester,
      userSection,
      eventRegistered,
    };
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        serverUrl + "/api/register",
        obj,
        config
      );
      alert(data.message);
      console.log(data);
      if (data.registerBool) {
        router.push("/");
      } else if (!data.registerBool) {
        setUserName("");
        setUserUsn("");
        setUserSection("");
        setUserSemester("");
        setUserEmail("");
        setEventRegistered([]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Fragment>
      <section id={registerPageStyle.registerPage}>
        <div className={registerPageStyle.registerHeader}>
          <h1>Registration Page</h1>
          <Alert
            severity="info"
            sx={{
              fontSize: { md: "1.1rem", xs: "0.9rem" },
              marginBottom: "20px",
            }}
          >
            Participation in atleast 2 events is compulsory...
          </Alert>
        </div>

        <div className={registerPageStyle.cardContainer}>
          <div className={registerPageStyle.cardComponent}>
            <form onSubmit={submitRegisterData}>
              <Grid container spacing={7}>
                <Grid item xs={12} md={6}>
                  <TextField
                    variant="outlined"
                    value={userUsn}
                    inputProps={{ maxLength: 10, minLength: 10 }}
                    onChange={(event) => {
                      setUserUsn(event.target.value);
                    }}
                    placeholder="USN "
                    required
                    autoComplete="off"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    variant="outlined"
                    placeholder="Name"
                    value={userName}
                    onChange={(event) => {
                      setUserName(event.target.value);
                    }}
                    required
                    autoComplete="off"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12} md={12}>
                  <TextField
                    variant="outlined"
                    placeholder="Email Id"
                    fullWidth
                    value={userEmail}
                    required
                    onChange={(event) => {
                      setUserEmail(event.target.value);
                    }}
                    autoComplete="off"
                    type="email"
                  />
                </Grid>

                <Grid item xs={12} md={4}>
                  <TextField
                    variant="outlined"
                    placeholder="Department"
                    value="CSE"
                    disabled
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6} md={4}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Semester
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Semester"
                      required
                      value={userSemester}
                      onChange={(event) => {
                        setUserSemester(event.target.value);
                      }}
                    >
                      <MenuItem value="Second">Second</MenuItem>
                      <MenuItem value="Fourth">Fourth</MenuItem>
                      <MenuItem value="Sixth">Sixth</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6} md={4}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Section
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      required
                      label="Section"
                      value={userSection}
                      onChange={(event) => {
                        setUserSection(event.target.value);
                      }}
                    >
                      <MenuItem value="A">A</MenuItem>
                      <MenuItem value="B">B</MenuItem>
                      <MenuItem value="C">C</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12} md={12}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-multiple-checkbox-label">
                      Select Event
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      multiple
                      value={eventRegistered}
                      onChange={handleChange}
                      required
                      input={<OutlinedInput label="Select Event" />}
                      renderValue={(selected) => selected.join(", ")}
                      MenuProps={MenuProps}
                    >
                      {events.map((event) => (
                        <MenuItem key={event} value={event}>
                          <Checkbox
                            checked={eventRegistered.indexOf(event) > -1}
                          />
                          <ListItemText primary={event} />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <div className={registerPageStyle.button}>
                  <Button
                    variant="contained"
                    size="large"
                    type="submit"
                    color="secondary"
                  >
                    Submit
                  </Button>
                </div>
              </Grid>
            </form>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default RegisterPageComponent;
