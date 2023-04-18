import { Link } from "react-router-dom";
import estilos from "./ListaItens.module.scss";
import listaDeCompras from "../../../dados/listadepresentes.json";

interface Props {
  id: number;
  title: string;
  link: string;
  photo: string;
  price: number;
}

export default function ListaItens(props: Props) {
  const { id, title, link, photo, price } = props;
  const pix = "https://nubank.com.br/pagar/xw2h0/YToiVhZ4ZT";

  return (
    <div className={estilos.corpo__card}>
      <li className={estilos.corpo__lista__item}>
        <img className={estilos.corpo__lista__item__imagem} src={photo} alt={title}/>
        <h1 className={estilos.corpo__lista__item__titulo}>{title}</h1>
        <h2 className={estilos.corpo__lista__item__preco}>{price}</h2>
        <div className={estilos.corpo__lista__item__acoes}>
          <Link className={estilos.corpo__lista__item__acoes__link} to={link}>
            Quero Comprar e entregar para os noivos
          </Link>
          <Link className={estilos.corpo__lista__item__acoes__pix} to={pix}>
            Quero Fazer o Pix do valor para que os noivos comprem
          </Link>
        </div>
      </li>
    </div>
  );
}
