import React from "react";
import Produto from "./Produto";

function App() {
  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    const produtoLocal = window.localStorage.getItem("produto");
    if (produtoLocal) setProduto(produtoLocal);
  }, []);

  React.useEffect(() => {
    if (produto !== null) window.localStorage.setItem("produto", produto);
  }, [produto]);

  function handleClick({ target }) {
    setProduto(target.innerText);
  }
  return (
    <div className="App">
      <h1>Preferência: {produto}</h1>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
      {produto && <Produto produto={produto} />}
    </div>
  );
}

export default App;
