/* eslint-disable react/no-unescaped-entities */
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import estilos from "./Atencao.module.scss";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  zIndex: "tooltip",
  textAlign: "center"
};

export default function Atencao() {
  const [open, setOpen] = React.useState(true);
  // const handleOpen = () => setOpen(false);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className={estilos.caixa}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{fontSize: 19}}>
            Sejam bem vindos à nossa lista de presentes! 🎁
          </Typography>
          <Typography className={estilos.caixa__descricao}id="modal-modal-description" sx={{ mt: 2 }}>
            Clicando em <a className={estilos.caixa__descricao__destaque}>"Quero comprar e entregar para os noivos"</a> você será redirecionado para um
            site onde poderá comprar o presente e nos entregar pessoalmente💐
            Caso queira nos presentear em dinheiro, basta clicar em <a className={estilos.caixa__descricao__destaque}>Quero
            fazer o pix para que os noivos comprem"</a>. Qualquer valor será muito
            bem utilizado 🥰 Caso já tenha escolhido o presente, 
            clique em <a className={estilos.caixa__descricao__destaque}>"Vou dar esse presente"</a> e preencha os dados para que
            possamos retirar o produto da nossa lista 💞"
          </Typography>
          <Button variant="contained" color="success" onClick={handleClose} sx={{ mt: 2 }}>Entendi</Button>
        </Box>
      </Modal>
    </div>
  );
}
