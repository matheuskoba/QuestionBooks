import React from 'react';
import '../../stylesheets/pages/questionBookShow.sass';

import Question from '../../components/Question';
import Header from '../../components/Header';

import Api from '../../../Api';

export const QuestionBookShow = () => {



  return (
    <div id="question">
      <Header />
      <Question />
    </div>
  );
};
