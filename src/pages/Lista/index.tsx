import { Link } from "react-router-dom";
import estilos from "./Lista.module.scss";
import listaDeCompras from "../../dados/listadepresentes.json";
import ListaItens from "./ListaItens";
import { BsArrowUpCircleFill } from "react-icons/bs";

export default function Lista() {

  const topo = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={estilos.corpo}>
      <h1 className={estilos.corpo__casal}>Antonio e Gabriela</h1>
      <ol className={estilos.corpo__lista}>
        <h2 className={estilos.corpo__titulo}>Lista de Presentes</h2>
        {listaDeCompras.map((item) => (
          <ListaItens key={item.id} {...item} />
        ))}
      </ol>
      <button className={estilos.botoes__tipo__up} onClick={topo}>
        <BsArrowUpCircleFill />
        VOLTAR AO TOPO
      </button>
    </div>
  );
}
