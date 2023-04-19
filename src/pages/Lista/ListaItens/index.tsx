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
        <h1 className={estilos.corpo__lista__item__titulo}>{title.substring(0,30)}</h1>
        <img className={estilos.corpo__lista__item__imagem} src={photo} alt={title}/>
        <h2 className={estilos.corpo__lista__item__preco}>{`R$ ${price}`}</h2>
        <div className={estilos.corpo__lista__item__acoes}>
          <Link className={estilos.corpo__lista__item__acoes__link} to={link}>
            Quero Comprar e entregar para os noivos
          </Link>
          <Link className={estilos.corpo__lista__item__acoes__pix} to={pix}>
            Quero Fazer o Pix do valor para que os noivos comprem
          </Link>
        </div>
        <Link to={"https://form.respondi.app/LdirwZxI"} className={estilos.corpo__lista__item__confirmar}>Confirmar
        </Link>
      </li>
    </div>
  );
}
