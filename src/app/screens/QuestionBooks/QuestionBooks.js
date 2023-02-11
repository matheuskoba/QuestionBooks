import React,{ useState, useEffect } from "react";

import QuestionContainer from "../../components/QuestionContainer";
import '../../stylesheets/pages/questionBooks.sass';
import Header from "../../components/Header";

import Api from "../../../Api";

export const QuestionBooks = () => {

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const getQuestions = async () => {
      const q = await Api.getQuestionBooks();
      if(q) {
        setQuestions(q);
      }
    };

    getQuestions();
  }, []);

  return (
    <div id="question-books">
      <Header />
      <div className="filter-area">
        <input className="filter-check" type="checkbox" />
        <p className="filter-text">Mostrar apenas questões não respondidas</p>
      </div>
      <div className="questions">
        {questions.map((item, k) => (
          <QuestionContainer key={k} data={item} />
        ))}
      </div>
    </div>
  );
};
