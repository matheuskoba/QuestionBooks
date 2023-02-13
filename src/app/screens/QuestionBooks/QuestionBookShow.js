import React, { useState, useEffect } from 'react';
import '../../stylesheets/pages/questionBookShow.sass';

import Header from '../../components/Header';

export const QuestionBookShow = (props) => {
  const [answers, setAnswers] = useState([]);
  const [currentAnswer, setCurrentAnswer] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [submit, setSubmit] = useState(false);
  const [characterCount, setCharacterCount] = useState(0);
  const [time, setTime] = useState(0);
  const [totalTime, setTotalTime] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:3000/api/question_books/${props.id}.json`)
      .then(response => response.json())
      .then(data => {
        setAnswers(data.answers);
        setCurrentAnswer(data.answers[0]);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(time + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [time]);

  const [userAnswers, setUserAnswers] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const handleAnswerChange = event => {
    setCharacterCount(event.target.value.length);
    setInputValue(event.target.value);
    const existingAnswer = userAnswers.find(
      answer => answer.question === currentAnswer.title
    );
    if (existingAnswer) {
      existingAnswer.answer = event.target.value;
      setUserAnswers([...userAnswers]);
    } else {
      setUserAnswers([
        ...userAnswers,
        { answer: event.target.value, question: currentAnswer.title }
      ]);
    }
  };

  const handleNext = () => {
    console.log(currentIndex, answers.length);
    if (currentIndex === answers.length) {
      return;
    }

    setCurrentIndex(currentIndex + 1);
    setCurrentAnswer(answers[currentIndex + 1]);
    setInputValue('');
    setCharacterCount(0);
    setTotalTime(time + totalTime);
    setTime(0);
  };

  const handleBack = () => {
    if (currentIndex === 0) {
      return;
    }

    setCurrentIndex(currentIndex - 1);
    setCurrentAnswer(answers[currentIndex - 1]);
    setInputValue('');
    setCharacterCount(0);
    setTime(0);
  };

  const handleSubmit = () => {
    setTotalTime(time + totalTime);
    setSubmit(true);
  }

  return (
    <div>
      <Header />
      {console.log(currentIndex, answers.length -1)}
      {loading ? (
        <div>Loading...</div>
      ) : submit ? (
        <div>
          <h1>Obrigado por enviar!</h1>
          <div>O tempo de resposta total é de: {totalTime}</div>
          <ul>
            {userAnswers.map((answer, index) => (
              <li key={index}>
                <p>{answer.question}</p>
                <p>Resposta:</p>
                <p>{answer.answer}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div id='answer-details'>
          <div className='answer-area'>
            <div className="answer-title">Duração na questão: {time}s</div>
            <p className="answer-title">{currentAnswer.title}</p>
            <p className="answer-body">{currentAnswer.body}</p>
            <textarea className="answer-textarea" placeholder="Responda aqui" value={inputValue} onChange={handleAnswerChange} />
            <p>{characterCount}</p>
            <button className="answer-btn-send" onClick={handleSubmit}>Enviar resposta</button>
            <hr/>
            <div className="answer-btn-area">
              {currentIndex === 0 ?
              <button className="answer-btn-disable">Pergunta anterior</button> 
              :
              <button className="answer-btn" onClick={handleBack}>Pergunta anterior</button>
              }
              {currentIndex === answers.length -1 ?
              <button className="answer-btn-disable">Próxima pergunta</button>
              :
              <button className="answer-btn" onClick={handleNext}>Próxima pergunta</button>
              }
            </div>
          </div>
        </div>
      )}
    </div>
  );
};