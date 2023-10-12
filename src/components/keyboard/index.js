import React, { useState } from "react";
import { Grid, Box, Typography } from "@mui/material";
import { colors } from "../../constants";
import BackSvg from "../../assets/backSvg";
import useWordsContext from "../../context/wordsContext";
import { useTheme } from "@mui/material/styles";

const Keyboard = () => {
  const { keyValidations } = useWordsContext();
  const theme = useTheme()
  const keyList = "QWERTYUIOPASDFGHJKLeZXCVBNMb";
  const keys = [];
  const handleClick = (key) => {
    let keyStroke;
    switch (key) {
      case "e":
        keyStroke = "Enter";
        break;
      case "b":
        keyStroke = "Backspace";
        break;
      default:
        keyStroke = key;
    }
    document.dispatchEvent(new KeyboardEvent("keyup", { key: keyStroke }));
  };

  for (let i = 0; i < keyList.length; i++) {
    const key = keyList[i];
    let bgColor = colors.keyUnused;
    switch (keyValidations[key]) {
      case "g":
        bgColor = theme.palette.success.main;
        break;
      case "y":
        bgColor = theme.palette.warning.main;
        break;
      case "r":
        bgColor = theme.palette.error.main;
        break;
      default:
        bgColor = theme.palette.key.main;
    }
    const textColor =
      bgColor === theme.palette.border.main
        ? theme.palette.text.primary
        : theme.palette.text.secondary;
    let out;
    let spacing;
    let variant;
    let width;

    if (key === "e" || key === "b") {
      out = key === "e" ? "ENTER" : "Backspace";
      variant = "caption";
      spacing = 3;
      width = "60px";
    } else {
      out = key;
      variant = "h6";
      spacing = 2;
      width = "40px";
    }

    keys.push(
      <Grid key={i} item sm={spacing} sx={{ padding: 0 }}>
        <Box
          style={{
            height: "55px",
            width: width,
            display: "flex",
            background: bgColor,
            borderRadius: "4px",
          }}
          justifyContent="center"
          alignItems="center"
          onClick={() => handleClick(key)}
        >
          {out === "Backspace" ? (
            <BackSvg />
          ) : (
            <Typography
              variant={variant}
              sx={{ fontWeight: 600, color: textColor }}
            >
              {out}
            </Typography>
          )}
        </Box>
      </Grid>
    );
  }

  return (
    <Grid
      container
      spacing={1}
      columns={20}
      justifyContent="center"
      alignItems={"center"}
      sx={{ padding: "20px", maxWidth: "500px" }}
    >
      {keys}
    </Grid>
  );
};

export default Keyboard;
