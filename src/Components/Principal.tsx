import React from "react";
import Header from "../Templates/Header.tsx";
import Footer from "../Templates/Footer.tsx";
import imgArticle1 from "../ImgTs/pexels-orbital-studio-15396489.jpg";
import imgArticle2 from "../ImgTs/pexels-pixabay-257904.jpg";
import imgArticle3 from "../ImgTs/pexels-pixabay-270288.jpg";
import { Helmet } from "react-helmet";

/*Css*/
import "../Styles/Principal.css";
//type Props = {};

const Article = [
  {
    src: [imgArticle1, imgArticle2, imgArticle3],
    alt: ["imagen articulo 1", "imagen articulo 2", "imagen articulo 3"],
    bg: ["#D5B3FF", "#FED134", "#FED134"],
    etiqueta: ["News", "Artists", "Artists"],
    description: [
      "Ableton Live 12 – disponible el 5 de marzo",
      "Bored Lord: Rhythmatic Movement In Unison With Others",
      "Joining Forces: un ctrl's Fusion of Dance, Visuals, and Sound",
    ],
  },
  {
    src: [imgArticle1, imgArticle2, imgArticle3],
    alt: ["imagen articulo 1", "imagen articulo 2", "imagen articulo 3"],
    bg: ["#D5B3FF", "#FED134", "#FED134"],
    etiqueta: ["News", "Artists", "Artists"],
    description: [
      "Ableton Live 12 – disponible el 5 de marzo",
      "Bored Lord: Rhythmatic Movement In Unison With Others",
      "Joining Forces: un ctrl's Fusion of Dance, Visuals, and Sound",
    ],
  },
  {
    src: [imgArticle1, imgArticle2, imgArticle3],
    alt: ["imagen articulo 1", "imagen articulo 2", "imagen articulo 3"],
    bg: ["#D5B3FF", "#FED134", "#FED134"],
    etiqueta: ["News", "Artists", "Artists"],
    description: [
      "Ableton Live 12 – disponible el 5 de marzo",
      "Bored Lord: Rhythmatic Movement In Unison With Others",
      "Joining Forces: un ctrl's Fusion of Dance, Visuals, and Sound",
    ],
  },
];

const menuArticle = [
  {
    menuArti: [
      "All Posts",
      "Artistas",
      "Noticias",
      "Descargas",
      "Tutoriales",
      "Vídeos",
      "Loop",
    ],
    ulrArti: [
      "/blog",
      "/blog/artistas",
      "/blog/noticias",
      "/blog/descargas",
      "/blog/tutoriales",
      "/blog/videos",
      "/blog/loop",
    ],
  },
];
export default function Principal(/*{}: Props*/) {
  return (
    <>
      <Helmet>
        <title>Inicio</title>
      </Helmet>
      <Header />
      <main>
        <nav>
          <a className="aTextoPortada" href="/Tienda">
            <div className="divTextoPortada">
              <span>Solo Hasta el lanzamiento de Live 12 el 5 de marzo</span>
              <span>
                Ahorra 20% en Live 11 y <br /> actualiza a Live 12 gratis
              </span>
              <a href="/Tienda">Comprar ahora{" >"}</a>
            </div>
          </a>
        </nav>
        <article className="articlePrincipal">
          {Article.map((articulo, index) => (
            <div key={index} className="divPanel">
              <div className="divCabeza">
                <div className="divTexto">
                  <span>The latest from Ableton</span>
                </div>
                <div className="divTexto">
                  <ul className="ulTextoMenu">
                    {menuArticle.map((contenido) =>
                      contenido.menuArti.map((item, i) => (
                        <li key={i} className="liTextoMenu">
                          <a key={i} href={contenido.ulrArti[i]}>
                            {item}
                          </a>
                        </li>
                      ))
                    )}
                  </ul>
                </div>
              </div>
              <div className="divPaneles">
                {articulo.src.map((imagenSrc, i) => (
                  <div key={i} className="divPanelImg">
                    <div>
                      <img
                        className="imgPanel"
                        src={imagenSrc}
                        alt={articulo.alt[i]}
                      />
                    </div>
                    <div style={{ marginTop: "0.5vh" }}>
                      <div className="divInfo">
                        <span
                          className="spanEtiqueta"
                          style={{ backgroundColor: articulo.bg[i] }}
                        >
                          {articulo.etiqueta[i]}
                        </span>
                      </div>
                      <div className="divInfo">
                        <span className="spanDescription">
                          {articulo.description[i]}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </article>
        <section className="sectionFooter">
          <ul>
            <li>More:</li>
            <a href="#">
              <li>All posts</li>
            </a>
            <a href="#">
              <li>Artists</li>
            </a>
            <a href="#">
              <li>News</li>
            </a>
            <a href="#">
              <li>Downloads</li>
            </a>
            <a href="#">
              <li>Tutoriales</li>
            </a>
            <a href="#">
              <li>Videos</li>
            </a>
            <a href="#">
              <li>Loop</li>
            </a>
            <a href="#">
              <li>One Thing</li>
            </a>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
