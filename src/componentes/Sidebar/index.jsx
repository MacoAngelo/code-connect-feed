import imgLogo from "./assets/Logo.svg";
import imgFeed from "./assets/feed.svg";
import imgAccount from "./assets/account_circle.svg";
import imgInfo from "./assets/info.svg";
import imgLogout from "./assets/logout.svg";
import "./styles.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <img src={imgLogo} alt="Logo do CodeConnect" />
      <nav>
        <ul className="lista-sidebar">
          <li>
            <a href="#" className="lista__link-publicacao">
              Publicar
            </a>
          </li>
          <li>
            <a className="lista__link lista__link--ativo" href="#">
              <img className="icone-link" src={imgFeed} />
              <span>Feed</span>
            </a>
          </li>
          <li>
            <a className="lista__link" href="#">
              <img className="icone-link" src={imgAccount} />
              <span>Perfil</span>
            </a>
          </li>
          <li>
            <a className="lista__link" href="#">
              <img className="icone-link" src={imgInfo} />
              <span>Sobre nós</span>
            </a>
          </li>
          <li>
            <a className="lista__link" href="#">
              <img className="icone-link" src={imgLogout} />
              <span>Sair</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
