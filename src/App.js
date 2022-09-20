import React from "react";
import "./App.css";
import { AppBar, Grid, Typography, Box, Button, Tooltip } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";

import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

import InputBox from "./components/InputBox";
import InputMessage from "./components/InputMessage";
import AddMoreInput from "./components/AddMoreInput";
import CompanyButton from "./components/CompanyButton";
import { addOutput } from "./app/slicers/outputsSlice";

import logo from "./images/mylogo.png";

const styles = {
  fontStyle:{
    fontFamily:`'Roboto', sans-serif`,
  }
}

function App() {
  const dispatch = useDispatch();

  const inputs = useSelector((state) => state.inputs.value);
  const outputs = useSelector((state) => state.outputs.value);
  var message = useSelector((state) => state.message.value);

  const inputFields = inputs.map((input, index) => {
    return (
      <InputBox
        key={index}
        id={index}
        value={input.title}
        multilined={input.multilined ? input.multilined : false}
      />
    );
  });

  const companyButtons = outputs.map((output, index) => {
    return (
      <CompanyButton
        key={index}
        id={index}
        content={output.message}
        companyName={output.companyname}
      ></CompanyButton>
    );
  });

  const handleClick = () => {
    var companyName;
    if (message === "") {
      alert("Enter a letter");
    } else {
      inputs.forEach((input) => {
        if (input.id === "$company_name") {
          companyName = input.inputvalue;
        }
        message = message.replace(input.id, input.inputvalue);
      });
      dispatch(addOutput({ companyname: companyName, message: message }));
      // console.log(inputs)
    }
  };

  return (
    <div className="App">
      <Box>
        <AppBar
          position="sticky"
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <img
            style={{ display: "flex", height: "50px", objectFit: "cover" }}
            src={logo}
            alt="DaRudeMonkie's logo"
          ></img>
          <Typography
            className={styles.fontStyle}
            align="center"
            variant="h5"
          >
            Cover Letter Generator
          </Typography>
          <Box sx={{ display: "flex", gap: "20px" }}>
            <Tooltip title="Check my Github">
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="https://github.com/raizrazer"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon />
              </a>
            </Tooltip>
            <Tooltip title="Check out my Website">
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="https://www.raiz.ml"
                target="_blank"
                rel="noreferrer"
              >
                <LanguageIcon />
              </a>
            </Tooltip>
            <Tooltip title="Follow me on Instagram">
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="https://www.instagram.com/darudemonkie"
                target="_blank"
                rel="noreferrer"
              >
                <InstagramIcon />
              </a>
            </Tooltip>
            <Tooltip title="Connect with me on LinkedIn">
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="https://www.linkedin.com/in/raizrazer/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon />
              </a>
            </Tooltip>
          </Box>
        </AppBar>
      </Box>
      <Box>
        <Grid container sx={{ padding: "0px 0px" }}>
          <Grid item xs={12} md={3} sx={{ padding: "20px 20px" }}>
            <Box>
              <Typography align="left" variant="h6">
                Input Fields
              </Typography>
              <Typography align="left" variant="caption">
                Enter your inputs here.
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                // justifyContent: "space-evenly"
              }}
            >
              {inputFields}
              {/* <InputBox value={"Name"} />
                <InputBox value={"Address"} multilined={true} />
                <InputBox value={"To"} />
                <InputBox value={"Company Name"} />
                <InputBox value={"HR"} /> */}
              <AddMoreInput />
              <Tooltip title="Delete">
                <Button
                  variant="contained"
                  sx={{ margin: "20px 0px" }}
                  onClick={handleClick}
                >
                  Generate Letter
                </Button>
              </Tooltip>
            </Box>
          </Grid>
          <Grid
            sx={{ background: "lightgray", padding: "20px 20px" }}
            item
            xs={12}
            md={6}
          >
            <Box>
              <Typography align="left" variant="h6">
                Cover Letter
              </Typography>
              <Typography align="left" variant="caption">
                Enter your cover letter with variable/id like
                $company_name...etc.
              </Typography>
            </Box>
            <Box
              sx={{
                padding: "20px 0px",
              }}
            >
              <InputMessage
                content={message}
                value={"Enter $[id] to change the values"}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={3} sx={{ padding: "20px 20px" }}>
            <Box>
              <Typography align="left" variant="h6">
                Generated Letter(s)
              </Typography>
              <Typography align="left" variant="caption">
                Copy or Download the Generated letter.
              </Typography>
            </Box>
            <Box>
              {companyButtons}
              {/* <CompanyButton id={12} content={"Something"}  companyName={"Monkie's Media"}></CompanyButton> */}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
