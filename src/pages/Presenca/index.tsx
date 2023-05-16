import axios from "axios";
import { useEffect, useState } from "react";
import estilos from "./Presenca.module.scss";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { Select } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert";

interface FormValues {
  nome: string;
  qtd: number;
  pessoas: string[];
}

interface Convidado {
  _id: string;
  nome: string;
  qtd: number;
  pessoas: string[];
  confirmado: boolean;
  quantidadePessoasSelecionadas: number;
}

export default function Presenca() {
  const [convidados, setConvidados] = useState<Convidado[]>([]);
  const [nomeSelecionado, setNomeSelecionado] = useState("");
  const [convidadoSelecionado, setConvidadoSelecionado] =
    useState<Convidado | null>(null);
  const [mostrarOpcoes, setMostrarOpcoes] = useState(false);
  const [qtdPessoasAdicionais, setQtdPessoasAdicionais] = useState(0);
  const [nomesPessoasAdicionais, setNomesPessoasAdicionais] = useState<
    string[]
  >([]);
  const [convidadoIdSelecionado, setConvidadoIdSelecionado] = useState("");
  const [confirmarPresenca, setConfirmarPresenca] = useState(false);
  const [campoVazio, setCampoVazio] = useState(true);
  const isNaoSelecionado = qtdPessoasAdicionais === 0;
  const isConfirmado = convidadoSelecionado?.confirmado || false;

  useEffect(() => {
    axios
      .get<Convidado[]>("http://172.20.100.249:5000/convidados")
      .then((resposta) => {
        setConvidados(resposta.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);

  const handleConfirmation = () => {
    if (convidadoIdSelecionado && convidadoSelecionado) {
      const updatedConvidado = {
        nome: convidadoSelecionado.nome,
        qtd: nomesPessoasAdicionais.length + 1,
        confirmado: true,
        pessoas: [convidadoSelecionado.pessoas[0], ...nomesPessoasAdicionais],
      };

      axios
        .put(
          `http://172.20.100.249:5000/convidados/${convidadoIdSelecionado}`,
          updatedConvidado
        )
        .then((response) => {
          verificarSucesso();
          setTimeout(refresh, 4000);
          console.log("Presença confirmada:", response.data);
        })
        .catch((error) => {
          console.error("Erro ao confirmar presença:", error);
        });
    }
  };

  const navigate = useNavigate();

  const refresh = () => {
    navigate("/");
  };
  const verificarSucesso = () => {
    Swal({
      icon: "success",
      title: "Sucesso!",
      text: "Sua presença foi confirmada com sucesso!",
    });
  };

  const handleNameSelect = (event: SelectChangeEvent<string>) => {
    const selectedName = event.target.value;
    setNomeSelecionado(selectedName);

    const selectedGuest =
      convidados.find((convidado) => convidado.nome === selectedName) || null;
    setConvidadoSelecionado(selectedGuest);

    if (selectedGuest) {
      setConvidadoIdSelecionado(selectedGuest._id);
      setMostrarOpcoes(true);
    } else {
      setConvidadoIdSelecionado("");
      setMostrarOpcoes(false);
    }
  };

  const handleChangeNome = (index: number, value: string) => {
    const nomesAtualizados = [...nomesPessoasAdicionais];
    nomesAtualizados[index] = value;
    setNomesPessoasAdicionais(nomesAtualizados);

    verificarCamposVazios();
    const algumCampoVazio = nomesAtualizados.some((nome) => nome === "");
    setCampoVazio(algumCampoVazio);
  };

  const handleChangeQtdPessoasAdicionais = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedValue = Number(event.target.value);
    setQtdPessoasAdicionais(selectedValue);
    setNomesPessoasAdicionais(
      nomesPessoasAdicionais.slice(0, selectedValue - 1)
    );
  };

  const verificarCamposVazios = () => {
    const algumCampoVazio = nomesPessoasAdicionais.some((nome) => nome === "");
    setCampoVazio(algumCampoVazio);
  };

  return (
    <div className={estilos.formulario}>
      <h1 className={estilos.formulario__titulo}>Lista de Convidados</h1>
      <FormControl sx={{ width: "300px", margin: "10px" }}>
        <InputLabel id="demo-simple-select-autowidth-label">
          Selecione seu nome
        </InputLabel>
        <Select
          label="Selecione seu nome"
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth-label"
          value={nomeSelecionado}
          onChange={handleNameSelect}
        >
          <MenuItem value="">Selecione...</MenuItem>
          {convidados.map((convidado) => (
            <MenuItem key={convidado._id} value={convidado.nome}>
              {convidado.nome}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {mostrarOpcoes && convidadoSelecionado && !isConfirmado && (
        <div className={estilos.formulario__opcoes}>
          <TextField
            id="outlined-select-currency"
            select
            label="Alguém mais vai com você?"
            sx={{ width: "300px", margin: "10px" }}
            value={qtdPessoasAdicionais}
            onChange={handleChangeQtdPessoasAdicionais}
          >
            <MenuItem value={0}>Não</MenuItem>
            <MenuItem value={2}>Sim, 1 pessoa</MenuItem>
            <MenuItem value={3}>Sim, 2 pessoas</MenuItem>
            <MenuItem value={4}>Sim, 3 pessoas</MenuItem>
          </TextField>
          {qtdPessoasAdicionais > 0 && (
            <div className={estilos.formulario__opcoes}>
              <TextField
                id="nome-pessoa-1"
                label="Nome da 1ª pessoa"
                value={convidadoSelecionado?.pessoas[0] || ""}
                disabled
                sx={{ width: "300px", margin: "10px" }}
              />
              {[...Array(qtdPessoasAdicionais - 1)].map((_, index) => (
                <TextField
                  key={index}
                  id={`nome-pessoa-${index + 2}`}
                  label={`Nome da ${index + 2}ª pessoa`}
                  value={nomesPessoasAdicionais[index] || ""}
                  onChange={(event) =>
                    handleChangeNome(index, event.target.value)
                  }
                  sx={{ width: "300px", margin: "10px" }}
                />
              ))}
            </div>
          )}

          <Button
            variant="contained"
            sx={{ margin: "10px" }}
            onClick={handleConfirmation}
            disabled={campoVazio && !isNaoSelecionado}
          >
            Confirmar Presença
          </Button>
        </div>
      )}

      {isConfirmado && (
        <div className={estilos.presenca}>
          <p>Você já confirmou sua presença!</p>
          <Button
            variant="contained"
            sx={{ margin: "50px" }}
            onClick={() => navigate("/")}
          >
            Voltar a Pagina Inicial
          </Button>
        </div>
      )}
    </div>
  );
}
