import foto from "../../images/FotoPerfilClean.png";
import wave from "../../images/waveWhite.svg";
import estilos from "./Home1.module.scss";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import aliancasouro from "../../images/aliancasOuro.png";
import fotoCasal1 from "../../images/Selecionadas/IMG1.jpg";
import fotoCasal2 from "../../images/Selecionadas/IMG2.jpg";
import fotoCasal3 from "../../images/Selecionadas/IMG3.jpg";
import fotoCasal4 from "../../images/Selecionadas/IMG4.jpg";
import fotoCasal5 from "../../images/Selecionadas/IMG5.jpg";
import fotoCasal6 from "../../images/Selecionadas/IMG6.jpg";
import fotoCasal7 from "../../images/Selecionadas/IMG7.jpg";
import fotoCasal8 from "../../images/Selecionadas/IMG8.jpg";
import fotoCasal9 from "../../images/Selecionadas/IMG9.jpg";
import fotoCasal10 from "../../images/Selecionadas/IMG10.jpg";
import fotoCasal11 from "../../images/Selecionadas/IMG11.jpg";
import fotoCasal12 from "../../images/Selecionadas/IMG12.jpg";
import fotoCasal13 from "../../images/Selecionadas/IMG13.jpg";
import fotoCasal14 from "../../images/Selecionadas/IMG14.jpg";
import fotoCasal15 from "../../images/Selecionadas/IMG15.jpg";
import fotoCasal16 from "../../images/Selecionadas/IMG16.jpg";
import fotoCasal17 from "../../images/Selecionadas/IMG17.jpg";
import fotoCasal18 from "../../images/Selecionadas/IMG18.jpg";
import fotoCasal19 from "../../images/Selecionadas/IMG19.jpg";
import fotoCasal20 from "../../images/Selecionadas/IMG20.jpg";
import fotoCasal21 from "../../images/Selecionadas/IMG21.jpg";

import { useInView } from "react-intersection-observer";
import NavBar from "../../components/NavBar";

export default function Home() {
  const navigate = useNavigate();
  const linkPresenca = "https://form.respondi.app/L86LWmDr";

  const [ref, inView] = useInView({
    threshold: 0,
  });

  const [ref2, inView2] = useInView({
    threshold: 0,
  });

  const topo = () => {
    navigate("/lista");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const topo2 = () => {
    navigate("/presenca");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className={estilos.central}>
        <div className={estilos.navbarhome}>
          <NavBar />
        </div>
        <div className={estilos.body}>
          <div className={estilos.entrada}>
            <div className={estilos.entrada__casalConteiner}>
              <div className={estilos.entrada__casal}>
                <h1 className={estilos.entrada__casal__titulo}>
                  Gabriela e Antônio
                </h1>
              </div>
              <div className={estilos.central__cartaoBotoesDesktop}>
                <div className={estilos.central__cartaoBotoesDesktop__confirma}>
                  <Button
                    variant="contained"
                    onClick={() => navigate("/presenca")}
                  >
                    Confirmar Presenca
                  </Button>
                </div>
                <div className={estilos.central__cartaoBotoesDesktop__Lista}>
                  <Button
                    variant="contained"
                    onClick={() => navigate("/lista")}
                  >
                    Lista de Presentes
                  </Button>
                </div>
              </div>
            </div>
            <div className={estilos.entrada__foto}>
              {/* <img
                src={fotoCasal4}
                alt={fotoCasal4}
                className={estilos.entrada__foto__imagem}
              /> */}
              <div className={estilos.heart}></div>
              <div className={estilos.entrada__cartaoInferior}>
                <h2 className={estilos.entrada__cartaoInferior__text}>
                  30|Jul|23
                </h2>
              </div>
              <div className={estilos.entrada__flor4}></div>
              <div className={estilos.tituloCoracao__conteiner}>
                <h1 className={estilos.tituloCoracao__titulos}>Ao seu lado, encontrei o amor que sempre sonhei...</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gold">
        <div id="sobre" className={estilos.sobre}>
          <h2 className={estilos.sobre__titulo}>
            Sua presença é muito importante para nós!
          </h2>
          <div className={estilos.sobre__conteinerTextos}>
            <p className={estilos.sobre__texto}>
              Para uma melhor organização, solicitamos que confirme sua presença
              clicando no link abaixo até o dia
              <a className={estilos.sobre__destaque}> XX/XX/XX.</a>
            </p>
            <Button variant="contained" onClick={topo2}>
              Confirmar Presenca
            </Button>
            <p className={estilos.sobre__texto}>
              Ressaltamos a importância de confirmar sua presença, bem como a
              presença dos membros de sua família que irão acompanhá-lo no dia
              do evento, para que possamos ter um controle adequado. Caso não
              seja possível comparecer, compreendemos e esperamos que possamos
              marcar um encontro em breve.
            </p>
            <p className={estilos.sobre__texto}>
              Observação: A ausência de confirmação até a data estipulada
              implicará no entendimento de que não comparecerá e resultará na
              exclusão de seu nome da lista.
            </p>
            <p className={estilos.sobre__texto}>
              Além disso, criamos uma lista de presentes com muito amor e
              cuidado, contendo itens que nos ajudarão a iniciar nossa nova
              jornada juntos. Se desejar nos presentear, você pode acessar nossa
              lista de presentes no link abaixo:
            </p>
            <Button variant="contained" onClick={topo}>
                Lista de Presentes
            </Button>
            <p className={estilos.sobre__textoFinal}>Com carinho,</p>
            <p className={estilos.sobre__textoFinal}>
              <a className={estilos.sobre__destaque}>GABRIELA E ANTÔNIO</a>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gold">
        <div id="momentos" className={estilos.galeria}>
          <h1 className={estilos.galeria__titulo}>
            O amor é o laço que nos une para sempre.
          </h1>
          <div className={estilos.galerias}>
            <div className={estilos.galeria__fotos}>
              <div>
                <img
                  src={fotoCasal2}
                  alt={fotoCasal2}
                  className={estilos.galeria__fotos__images}
                />
              </div>
              <div>
                <img
                  src={fotoCasal15}
                  alt={fotoCasal15}
                  className={estilos.galeria__fotos__images}
                />
              </div>
              <div>
                <img
                  src={fotoCasal13}
                  alt={fotoCasal13}
                  className={estilos.galeria__fotos__images}
                />
              </div>
              <div>
                <img
                  src={fotoCasal10}
                  alt={fotoCasal10}
                  className={estilos.galeria__fotos__images}
                />
              </div>
            </div>
            <div className={estilos.galeria__fotos2}>
              <div>
                <img
                  src={fotoCasal11}
                  alt={fotoCasal11}
                  className={estilos.galeria__fotos__images}
                />
              </div>
              <div>
                <img
                  src={fotoCasal6}
                  alt={fotoCasal6}
                  className={estilos.galeria__fotos__images}
                />
              </div>
              <div>
                <img
                  src={fotoCasal9}
                  alt={fotoCasal9}
                  className={estilos.galeria__fotos__images9}
                />
              </div>
              <div>
                <img
                  src={fotoCasal14}
                  alt={fotoCasal14}
                  className={estilos.galeria__fotos__images}
                />
              </div>
            </div>
            <div className={estilos.galeria__fotos3}>
              <div>
                <img
                  src={fotoCasal21}
                  alt={fotoCasal21}
                  className={estilos.galeria__fotos__images21}
                />
              </div>
              <div>
                <img
                  src={fotoCasal17}
                  alt={fotoCasal17}
                  className={estilos.galeria__fotos__images}
                />
              </div>
              <div>
                <img
                  src={fotoCasal20}
                  alt={fotoCasal20}
                  className={estilos.galeria__fotos__images20}
                />
              </div>
              <div>
                <img
                  src={fotoCasal19}
                  alt={fotoCasal19}
                  className={estilos.galeria__fotos__images}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
