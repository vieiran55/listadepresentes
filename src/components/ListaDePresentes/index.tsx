import estilos from "./ListaDePresentes.module.scss";
import listaDeCompras from "../../dados/listadepresentes.json";
import ListaItens from "./ListaItens";
import classNames from "classnames";
import { useEffect, useState } from "react";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  busca: string;
  setBusca: React.Dispatch<React.SetStateAction<string>>;
  gridCss: boolean;
  setGridCss: React.Dispatch<React.SetStateAction<boolean>>;
  listaCss: boolean;
  setListaCss: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ListaDePresentes(props: Props) {
  const {
    open,
    setOpen,
    busca,
    setBusca,
    gridCss,
    setGridCss,
    listaCss,
    setListaCss,
  } = props;

  const [lista, setLista] = useState(listaDeCompras);
  const [showLista, setShowLista] = useState(false);
  const [showError, setShowError] = useState(false);

  function testaBusca(title: string) {
    const regex = new RegExp(busca, "i");
    return regex.test(title);
  }

  useEffect(() => {
    const novaLista = listaDeCompras.filter(
      (item) => testaBusca(item.title));
    if(novaLista.length > 0 ){
      setLista(novaLista);
      setShowLista(true);
      setShowError(false);
    }else{
      setShowLista(false);
      setShowError(true);
    }
  }, [busca]);

  return (
    <div
      className={classNames({
        [estilos.corpo__grade]: gridCss,
        [estilos.corpo__lista]: listaCss,
      })}
    >
      {showLista && lista.map((item) => (
        <ListaItens
          key={item.id}
          {...item}
          open={open}
          setOpen={setOpen}
          gridCss={gridCss}
          setGridCss={setGridCss}
          listaCss={listaCss}
          setListaCss={setListaCss}
        />
      ))}
      {showError &&
        <div>
          Item não encontrado.
        </div>
      }
    </div>
  );
}
