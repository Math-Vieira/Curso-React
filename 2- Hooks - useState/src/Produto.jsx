import React from 'react';

const Produto = (props) => {
    const {nome, preco, fotos, descricao} = props.dados;
  return (
    <div>
        <h1>{nome}</h1>
        <h2>R$ {preco}</h2>
        <img src={fotos[0].src} alt="produto"/>
        <p>{descricao}</p>
    </div>
  )
};

export default Produto;