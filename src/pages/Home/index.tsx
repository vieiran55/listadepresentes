import foto from "../../images/FotoPerfilClean.png";
import wave from "../../images/waveWhite.svg";
import estilos from "./Home.module.scss";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const linkPresenca = "https://form.respondi.app/L86LWmDr";

  return (
    <div className={estilos.corpo}>
      <div className={estilos.corpo__cartao}>
        <div className={estilos.corpo__cartaoSuperior}>
          <img className={estilos.corpo__cartaoSuperior__imagem1} src={foto} alt="foto" />
          <img className={estilos.corpo__cartaoSuperior__imagem2} src={wave} alt="foto" />
        </div>
        <div className={estilos.corpo__cartaoInferior}>
          <h1 className={estilos.corpo__cartaoInferior__casal}>Gabriela e Antonio</h1>
        </div>
        <div>
          <h2 className={estilos.corpo__cartaoInferior__text}>30|Jul|23</h2>
          <h3 className={estilos.corpo__cartaoInferior__text}>às 12h</h3>
        </div>
      </div>
      <div className={estilos.corpo__cartaoBotoes}>
        <Link to={linkPresenca} className={estilos.corpo__cartaoBotoes__confirma}>Confirmar Presença</Link>
        <button className={estilos.corpo__cartaoBotoes__Lista} onClick={() => navigate("/lista")}>Lista de Presentes</button>
      </div>
    </div>
  );
}