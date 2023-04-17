import foto from "../../images/s2.jpg";
import estilos from "./Home.module.scss";
import { useNavigate } from "react-router-dom";

export default function Home(){
  const navigate = useNavigate();

  return (
    <div className={estilos.corpo}>
      <div className={estilos.corpo__cartao}>
        <img className={estilos.corpo__cartao__imagem} src={foto} alt="foto"/>
        <h1>Lista de Presentes</h1>
        <button className={estilos.corpo__cartao__botao} onClick={()=>navigate("/lista")}>Go!</button>
      </div>
    </div>
  );
}