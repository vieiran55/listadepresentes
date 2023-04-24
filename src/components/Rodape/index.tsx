import { Link } from "react-router-dom";
import estilos from "./Rodape.module.scss";

export default function Rodape() {
  return (
    <footer className={estilos.rodape}>
      <div className={estilos.rodape__coteiner}>
      ©
        <Link
          to="https://linktr.ee/vieiran55"
          className={estilos.rodape__coteiner__texto}
        > CVTRSY</Link>
      </div>
    </footer>
  );
}
