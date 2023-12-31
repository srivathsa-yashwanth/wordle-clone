import React from "react";

import Header from "../header";
import Keyboard from "../keyboard";
import WordsList from "../words";

import { WordsContext } from "../../context/wordsContext";
import { OptionsContext } from "../../context/optionsContext";

import { Container, Stack } from "@mui/material";

const Home = () => {
  return (
    <Container>
      <OptionsContext>
        <WordsContext>
          <Stack
            direction="column"
            spacing={7}
            justifyContent="center"
            alignItems="center"
          >
            <Header />
            <WordsList />
            <Keyboard />
          </Stack>
        </WordsContext>
      </OptionsContext>
    </Container>
  );
};

export default Home;
