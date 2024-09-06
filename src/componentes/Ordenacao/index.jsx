import "./styles.css";

export default function Ordenacao() {
  return (
    <section className="container-ordenacao">
      <ul>
        <li>
          <a className="link__ordenacao link__ordenacao--ativo" href="#">
            Recentes
          </a>
        </li>
        <li>
          <a className="link__ordenacao" href="#">
            Favoritos
          </a>
        </li>
      </ul>
    </section>
  );
}
