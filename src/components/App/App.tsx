import React from "react";
import Header from "../Header";
import { ThemeProvider } from "styled-components";
import * as S from "./App.styled";
import theme from "../../styles/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <S.Root>
        <Header />
        <h2>asf</h2>
      </S.Root>
    </ThemeProvider>
  );
};

export default App;
