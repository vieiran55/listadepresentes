import foto from "../../images/FotoPerfilClean.png";
import wave from "../../images/waveWhite.svg";
import estilos from "./Home1.module.scss";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";


import fotoCasalDesenho from "../../images/casalDesenho.png";

import CircularProgress from "@mui/joy/CircularProgress";

import { useInView } from "react-intersection-observer";
import NavBar from "../../components/NavBar";
import { useEffect, useState } from "react";
import Galeria from "../../components/Galeria";

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
  const [carregando, setCarregando] = useState(true);

  const Carregando = () => {
    setCarregando(false);
  };

  useEffect(() => {
    setTimeout(Carregando, 2500);
  }, []);

  return (
    <>
      {carregando && (
        <div className={estilos.carregando}>
          <div className={estilos.carregando__desenho}>
            <img className={estilos.carregando__desenho__imagem} src={fotoCasalDesenho} alt="" />
          </div>
          <div className={estilos.carregando__titulos}>
            <div className={estilos.entrada__casal}>
              <h1 className={estilos.entrada__casal__titulo}>
                Gabriela e Antônio
              </h1>
            </div>
            <div className={estilos.loadingBar}>
              <div className={estilos.loadingBarFill}></div>
            </div>
          </div>
        </div>
      )}
      {!carregando && (
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
                    <div
                      className={estilos.central__cartaoBotoesDesktop__confirma}
                    >
                      <Button
                        variant="contained"
                        onClick={() => navigate("/presenca")}
                      >
                        Confirmar Presenca
                      </Button>
                    </div>
                    <div
                      className={estilos.central__cartaoBotoesDesktop__Lista}
                    >
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
                  <div className={estilos.entrada__flor4}></div>
                  <div className={estilos.tituloCoracao__conteiner}>
                    <h1 className={estilos.tituloCoracao__titulos}>
                      {"Dissemos 'sim' ao próximo capítulo de nossa história."}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={estilos.sobre}>
            <Galeria />
          </div>

          {/* <div id="sobre" className={estilos.sobre}>
            <h2 className={estilos.sobre__titulo}>
              A Cerimônia de Casamento: Celebrando o Amor e a União
            </h2>
            <div className={estilos.sobre__conteinerTextos}>
              <p className={estilos.sobre__texto}>
                É com grande alegria que anunciamos a realização da nossa
                cerimônia de casamento! No dia{" "}
                <a className={estilos.sobre__destaque}> 17 de Julho</a>, daremos
                um importante passo em nossas vidas ao oficializar nossa união
                no casamento civil. Gostaríamos de compartilhar esse momento
                especial com todos aqueles que nos são queridos, mas, devido ao
                número limitado de pessoas permitidas no cartório, não poderemos
                receber todos os convidados pessoalmente.
              </p>
              <p className={estilos.sobre__texto}>
                No entanto, para celebrar essa ocasião significativa,
                organizaremos um almoço de comemoração no dia{" "}
                <a className={estilos.sobre__destaque}> 30 de Julho.</a> Será
                uma oportunidade de nos reunirmos e celebrarmos juntos a nossa
                felicidade. Gostaríamos muito de ter você presente nesse momento
                de alegria e amor.
              </p>
              <p className={estilos.sobre__texto}>
                Para facilitar o planejamento do evento e garantir que todos
                sejam acomodados adequadamente, pedimos a gentileza de confirmar
                sua presença através do link abaixo até o dia{" "}
                <a className={estilos.sobre__destaque}> 24 de Julho.</a>
              </p>
              <Button variant="contained" onClick={topo2}>
                Confirmar Presenca
              </Button>
              <p className={estilos.sobre__texto}>
                Além disso, criamos uma lista de presentes com muito amor e
                cuidado, contendo itens que nos ajudarão a iniciar nossa nova
                jornada juntos. Se desejar nos presentear, você pode acessar
                nossa lista de presentes no link abaixo:
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
          </div> */}
        </>
      )}
    </>
  );
}


