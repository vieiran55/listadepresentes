import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState } from "react";
import { ChangeEvent } from "react";
import estilos from "./NovoPresente.module.scss";
import classNames from "classnames";
import axios from "axios";
import Swal from "sweetalert";
import { AiOutlineCloseCircle } from "react-icons/ai";


export interface Opcoes {
  title: string;
  link: string;
  photo: string;
  status: string;
  price: number;
}

interface Props {
  showForm: boolean;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NovoPresente(props: Props) {
  const { showForm, setShowForm } = props;

  const enviarDados = async (dados: Opcoes) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/listadepresentes",
        dados
      );
      console.log(response.data);
      verificarSucesso();
      setTimeout(refresh, 2000);
    } catch (error) {
      alert("preencha os dados direito puto!");
      console.error(error);
    }
  };

  const [titulo, setTitulo] = useState("");
  const [link, setLink] = useState("");
  const [status, setStatus] = useState("");
  const [preco, setPreco] = useState(0);
  const [foto, setFoto] = useState("");

  const refresh=()=>{
    window.location.reload();
  };


  const verificarSucesso = () => {
    Swal({
      icon: "success",
      title: "Sucesso!",
      text: "Seu cadastro foi realizado com sucesso!",
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log("submetei");
    event.preventDefault();
    enviarDados({
      title: titulo,
      link: link,
      photo: foto,
      status: status,
      price: preco,
    });
    // código para enviar dados para o servidor
  };
  

  const handleTituloChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitulo(event.target.value);
  };

  const handleLinkChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLink(event.target.value);
  };

  const handleStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.value);
  };

  const handlePrecoChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPreco(parseFloat(event.target.value));
  };

  const handleFotoChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFoto(event.target.value);
  };

  return (
    <div
      className={classNames({
        [estilos.formulario__ativo]: showForm,
        [estilos.formulario__desativado]: !showForm,
      })}
    >
      <form onSubmit={handleSubmit} className={estilos.formularioConteiner}>
        <AiOutlineCloseCircle
          className={estilos.formularioClose}
          onClick={() => setShowForm(false)}
        />
        <h1 className={estilos.formularioTitulo}>ADICIONAR NOVO PRESENTE</h1>
        <label className={estilos.formularioTitulos}>
          Título:
          <input
            className={estilos.formularioInputs}
            type="text"
            value={titulo}
            onChange={handleTituloChange}
          />
        </label>
        <label className={estilos.formularioTitulos}>
          Link:
          <input
            className={estilos.formularioInputs}
            type="text"
            value={link}
            onChange={handleLinkChange}
          />
        </label>
        <label className={estilos.formularioTitulos}>
          Status:
          <input
            className={estilos.formularioInputs}
            type="text"
            value={status}
            onChange={handleStatusChange}
          />
        </label>
        <label className={estilos.formularioTitulos}>
          Preço:
          <input
            className={estilos.formularioInputs}
            type="text"
            value={preco}
            onChange={handlePrecoChange}
          />
        </label>
        <label className={estilos.formularioTitulos}>
          Foto:
          <input
            className={estilos.formularioInputs}
            type="file"
            value={foto}
            onChange={handleFotoChange}
          />
        </label>
        <Button variant="contained" type="submit">
        Enviar
        </Button>
      </form>
    </div>
  );
}
