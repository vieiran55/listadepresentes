import estilos from "./Galeria.module.scss";
import projetos from "../../dados/fotosGaleria.json";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { RxDot } from "react-icons/rx";
import { RxDotFilled } from "react-icons/rx";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Tooltip } from "@mui/material";
import {
  TbCircleNumber1,
  TbCircleNumber2,
  TbCircleNumber3,
  TbCircleNumber4,
  TbCircleNumber5,
  TbCircleNumber6,
  TbCircleNumber7,
  TbCircleNumber8,
  TbCircleNumber9,
} from "react-icons/tb";
import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { TbHomeHand } from "react-icons/tb";
import { useInView } from "react-intersection-observer";

export default function Galeria() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [animaFadeDown, setAnimaFadeDown] = useState(false);
  const [animaFadeLeft, setAnimaFadeLeft] = useState(false);

  const [ref, inView] = useInView({
    threshold: 0,
  });

  const prevSlide = () => {
    setAnimaFadeLeft(true);
    setAnimaFadeDown(true);
    setTimeout(() => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? projetos.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
      setIsLoading(false); // Desativar o indicador de carregamento
      setAnimaFadeDown(false);
      setAnimaFadeLeft(false);
    }, 500); // Tempo de espera para simular o carregamento da nova imagem
  };

  const nextSlide = () => {
    setAnimaFadeLeft(true);
    setAnimaFadeDown(true);
    setTimeout(() => {
      const isLastSlide = currentIndex === projetos.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
      setIsLoading(false); // Desativar o indicador de carregamento
      setAnimaFadeDown(false);
      setAnimaFadeLeft(false);
    }, 500); // Tempo de espera para simular o carregamento da nova imagem
  };

  const getSlideIndex = (index: number, offset: number) => {
    const totalSlides = projetos.length;
    let slideIndex = index + offset;
    if (slideIndex < 0) {
      // Se o slideIndex for menor que zero, volta para o último slide
      slideIndex = totalSlides - 1;
    } else if (slideIndex >= totalSlides) {
      // Se o slideIndex for maior ou igual ao número total de slides, volta para o primeiro slide
      slideIndex = 0;
    }

    return slideIndex;
  };

  const goToSlide = (slideIndex: number | number[]) => {
    if (Array.isArray(slideIndex)) {
      // Lidar com um array de índices
      const index = slideIndex[slideIndex.length - 1];
      setCurrentIndex(index);
    } else {
      // Lidar com um único índice
      setCurrentIndex(slideIndex);
    }
  };

  return (
    <div
      ref={ref}
      // className={estilos.projetos}
      className={`${inView ? estilos.projetos2 : estilos.projetos}`}
    >
      <div className={estilos.conteiner}>
        <div className={estilos.conteinerFotos}>
          {/* foto da esquerda */}
          {/* <div
            className={classNames({
              [estilos.image]: true,
              [estilos.primeiro]: true,
              [estilos.anima2]: animaFadeDown,
            })}
          >
            <img
              src={projetos[getSlideIndex(currentIndex, -1)].image}
              className={estilos.imageLateral}
            ></img>
          </div> */}
          {/* foto do centro */}

          <img
            style={{ position: "relative" }}
            src={projetos[currentIndex].image}
            className={classNames({
              [estilos.imagePrincipal]: true,
              [estilos.image]: true,
              [estilos.principal]: true,
              [estilos.imageContainer]: true,
            })}
          ></img>

          {/* foto da direita */}
          {/* <div
            className={classNames({
              [estilos.image]: true,
              [estilos.anima2]: animaFadeDown,
            })}
          >
            <img
              src={projetos[getSlideIndex(currentIndex, 1)].image}
              className={estilos.imageLateral}
            ></img>
          </div> */}
        </div>
        <div className={estilos.botoes}>
          <div className={estilos.botaoLeft}>
            <MdOutlineNavigateBefore className={estilos.botaoIcon} onClick={prevSlide} />
          </div>
          <div className={estilos.botaoRight}>
            <MdOutlineNavigateNext className={estilos.botaoIcon} onClick={nextSlide} />
          </div>
        </div>
        {/* Pontinhos */}
        {/* <div className={estilos.pontos}>
          {projetos.map((slide, slideIndex) => {
            let circleComponent = (
              <RxDot className={estilos.pontos__icons__unselected} />
            ); // Componente padrão
            if (slideIndex + 1 === currentIndex + 1) {
              // Verifica se é o índice correspondente ao currentIndex + 1
              circleComponent = (
                <RxDotFilled className={estilos.pontos__icons__selected} />
              );
            }

            return (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className={estilos.pontos__pontos}
              >
                {circleComponent}
              </div>
            );
          })}
        </div> */}
      </div>
    </div>
  );
}