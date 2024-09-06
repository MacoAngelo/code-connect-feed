import "./styles.css";
import codeIcon from "./assets/code.svg";
import shareIcon from "./assets/share.svg";
import chatIcon from "./assets/chat.svg";

export default function Card({
  id,
  imagemUrl,
  titulo,
  resumo,
  linhasDeCodigo,
  compartilhamentos,
  comentarios,
  usuario,
}) {
  return (
    <article className="card">
      <div className="card__imagem">
        <img src={imagemUrl} alt="Imagem do post" />
      </div>
      <div className="card__conteudo">
        <div className="conteudo__texto">
          <h3>{titulo}</h3>
          <p>{resumo}</p>
        </div>
        <div className="conteudo__rodape">
          <ul>
            <li>
              <img src={codeIcon} alt="Códigos" />
              {linhasDeCodigo}
            </li>
            <li>
              <img src={shareIcon} alt="Compartilhamentos" />
              {compartilhamentos}
            </li>
            <li>
              <img src={chatIcon} alt="Comentários" />
              {comentarios}
            </li>
          </ul>
          <div className="rodape__usuario">
            <div>
              <img src={usuario.imagem} alt="Ícone do usuário" />
            </div>
            <div>{usuario.nome}</div>
          </div>
        </div>
      </div>
    </article>
  );
}
