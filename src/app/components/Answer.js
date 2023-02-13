import React from "react";

export default () => {
    return(
        <div id="answer-details">
            <div className="answer-area">
                <p className="answer-title">Título da pergunta 01</p>
                <p className="answer-body">Nullam quis risus eget urna mollis ornare vel eu leo. Nulla vitae elit libero, a pharetra augue.</p>
                <textarea className="answer-textarea" placeholder="Responda aqui"/>
                <button className="answer-btn-send">Enviar resposta</button>
                <hr/>
                <div className="answer-btn-area">
                    <button className="answer-btn">Pergunta anterior</button>
                    <button className="answer-btn">Próxima pergunta</button>
                </div>
            </div>
        </div>
    );
}