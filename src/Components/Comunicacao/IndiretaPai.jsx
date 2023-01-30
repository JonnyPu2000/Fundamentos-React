import React, {useState} from "react";
import IndiretaFilho from "./IndiretaFilho";

export default (props) => {
  let [nome,setNome] = useState("bruh");
  let [idade,setIdade] = useState(0);
  let [nerd,setNerd] = useState(false);

  function FornecerInformacoes(nome, idade, nerd) {
    setNome(nome)
    setIdade(idade)
    setNerd(nerd)
  }

  return (
    <div>
        <div>
            <span>{nome} </span>
            <span>{idade} </span>
            <span> {nerd ? 'Verdadeiro' : 'Falso'}</span>

        </div>
      <div>Pai</div>
      <IndiretaFilho quandoClicar={FornecerInformacoes}></IndiretaFilho>
    </div>
  );
};
