import estilos from "./Galeria.module.scss";
import fotos from "../../dados/GoogleFotos.json";
import { useState } from "react";
import ImageGallery from "react-image-gallery";

export default function Galeria() {

  const images = [
    {
      original: "https://i.imgur.com/fD8wtTj.jpg",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];


  return (
    <>
      <ImageGallery items={fotos} />
    </>
  );
}