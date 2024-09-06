import { useState } from "react";
import "./styles.css";

export default function BarraDePesquisa() {
  const [termoPesquisa, setTermoPesquisa] = useState("");
  console.log(termoPesquisa);
  return (
    <input
      className="barra-pesquisa"
      type="seach"
      placeholder="Digite o que você procura"
      value={termoPesquisa}
      onChange={(e) => setTermoPesquisa(e.target.value)}
    />
  );
}
