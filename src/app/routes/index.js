import React from "react";
import { Router } from "@reach/router";

import Notfound from "../screens/Notfound";
import { QuestionBooks, QuestionBookShow, QuestionBookThanks } from "../screens/QuestionBooks";

export const Routes = () => (
  <Router>
    <QuestionBooks path="/" />
    <QuestionBookShow path="/cadernos-de-questoes" />
    <QuestionBookShow path="/cadernos-de-questoes/:id" />
    <QuestionBookThanks path="/cadernos-de-questoes/:id/obrigado" />
    <Notfound default />
  </Router>
);
