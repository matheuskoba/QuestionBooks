import React from "react";
import { Router } from "@reach/router";
import { render } from "react-dom";

import Notfound from "../screens/Notfound";
import { QuestionBooks, QuestionBookShow, QuestionBookThanks } from "../screens/QuestionBooks";

export const Routes = () => (
  render(
  <Router>
    <QuestionBooks path="/" />
    {/* <QuestionBookShow path="/cadernos-de-questoes" /> */}
    <QuestionBookShow path="/cadernos-de-questoes/:id" />
    <QuestionBookThanks path="/cadernos-de-questoes/:id/obrigado" />
    <Notfound default />
  </Router>,
  document.getElementById("root")
  )
);
