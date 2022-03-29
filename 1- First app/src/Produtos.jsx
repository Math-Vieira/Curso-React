import React from "react";
import Titulo from "./Titulo";

const Produtos = () => {
  const produtos = [
    { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
    { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
  ];

  return (
    <section>
      <Titulo texto="Produtos"></Titulo>
    {produtos.map( produto => <li key={produto.nome}>Nome: {produto.nome}<br/> <ul>{produto.propriedades.map( p =><li key={p[0]}>{p}</li>)}</ul></li>)}
    </section>
  );
};

export default Produtos;
