import React from 'react';
import '../stylesheets/components/questionContainer.sass';

import { useNavigate } from "@reach/router"

export default ({data,filter}) => {
    const navigate = useNavigate();

    return(
        <div style={(filter && data.answered) ? {display: 'none'} : {display: 'block'}} id="question-container">
            <form onSubmit={() => navigate(`/cadernos-de-questoes/${data.id}`)}>
                <h5 className='question-title'>{data.title}</h5>
                <p className='question-amount'>{data.questionAmount > 1 ? `${data.questionAmount} questões` : `${data.questionAmount} questão`}</p>
                <div className='question-status-area'>
                    <p className='question-status'>{data.answered ? 'Respondido' : 'Não respondido'}</p>
                </div>
                {data.answered 
                    ? 
                    <button type='button' className='question-btn-respondido'>Responder</button> 
                    : 
                    <button type='submit' className='question-btn'>Responder</button>
                }
            </form>
        </div>
    );
}