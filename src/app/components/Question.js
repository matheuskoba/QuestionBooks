import React from "react";
import '../stylesheets/components/question.sass';

export default () => {
    return(
        <div>
            <p>Título da pergunta 01</p>
            <p>Nullam quis risus eget urna mollis ornare vel eu leo. Nulla vitae elit libero, a pharetra augue.</p>
            <textarea placeholder="Responda aqui"/>
            <button>Enviar resposta</button>
            <hr/>
            <div>
                <button>Pergunta anterior</button>
                <button>Próxima pergunta</button>
            </div>
        </div>
    );
}