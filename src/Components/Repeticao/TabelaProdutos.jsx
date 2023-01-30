import React from "react";
import produtos from "../../Data/produtos";
import './TabelaProdutos.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const listaProdutos = produtos.map((produto,i) => {
    return (
      <tr key={produto.id} className= {i % 2 === 0 ? 'par' : 'impar'}>
        <td>{produto.id}</td>
        <td>{produto.nome}</td>
        <td>R$ {produto.preco}</td>
      </tr>
    );
  });

  return (
    <div className="TabelaProdutos">
      <table>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Preço</th>
        </tr>

        {listaProdutos}
      </table>
    </div>
  );
};
