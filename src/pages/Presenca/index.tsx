import axios from "axios";
import { useEffect, useState } from "react";
import estilos from "./Presenca.module.scss";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, MenuItem } from "@mui/material";

interface FormValues {
  nome: string;
  qtd: number;
  pessoas: string[];
}

export default function Presenca() {
  const [formValues, setFormValues] = useState<FormValues>({
    nome: "",
    qtd: 0,
    pessoas: [],
  });
  const [validaQtd, setValidaQtd] = useState(false);
  const [simNao, setSimNao] = useState("");

  const enviarDados = async (dados: FormValues) => {
    try {
      const response = await axios.post(
        "http://172.22.51.160:5000/listadepresencas",
        dados
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePessoaChange = (index: number, value: string) => {
    setFormValues((prevState) => {
      const pessoas = [...prevState.pessoas];
      pessoas[index] = value;

      return {
        ...prevState,
        pessoas,
      };
    });
  };

  const handleAddPessoa = () => {
    setFormValues((prevState) => ({
      ...prevState,
      pessoas: [...prevState.pessoas, ""],
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    enviarDados(formValues);
    console.log(formValues);
  };

  useEffect(() => {
    const novaListaDePessoas = new Array(formValues.qtd).fill("");
    setFormValues((prevState) => ({
      ...prevState,
      pessoas: novaListaDePessoas,
    }));
  }, [formValues.qtd]);

  const { nome, qtd, pessoas } = formValues;

  // const validandoQtd = () => {
  //   if(simNao == "sim"){
  //     setValidaQtd(true);
  //   } else {
  //     setValidaQtd(false);
  //   }
  // };

  useEffect(() => {
    if (simNao === "sim") {
      setValidaQtd(true);
    } else {
      setValidaQtd(false);
    }
  }, [simNao]);

  const opcoes = [
    {
      value: "sim",
      label: "Sim",
    },
    {
      value: "não",
      label: "Não",
    },
  ];

  return (
    <div className={estilos.conteiner}>
      <form onSubmit={handleSubmit} className={estilos.formulario}>
        {/* <TextField
          label="Nome"
          variant="outlined"
          sx={{ width: "90%" }}
          value={nome}
          onChange={(e) => handleChange(e.target)}
        /> */}
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={nome}
          onChange={handleChange}
        />
        <TextField
          id="outlined-select-currency"
          select
          label="Alguém mais vai com você?"
          sx={{ width: "90%" }}
        >
          {opcoes.map((option) => (
            <MenuItem
              key={option.value}
              onClick={() => setSimNao(option.value)}
              value={option.value}
            >
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        {validaQtd && (
          <input
            type="number"
            id="qtd"
            name="qtd"
            value={qtd}
            onChange={handleChange}
          />
        )}

        {validaQtd &&
          Array.from({ length: qtd }).map((_, index) => (
            <div key={index}>
              <label htmlFor={`pessoa-${index}`}>
                Qual o nome da {index + 1}ª Pessoa
              </label>
              <input
                type="text"
                id={`pessoa-${index}`}
                name={`pessoa-${index}`}
                value={pessoas[index] || ""}
                onChange={(e) => handlePessoaChange(index, e.target.value)}
              />
            </div>
          ))}

        {validaQtd && pessoas.length < qtd && (
          <button type="button" onClick={handleAddPessoa}>
            Adicionar Pessoa
          </button>
        )}
        <button type="submit">Enviar</button>
        <Button
          variant="contained"
          className={estilos.corpo__cartaoBotoes__Lista}
          type="submit"
        >
          CONFIRMAR PRESENÇA
        </Button>
      </form>
    </div>
  );
}
