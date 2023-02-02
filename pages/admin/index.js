import { Alert, Button, Grid, Snackbar, TextField } from "@mui/material";
import React, { Fragment } from "react";
import adminPageStyles from "../../styles/Admin.module.css";
import RegPageNavbar from "../../Components/RegPageNavbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import axios from "axios";
import { useRouter } from "next/router";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
const AdminPage = () => {
  const [adminName, setAdminName] = React.useState("");
  const [adminPass, setAdminPass] = React.useState("");
  const navigate = useRouter();

  const [alertMsg, setAlertMsg] = React.useState("Please fill up all the fields");

  //POST Request
  // const checkAdminCreds = async (e) => {
  //   e.preventDefault();
  //   const response = await fetch("/api/admin", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       adminName,
  //       adminPass,
  //     }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  // };

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };


  async function getAdminCreds(e) {
    e.preventDefault();
    const inputData = {
      adminName,
      adminPass,
    };
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post("/api/admin", inputData, config);
      console.log(data);
      if (data.allow === true) {
        navigate.push("/admin/home");
      } else {
        setAlertMsg(data.log);
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Fragment>
      <RegPageNavbar />
      <ThemeProvider theme={darkTheme}>
        <section id={adminPageStyles.adminPage}>
          <div className={adminPageStyles.adminHeader}>
            <h1>Admin Sign In</h1>
          </div>
          <div className={adminPageStyles.cardContainer}>
            <div className={adminPageStyles.cardComponent}>
              <form onSubmit={getAdminCreds}>
                <Grid container spacing={7}>
                  <Grid item xs={12} md={12}>
                    <TextField
                      variant="outlined"
                      inputProps={{ minLength: 6, maxLength: 15 }}
                      placeholder="Username"
                      autoComplete="off"
                      required
                      value={adminName}
                      onChange={(e) => {
                        setAdminName(e.target.value);
                      }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField
                      variant="outlined"
                      placeholder="Password"
                      required
                      inputProps={{ minLength: 8, maxLength: 8 }}
                      type="password"
                      value={adminPass}
                      onChange={(e) => {
                        setAdminPass(e.target.value);
                      }}
                      autoComplete="off"
                      fullWidth
                    />
                  </Grid>
                </Grid>
                <div className={adminPageStyles.button}>
                  <Button
                    variant="contained"
                    size="normal"
                    type="submit"
                    color="secondary"
                    onClick={handleClick}
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
        <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            {alertMsg}
          </Alert>
        </Snackbar>
      </ThemeProvider>
    </Fragment>
  );
};

export default AdminPage;
