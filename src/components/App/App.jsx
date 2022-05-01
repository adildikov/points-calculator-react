import React, { useCallback, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "@components/Header";
import Footer from "@components/Footer";
import MainPage from "@pages/MainPage";
import ResultsPage from "@pages/ResultsPage";
import * as S from "./App.styled";
import { AnimatePresence } from "framer-motion";
import useToggle from "@hooks/useToggle";
import Nav from "@components/Nav";

const App = () => {
  const [isNavOpen, toggleNav] = useToggle(false);
  const handleDocumentClick = useCallback(() => {
    toggleNav();
  }, [toggleNav]);

  useEffect(() => {
    if (isNavOpen) {
      document.getElementById("layout-content")?.classList.add("disable-body");
      document
        .getElementById("layout-content-wrapper")
        ?.addEventListener("click", handleDocumentClick);
    } else {
      document
        .getElementById("layout-content")
        ?.classList.remove("disable-body");
      document
        .getElementById("layout-content-wrapper")
        ?.removeEventListener("click", handleDocumentClick);
    }
  }, [isNavOpen, handleDocumentClick]);
  return (
    <S.Root>
      <BrowserRouter>
        <Header onMenuClick={toggleNav} />
        <AnimatePresence>
          {isNavOpen && <Nav onClose={toggleNav} />}
        </AnimatePresence>
        <div id="layout-content-wrapper">
          <div id="layout-content">
            <Switch>
              <Route exact path="/" component={MainPage} />
              <Route exact path="/home" component={MainPage} />
              <Route exact path="/results" component={ResultsPage} />
            </Switch>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </S.Root>
  );
};

export default App;
