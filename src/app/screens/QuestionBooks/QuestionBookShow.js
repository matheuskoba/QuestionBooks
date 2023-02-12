import React,{ useEffect } from 'react';
import '../../stylesheets/pages/questionBookShow.sass';

import Answer from '../../components/Answer';
import Header from '../../components/Header';

import Api from '../../../Api';

export const QuestionBookShow = (props) => {

  const testeApi = async () => {
    const q = await Api.getQuestion(props.id);
    console.log(q.answers)
    
  };

  useEffect(() => {
    testeApi();
  }, []);

  return (
    <div id="question">
      <Header />
      <Answer />
    </div>
  );
};
