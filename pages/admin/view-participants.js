import React, { Fragment, useEffect } from "react";
import Button from "@mui/material/Button";
import { Autocomplete, Grid, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
// import "./ViewParticipants.css";
import axios from "axios";
import { serverUrl } from "../../config/index";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    // backgroundColor: theme.palette.common.black,
    // backgroundColor: theme.palette.common.magenta,
    color: theme.palette.common.white,
    fontWeight: 600,
    fontSize: 15,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const ViewParticipants = ({ students }) => {
  const [query, setQuery] = useState("");
  const [sec, setSec] = useState("");
  const [sem, setSem] = useState("");
  const [eve, setEve] = useState("");
  const [studentListFromDb, setStudentListFromDb] = useState([{}]);
  // console.log(students);

  useEffect(() => {
    document.title = "Aikya || Paricipants";
  }, []);

  const semArr = [
    { label: "Second" },
    { label: "Fourth" },
    { label: "Sixth" },
    { label: "Eighth" },
  ];

  //To be changed further
  const eveArr = [
    { label: "Treasure Hunt" },
    { label: "Squid Game" },
    { label: "Bob the web builder" },
    { label: "Website Recreation" },
  ];

  const sectionArr = [{ label: "A" }, { label: "B" }, { label: "C" }];

  const semesterForAutoComplete = semArr.map((semester) => semester.label);
  const sectionArrForAutoComplete = sectionArr.map((section) => section.label);
  const eveArrForAutoComplete = eveArr.map((section) => section.label);
  // ---------------------TABLE ROWS GENERATION---------------------------
  function createData(usn, studName, semester, section, noOfEveReg) {
    return { usn, studName, semester, section, noOfEveReg };
  }

  let serialNumber = 1;

  function yoo(stud) {
    return createData(
      stud.userUsndb,
      stud.userNamedb,
      stud.userSemesterdb,
      stud.userSectiondb,
      stud.eventRegistereddb
    );
  }

  let stu = students.dataFromServer;
  let rows = stu.map(yoo);

  if (query) {
    rows = rows.filter((user) => user.usn.toLowerCase().includes(query));
  }

  function compare(a, b) {
    if (a.usn < b.usn) {
      return -1;
    }
    if (a.usn > b.usn) {
      return 1;
    }
    return 0;
  }

  rows.sort(compare);
  // --------------------------------------------------------------------

  // -----------------------FILTER FUNCTION------------------------

  if (sem && eve && sec) {
    rows = rows.filter(function (item) {
      console.log(item);
      return (
        item.semester === sem &&
        item.noOfEveReg.includes(eve) === true &&
        item.section === sec
      );
    });
  } else if (sem && sec) {
    rows = rows.filter(function (item) {
      return item.semester === sem && item.section === sec;
    });
  } else if (sec && eve) {
    rows = rows.filter(function (item) {
      return item.section === sec && item.noOfEveReg.includes(eve) === true;
    });
  } else if (sem && eve) {
    rows = rows.filter(function (item) {
      return item.semester === sem && item.noOfEveReg.includes(eve) === true;
    });
  } else if (eve) {
    rows = rows.filter((item) => {
      if (item.noOfEveReg.includes(eve) === true) {
        return item;
      }
    });
  } else if (sem) {
    rows = rows.filter((item) => item.semester === sem);
  } else if (sec) {
    rows = rows.filter((item) => item.section === sec);
  }

  // -----------------------------------------------------------

  return (
    <Fragment>
      <section id="viewAllstud" style={{ margin: "40px 30px 100px 30px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <p
            style={{
              textAlign: "left",
              fontFamily: "sora",
              fontSize: "27px",
              position: "relative",
              top: "10px",
            }}
          >
            Choose the filters appropriately ...
          </p>

          <TextField
            id="standard-basic"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            label="Search with USN"
            sx={{ width: "30%", margin: "auto 5%" }}
            InputProps={{
              endAdornment: <SearchIcon sx={{ color: "gray" }} />,
            }}
            variant="standard"
          />
        </div>
        <hr
          style={{
            margin: "4rem 5rem",
            backgroundColor: "magenta",
            border: "0.3px solid rgba(255, 0, 255, 0.547)",
            backgroundColor: "#0D1117",
          }}
        />

        <div className="filters" style={{ padding: "40px 5%" }}>
          <Grid container spacing={5}>
            <Grid
              item
              md={4}
              xs={12}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Autocomplete
                disablePortal
                options={semesterForAutoComplete}
                sx={{ width: 300, margin: "0 2%" }}
                onChange={(event, value) => setSem(value)}
                renderInput={(params) => (
                  <TextField {...params} label="Semester" value={sem} />
                )}
              />
            </Grid>

            <Grid
              item
              md={4}
              xs={12}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Autocomplete
                disablePortal
                options={sectionArrForAutoComplete}
                sx={{ width: 300, margin: "0 2%" }}
                onChange={(event, value) => setSec(value)}
                renderInput={(params) => (
                  <TextField {...params} label="Section" value={sec} />
                )}
              />
            </Grid>

            <Grid
              item
              md={4}
              xs={12}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Autocomplete
                disablePortal
                options={eveArrForAutoComplete}
                sx={{ width: 300, margin: "0 2%" }}
                onChange={(event, value) => setEve(value)}
                renderInput={(params) => (
                  <TextField {...params} label="Events" value={eve} />
                )}
              />
            </Grid>
          </Grid>
        </div>

        <TableContainer
          component={Paper}
          elevation={3}
          sx={{ padding: "40px", margin: "60px 0", backgroundColor: "black" }}
        >
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead sx={{ backgroundColor: "rgba(255, 0, 255, 0.347)" }}>
              <TableRow>
                <StyledTableCell>Sl no.</StyledTableCell>
                <StyledTableCell align="left">USN</StyledTableCell>
                <StyledTableCell align="left">Student Name</StyledTableCell>
                <StyledTableCell align="left">Semester</StyledTableCell>
                <StyledTableCell align="left">Section</StyledTableCell>
                <StyledTableCell align="center">
                  No-of-events-registered
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.usn}>
                  <StyledTableCell component="th" scope="row">
                    {serialNumber++}
                  </StyledTableCell>
                  <StyledTableCell align="left">{row.usn}</StyledTableCell>
                  <StyledTableCell align="left">{row.studName}</StyledTableCell>
                  <StyledTableCell align="left">{row.semester}</StyledTableCell>
                  <StyledTableCell align="left">{row.section}</StyledTableCell>
                  <StyledTableCell align="center">
                    {row.noOfEveReg.length}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </section>
    </Fragment>
  );
};

export default ViewParticipants;

export async function getServerSideProps() {
  // Fetch data from external API
  const { data } = await axios.get(serverUrl + "/api/return-data");

  // Pass data to the page via props
  return { props: { students: data } };
}
