import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
} from "@mui/material";
import estilos from "./PresenteEscolhido.module.scss";
import { useState } from "react";
import axios from "axios";
import { AiOutlineClose } from "react-icons/ai";
import Swal from "sweetalert";

interface FormData {
  nome: string;
  telefone: number;
  email: string;
  presente: string;
}

export interface Opcoes {
  status: string;
}

interface Props {
  nomePresenteEscolhido: string;
  setNomePresenteEscolhido: React.Dispatch<React.SetStateAction<string>>;
  showPresenteEscolhido: boolean;
  setShowPresenteEscolhido: React.Dispatch<React.SetStateAction<boolean>>;
  idPresenteEscolhido: number;
  setIdPresenteEscolhido: React.Dispatch<React.SetStateAction<number>>;
}

export default function PresenteEscolhido(props: Props) {
  const {
    nomePresenteEscolhido,
    setNomePresenteEscolhido,
    showPresenteEscolhido,
    setShowPresenteEscolhido,
    idPresenteEscolhido,
    setIdPresenteEscolhido,
  } = props;

  const [formData, setFormData] = useState<FormData>({
    nome: "",
    telefone: 0,
    email: "",
    presente: "",
  });

  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [presente, setPresente] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // console.log("Valores capturados:", titulo, link, status, preco, foto);
    event.preventDefault();
    enviarDados({
      nome: nome,
      telefone: parseFloat(telefone),
      email: email,
      presente: nomePresenteEscolhido,
    });
    // código para enviar dados para o servidor
    atualizarDados(idPresenteEscolhido,{
      status: "indisponivel"
    });
  };

  const enviarDados = async (dados: FormData) => {
    try {
      const response = await axios.post(
        "http://172.20.100.249:5000/escolhidos",
        dados
      );
      console.log(response.data);
      Swal({
        icon: "success",
        title: "Sucesso!",
        text: "Seu cadastro foi realizado com sucesso!",
      });
      setTimeout(refresh, 4000);
      // verificarSucesso();
      // setTimeout(refresh, 2000);
    } catch (error) {
      console.error(error);
    }
  };

  
  const refresh = () => {
    window.location.reload();
  };

  const atualizarDados = async (id: number, dados: Opcoes) => {
    try {
      const response = await axios.put(
        `http://172.20.100.249:5000/listadepresentes/${id}`,
        dados
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form className={estilos.formulario} onSubmit={handleSubmit}>
        <div className={estilos.conteiner}>
          <AiOutlineClose
            className={estilos.close}
            onClick={() => setShowPresenteEscolhido(false)}
          />
          <h1 className={estilos.titulo}>INSIRA SEUS DADOS </h1>
          <TextField
            label="Digite seu Nome"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Digite seu Telefone"
            value={telefone}
            onChange={(event) => setTelefone(event.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Digite seu Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            fullWidth
            type="email"
            margin="normal"
          />
          <TextField
            label="Presente escolhido"
            value={nomePresenteEscolhido}
            onChange={(event) => setPresente(event.target.value)}
            fullWidth
            margin="normal"
            disabled
          />
          <Button type="submit" variant="contained" color="primary">
            Enviar
          </Button>
        </div>
      </form>
    </>
  );
}
