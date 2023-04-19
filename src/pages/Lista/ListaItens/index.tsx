import { Link } from "react-router-dom";
import estilos from "./ListaItens.module.scss";
import listaDeCompras from "../../../dados/listadepresentes.json";
import { useEffect, useState } from "react";

interface Props {
  id: number;
  title: string;
  link: string;
  photo: string;
  status: string;
  price: number;
}

export default function ListaItens(props: Props) {
  const { id, title, link, photo, price, status } = props;
  const pix = "https://nubank.com.br/pagar/xw2h0/YToiVhZ4ZT";
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    if (status === "disponivel") {
      setIsShown(true);
    }
  }, []);

  return (
    <div className={estilos[`corpo__${status}`]}>
      <span></span>
      <li className={estilos.corpo__lista__item}>
        <h1 className={estilos.corpo__lista__item__titulo}>
          {title.substring(0, 30)}
        </h1>
        <img
          className={estilos.corpo__lista__item__imagem}
          src={photo}
          alt={title}
        />
        {isShown &&
        <h2 className={estilos.corpo__lista__item__preco}>{`R$ ${price}`}</h2>
        }
        {isShown && (
          <div className={estilos.corpo__lista__item__acoes}>
            <Link className={estilos.corpo__lista__item__acoes__link} to={link}>
              Quero Comprar e entregar para os noivos
            </Link>
            <Link className={estilos.corpo__lista__item__acoes__pix} to={pix}>
              Quero Fazer o Pix do valor para que os noivos comprem
            </Link>
          </div>
        )}
        {isShown &&
        <Link
          to={"https://form.respondi.app/LdirwZxI"}
          className={estilos.corpo__lista__item__confirmar}
        >
          Vou dar esse presente
        </Link>
        }
      </li>
    </div>
  );
}
