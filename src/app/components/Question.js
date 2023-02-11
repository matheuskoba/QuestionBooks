import React from "react";
import '../stylesheets/components/question.sass';

export default () => {
    return(
        <div id="question-details">
            <div className="question-area">
                <p className="question-title">Título da pergunta 01</p>
                <p className="question-body">Nullam quis risus eget urna mollis ornare vel eu leo. Nulla vitae elit libero, a pharetra augue.</p>
                <textarea className="question-textarea" placeholder="Responda aqui"/>
                <button className="question-btn-send">Enviar resposta</button>
                <hr/>
                <div className="question-btn-area">
                    <button className="question-btn">Pergunta anterior</button>
                    <button className="question-btn">Próxima pergunta</button>
                </div>
            </div>
        </div>
    );
}