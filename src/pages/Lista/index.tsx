import { Link } from "react-router-dom";
import estilos from "./Lista.module.scss";
import listaDeCompras from "../../dados/listadepresentes.json";
import ListaItens from "./ListaItens";

export default function Lista() {
  return (
    <div className={estilos.corpo}>
      <h1 className={estilos.corpo__titulo}>Lista de Presentes</h1>
      <ol className={estilos.corpo__lista}>
        {listaDeCompras.map((item) => (
          <ListaItens
            key={item.id}
            {...item}
          />
        ))}
      </ol>
    </div>
  );
}
