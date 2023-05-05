import Repositorio from "../../components/Repositorio";
import { IOpcoes } from "../../interfaces/IOpcoes";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import estilos from "./GerenciarLista.module.scss";
import { SetStateAction, useMemo, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import PrintIcon from "@mui/icons-material/Print";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { title } from "process";
import axios from "axios";
import NovoPresente from "./NovoPresente";
import DeletePresente from "./DeletePresente";

interface Props {
  repositorio: IOpcoes[];
  setRepositorio: React.Dispatch<React.SetStateAction<IOpcoes[]>>;
}

export default function GerenciarLista(props: Props) {
  const { repositorio, setRepositorio } = props;

  const [tituloForm, setTituloForm] = useState("");
  const [linkForm, setLinkForm] = useState("");
  const [statusForm, setStatusForm] = useState("");
  const [precoForm, setPrecoForm] = useState(0);
  const [fotoForm, setFotoForm] = useState("");
  const [idForm, setIdForm] = useState(0);

  function limitarTexto(texto: string, maxChars: number): string {
    if (texto.length > maxChars) {
      texto = texto.substring(0, maxChars) + "...";
    }
    return texto;
  }

  const deletarDados = async (id: number) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/listadepresentes/${id}`
      );
      console.log(response.data);
      alert("deletado");
      window.location.reload();
    } catch (error) {
      alert("Não encontrado");
      console.error(error);
    }
  };

  const [showForm, setShowForm] = useState(false);
  const [showFormDelete, setShowFormDelete] = useState(false);

  return (
    <>
      <Repositorio repositorio={repositorio} setRepositorio={setRepositorio} />
      <div className={estilos.conteiner}>
        {showForm && (
          <NovoPresente showForm={showForm} setShowForm={setShowForm} />
        )}
        {showFormDelete && (
          <DeletePresente
            showFormDelete={showFormDelete}
            setShowFormDelete={setShowFormDelete}
            title={tituloForm}
            link={linkForm}
            photo={fotoForm}
            status={statusForm}
            id={idForm}
          />
        )}
        LISTA DE PRESENTES
        <div className={estilos.botaoAdicionar}>
          <Button variant="contained" onClick={() => setShowForm(true)}>
            Adicionar Presente
          </Button>
        </div>
        <TableContainer style={{ width: "100%", border: "1px solid #ddd" }}>
          <Table
            size="medium"
            stickyHeader
            padding="none"
            component={Paper}
            aria-label="Exemplo de tabela"
          >
            <TableHead style={{ border: "1px solid #ddd" }}>
              <TableRow>
                <TableCell padding="none" sx={{ width: 50 }}>
                  ID
                </TableCell>
                <TableCell padding="none" sx={{ width: 300 }}>
                  Titulo
                </TableCell>
                <TableCell padding="none" sx={{ width: 300 }}>
                  Link
                </TableCell>
                <TableCell padding="none" sx={{ width: 300 }}>
                  Foto
                </TableCell>
                <TableCell padding="none" sx={{ width: 130 }}>
                  Status
                </TableCell>
                <TableCell padding="none" sx={{ width: 130 }}>
                  Preço
                </TableCell>
                <TableCell padding="none" sx={{ width: 130 }}>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {repositorio.map((item, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell padding="none">{item._id} </TableCell>
                  <TableCell padding="none">
                    {limitarTexto(item.title, 50)}{" "}
                  </TableCell>
                  <TableCell padding="none">
                    {limitarTexto(item.link, 50)}
                  </TableCell>
                  <TableCell padding="none">
                    {limitarTexto(item.photo, 50)}{" "}
                  </TableCell>
                  <TableCell padding="none"> {item.status}</TableCell>
                  <TableCell padding="none"> {item.price}</TableCell>
                  <TableCell padding="none">
                    {" "}
                    <Stack spacing={1} sx={{ width: 1, py: 1 }}>
                      <div className={estilos.botoesLista}>
                        <Button
                          variant="outlined"
                          size="small"
                          startIcon={<EditIcon />}
                          onClick={() => {
                            console.log(item._id);
                          }}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="outlined"
                          size="small"
                          startIcon={<DeleteIcon />}
                          // onClick={() => deletarDados(item._id)}
                          onClick={() => {
                            setShowFormDelete(true);
                            setTituloForm(item.title);
                            setLinkForm(item.link);
                            setStatusForm(item.status);
                            setPrecoForm(item.price);
                            setFotoForm(item.photo);
                            setIdForm(item._id);
                          }}
                        >
                          Delete
                        </Button>
                      </div>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
