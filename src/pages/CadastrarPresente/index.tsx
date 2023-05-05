import axios from "axios";
import { IOpcoes } from "../../interfaces/IOpcoes";
import { useState } from "react";
import estilos from "./CadastrarPresente.module.scss";
import Swal from "sweetalert";

export interface OpcoesLista {
  title: string;
  link: string;
  photo: string;
  status: string;
  price: number;
}

export default function CadastrarPresente() {
  
  const enviarDados = async (dados: OpcoesLista) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/listadepresentes",
        dados
      );
      console.log(response.data);
      verificarSucesso();
      window.location.reload();
    } catch (error) {
      alert("preencha os dados direito puto!");
      console.error(error);
    }
  };

  const [titulo, setTitulo] = useState("");
  const [link, setLink] = useState("");
  const [foto, setFoto] = useState("");
  const [status, setStatus] = useState("");
  const [preco, setPreco] = useState(0);

  const verificarSucesso = () => {
    Swal({
      icon: "success",
      title: "Sucesso!",
      text: "Seu cadastro foi realizado com sucesso!",
    });
  };

  return (
    <div className={estilos.conteiner}>
      <form
        className={estilos.formulario}
        onSubmit={(event) => {
          event.preventDefault();
          enviarDados({
            title: titulo,
            link: link,
            photo: foto,
            status: status,
            price: preco,
          });
        }}
      >
        <input
          type="text"
          name="titulo"
          placeholder="Titulo"
          value={titulo}
          required={true}
          onChange={(event) => setTitulo(event.target.value)}
        />
        <input
          type="text"
          name="link"
          placeholder="Link"
          value={link}
          required={true}
          onChange={(event) => setLink(event.target.value)}
        />
        <input
          type="text"
          name="photo"
          placeholder="Foto"
          value={foto}
          required={true}
          onChange={(event) => setFoto(event.target.value)}
        />
        <input
          type="text"
          name="status"
          placeholder="Status"
          value={status}
          required={true}
          onChange={(event) => setStatus(event.target.value)}
        />
        <input
          type="text"
          name="price"
          placeholder="Preço"
          value={preco}
          required={true}
          onChange={(event) => setPreco(parseFloat(event.target.value))}
        />
        <button type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
}
