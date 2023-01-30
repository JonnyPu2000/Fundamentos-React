import React from 'react';

export default function ComParametro(props){
    const status = props.nota >= 8 ? 'Aprovado' : 'Reprovado';

    return (<div>
        <h2>{props.titulo}</h2>
        <h3>{props.aluno} tem nota {props.nota} e está {status}</h3>


    </div>)
}