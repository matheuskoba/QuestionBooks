import { useLocation } from '@reach/router';
import Header from '../../components/Header';

import '../../stylesheets/pages/questionBookThanks.sass';

export const QuestionBookThanks = () => {
  const location = useLocation();
  const data = JSON.parse(new URLSearchParams(location.search).get('data'));
  const time = new URLSearchParams(location.search).get('time');
  return (
    <div>
      <Header />
      <div id="thanks">
        <div className='thanks-area'>
          <h1 className='thanks-title'>Obrigado por enviar!</h1>
          <div className='time'>O tempo de resposta total é de: {time}s</div>
          <ul>
            {data.map((item, index) => (
              <li key={index}>
                <p className='question-title'>{item.question}</p>
                <p className='resposta-title'>Resposta:</p>
                <p className='question-response'>{item.answer}</p>
                <hr/>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
