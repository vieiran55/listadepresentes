import { Link } from "react-router-dom";
import estilos from "./ListaItens.module.scss";
import estilosModoLista from "./ListaItensModoLista.module.scss";
import listaDeCompras from "../../../dados/listadepresentes.json";
import { useEffect, useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiHelpCircle } from "react-icons/bi";
import classNames from "classnames";

interface Props {
  id: number;
  title: string;
  link: string;
  photo: string;
  status: string;
  price: number;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  grid: boolean;
  setGrid: React.Dispatch<React.SetStateAction<boolean>>;
  lista: boolean;
  setLista: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ListaItens(props: Props) {
  const { id, title, link, photo, price, status, open, setOpen, grid, setGrid, lista, setLista } = props;
  const pix = "https://nubank.com.br/pagar/xw2h0/YToiVhZ4ZT";
  const [isShown, setIsShown] = useState(false);
  const handleOpen = () => setOpen(true);


  const classCorpo = classNames({
    [estilos[`corpo__${status}`]]: grid,
    [estilosModoLista[`corpo__${status}`]]: lista
  });
  const classCorpoItem = classNames({
    [estilos.corpo__grid__item]: grid,
    [estilosModoLista.corpo__lista__item]: lista
  });
  const classCorpoItemTitulo = classNames({
    [estilos.corpo__grid__item__titulo]: grid,
    [estilosModoLista.corpo__lista__item__titulo]: lista
  });
  const classCorpoItemConteiner = classNames({
    [estilos.corpo__grid__item__conteiner]: grid,
    [estilosModoLista.corpo__lista__item__conteiner]: lista
  });
  const classCorpoItemImagemPreco = classNames({
    [estilos.corpo__grid__item__imagemPreco]: grid,
    [estilosModoLista.corpo__lista__item__imagemPreco]: lista
  });

  const classCorpoItemImagem = classNames({
    [estilos.corpo__grid__item__imagem]: grid,
    [estilosModoLista.corpo__lista__item__imagem]: lista
  });
  const classCorpoItemPreco = classNames({
    [estilos.corpo__grid__item__preco]: grid,
    [estilosModoLista.corpo__lista__item__preco]: lista
  });
  const classCorpoItemAcoes = classNames({
    [estilos.corpo__grid__item__acoes]: grid,
    [estilosModoLista.corpo__lista__item__acoes]: lista
  });
  const classCorpoItemAcoesForm = classNames({
    [estilos.corpo__grid__item__acoes__link]: grid,
    [estilosModoLista.corpo__lista__item__acoes__link]: lista
  });
  const classCorpoItemAcoesPix = classNames({
    [estilos.corpo__grid__item__acoes__pix]: grid,
    [estilosModoLista.corpo__lista__item__acoes__pix]: lista
  });
  const classCorpoItemAcoesConfirmar = classNames({
    [estilos.corpo__grid__item__confirmar]: grid,
    [estilosModoLista.corpo__lista__item__confirmar]: lista
  });
  const classCorpoItemIcon = classNames({
    [estilos.corpo__grid__item__icon]: grid,
    [estilosModoLista.corpo__lista__item__icon]: lista
  });



  useEffect(() => {
    if (status === "disponivel") {
      setIsShown(true);
    }
  }, []);

  return (
    <div className={classCorpo}>
      <span></span>
      <li className={classCorpoItem}>
        <BiHelpCircle className={classCorpoItemIcon} onClick={handleOpen} />
        <h1 className={classCorpoItemTitulo}>
          {title.substring(0, 30)}
        </h1>
        <div className={classCorpoItemConteiner}>
          <div className={classCorpoItemImagemPreco}>
            <img
              className={classCorpoItemImagem}
              src={photo}
              alt={title}
            />
            {isShown &&
              <h2 className={classCorpoItemPreco}>{`R$ ${price}`}</h2>
            }
          </div>
          {isShown && (
            <div className={classCorpoItemAcoes}>
              <Link className={classCorpoItemAcoesForm} to={link}>
                Quero Comprar e entregar para os noivos
              </Link>
              <Link className={classCorpoItemAcoesPix} to={pix}>
                Quero Fazer o Pix do valor para que os noivos comprem
              </Link>
            </div>
          )}
          {isShown &&
            <Link
              to={"https://form.respondi.app/LdirwZxI"}
              className={classCorpoItemAcoesConfirmar}
            >
              Vou dar esse presente
            </Link>
          }
        </div>
      </li>
    </div>
  );
}
