import React,{ useState, useEffect } from "react";

import QuestionContainer from "../../components/QuestionContainer";
import '../../stylesheets/pages/questionBooks.sass';
import Header from "../../components/Header";

import { ReactComponent as CheckSvg } from '../../../assets/CheckIcon.svg';

import Api from "../../../Api";

export const QuestionBooks = () => {

  const [questions, setQuestions] = useState([]);
  const [check, setCheck] = useState(false);
  const [filter, setFilter] = useState(false);

  const handleCheck = () => {
    if(!check) {
      setCheck(true);
      setFilter(true);
    } else {
      setCheck(false);
      setFilter(false);
    }
  }

  const getQuestions = async () => {
    const q = await Api.getQuestionBooks();
    if(q) {
      setQuestions(q);
    }
  };

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <div id="question-books">
      <Header />
      <div className="filter-area">
        <div onClick={handleCheck} className="filter-check">{check ? <CheckSvg /> : ''}</div>
        <p className="filter-text">Mostrar apenas questões não respondidas</p>
      </div>
      <div className="questions">
        {questions.map((item, k) => (
          <QuestionContainer key={k} data={item} filter={filter} />
        ))}
      </div>
    </div>
  );
};
