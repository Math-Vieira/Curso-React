import React from 'react'
import Produto from './Produto';

const App = () => {
  const [dados, setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);

  const handleClick = async (e) => {
    setCarregando(true);
    const promiseJson = await fetch('https://ranekapi.origamid.dev/json/api/produto/'+e.target.innerHTML)
    const json = await promiseJson.json();
    setDados(json);
    setCarregando(false);
    console.log(dados)
  }

  return (
    <div>
      <button onClick={handleClick}>tablet</button>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
      {carregando && <p>carregando...</p>}
      {!carregando && dados && <Produto dados={dados}/>}
    </div>
  )
}

export default App;