import { useState } from "react";
import React from "react";


export default props =>{

    
    var [quantidade,setQuantidade] = useState(props.quantidade || 6)
    var numerosIniciais = Array(quantidade).fill(0);
    const [numeros,setNumeros] = useState(numerosIniciais)

    
    function gerarNumeros(quantidade){
        
        const numeros = Array(quantidade).fill(0);
        for(var i=0; i< quantidade; i++){
            var numero = Math.floor(Math.random() * (99 - 1) + 1)
            if(!numeros.includes(numero)){
                numeros[i] = numero;
            }
            else{
                i -= 1;
            }
        }
        return numeros.sort(function(a, b){return a - b});
    }

    return (
        <div>
            <h1>Numeros Mega Sena</h1>
            <h2>{numeros.join(' ')}</h2>
            <div>
                <label></label>
                <input type="number" value={quantidade} onChange={e=> setQuantidade(+e.target.value)} min = {4} max = {16}/>
            </div>
            <button onClick={_ => setNumeros(gerarNumeros(quantidade))}>
                Gerar Numeros
            </button>
        </div>
    )
}

