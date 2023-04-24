import { Link, useNavigate } from "react-router-dom";
import estilos from "./Lista.module.scss";
import listaDeCompras from "../../dados/listadepresentes.json";
import ListaItens from "./ListaItens";
import { BsArrowUpCircleFill } from "react-icons/bs";
import Atencao from "../../components/Atencao";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { MdOutlineGridView } from "react-icons/md";
import classNames from "classnames";
import { useState } from "react";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Lista(props: Props) {

  const { open, setOpen } = props;

  const [grid, setGrid] = useState(true);
  const [lista, setLista] = useState(false);

  const navigate = useNavigate();

  const topo = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handClickLista = () => {
    setGrid(false);
    setLista(true);
  };

  const handClickGrid = () => {
    setGrid(true);
    setLista(false);
  };

  const classIconGrid = classNames({
    [estilos.modoDeVizualizacao__iconGrid]: grid,
    [estilos.modoDeVizualizacao__iconList]: lista
  });
  
  const classIconList = classNames({
    [estilos.modoDeVizualizacao__iconGrid]: lista,
    [estilos.modoDeVizualizacao__iconList]: grid
  });

  return (
    <div className={estilos.corpo}>
      <Atencao open={open} setOpen={setOpen} />
      <h1 className={estilos.corpo__casal} onClick={() => navigate("/")}>Gabriela e Antonio</h1>
      <h2 className={estilos.corpo__titulo}>LISTA DE PRESENTES</h2>
      <div className={classNames({ [estilos.modoDeVizualizacao]: true })}>
        <MdOutlineGridView className={classIconGrid} onClick={handClickGrid} />
        <AiOutlineUnorderedList className={classIconList} onClick={handClickLista} />
      </div>
      <ol className={classNames({ [estilos.corpo__grade]: grid, [estilos.corpo__lista]: lista })}>
        {listaDeCompras.map((item) => (
          <ListaItens key={item.id} {...item} open={open} setOpen={setOpen} grid={grid}
            setGrid={setGrid}
            lista={lista}
            setLista={setLista}
          />
        ))}
      </ol>
      <button className={estilos.botoes__tipo__up} onClick={topo}>
        <BsArrowUpCircleFill />
        VOLTAR AO TOPO
      </button>
    </div>
  );
}
