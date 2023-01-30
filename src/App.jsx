import React from "react";

import Primeiro from "./Components/Basics/First";
import Mega from "./Components/Mega/Mega";
import Contador from "./Components/Contador/Contador";
import Input from "./Components/Formulario/Input";
import DiretaPai from "./Components/Comunicacao/DiretaPai";
import TabelaProdutos from "./Components/Repeticao/TabelaProdutos";
import ListaAlunos from "./Components/Repeticao/ListaAlunos";
import MembroFamilia from "./Components/Basics/MembroFamilia";
import Familia from "./Components/Basics/Familia";
import ComParametro from "./Components/Basics/ComParametro";
import Fragmento from "./Components/Basics/Fragmento";
import AleatorioEntre from "./Components/Basics/AleatorioEntre";
import Card from "./Components/Layout/Card";
import ParOuImpar from "./Components/Condicional/ParOuImpar";
import UsuarioInfo from "./Components/Condicional/UsuarioInfo";
import IndiretaPai from "./Components/Comunicacao/IndiretaPai";
import "./App.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default (_) => (
  <div className="App">
    <h1>Fundamentos React</h1>

    <div className="Cards">

        <Card titulo= '#13-Mega Sena' color= "#12a4d9">
              <Mega/>
        </Card>

        <Card titulo= '#12-Contador' color= "#12a4d9">
              <Contador numeroInicial = {19} ></Contador>
        </Card>

        <Card titulo= '#11-Componente Controlado' color= "#12a4d9">
              <Input></Input>
        </Card>
        <Card titulo= '#10-Comunicação Indireta' color= "#e2d810">
              <IndiretaPai></IndiretaPai>
        </Card>
        <Card titulo= '#09-Comunicação direta' color= "#a2d5c6">
              <DiretaPai></DiretaPai>
        </Card>

        <Card titulo= '#08-Renderização Condicional' color= "#5c3c92">
            <ParOuImpar numero = {21}></ParOuImpar>
            <UsuarioInfo usuario = {{nome: "Fernando"}}/>
            <UsuarioInfo usuario = {{email: 'sexo'}}/>
            
        </Card>

        <Card titulo= '#07-Tabela Repetição'>
            <TabelaProdutos></TabelaProdutos>
        </Card>

      <Card titulo="#06-Repetição" color="#D4AC0D">
        <ListaAlunos></ListaAlunos>
      </Card>


      <Card titulo="#05-Componente com Filhos" color="#00C8f8">
        <Familia sobrenome="Neto">
          <MembroFamilia nome="Rudney" />
          <MembroFamilia nome="João" />
          <MembroFamilia nome="Thiago" />
        </Familia>
      </Card>


      <Card titulo="Exemplo de Card" color="#080">
        <AleatorioEntre min={0} max={10} />
      </Card>

      <Card titulo="Fragmento" color="#FA6900">
        <Fragmento />
      </Card>

      <Card titulo="Parâmetro" color="#E94C6F">
        <ComParametro titulo="Titulo dahora" aluno="Pedro" nota={10} />
      </Card>

      <Card titulo="Primeiro" color="#E8B71A">
        <Primeiro />
      </Card>
    </div>
  </div>
);
