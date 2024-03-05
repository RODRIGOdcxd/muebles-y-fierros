import React from "react";
import Header from "../Templates/Header.tsx";
import Footer from "../Templates/Footer.tsx";
import Helmet from "react-helmet";
import imgPortada from "../ImgTs/pexels-pixabay-302871.jpg";
import imgArticleVideo from "../ImgTs/pexels-roman-pohorecki-35880.jpg";
import svgFlecha from "../ImgTs/bx-chevron-down.svg";
import svgFlechaPlay from "../ImgTs/bxs-right-arrow.svg";
import "../Styles/Live.css";
import "../Javascript/Live.js";

const subMenu = [
  {
    arrayB: [
      ["Live 12", "/live", "#FF764D"],
      ["All new features", "/live/newfeatures"],
      ["What is Live?", "/live/whatlive"],
      ["Max for Live", "/live/maxlive"],
      ["Learn Live", "/live/learnlive"],
      ["Integrated hardware", "/live/integratedhardware"],
      ["Compare editions", "/live/compareeditions"],
      ["Buy Now", "/shop/live", "blue"],
    ],
  },
];

export default function Live() {
  return (
    <>
      <Helmet>
        <title>Live</title>
      </Helmet>
      <Header color1="#FF764D" />
      <main className="mainLive">
        <div className="panelFrontal">
          <ul>
            {subMenu.map((menu) =>
              menu.arrayB.map((contenido) => (
                <li>
                  <a href={contenido[1]} style={{ color: contenido[2] }}>
                    {contenido[0]}
                  </a>
                </li>
              ))
            )}
          </ul>
        </div>
        <div className="divPortadaLive">
          <img
            className="imgPortadaLive"
            src={imgPortada}
            alt="imagen portada"
          />
          <div className="divTextoPortadaLive">
            <div className="divFirstTextoPortadaLive">
              <span className="spanTexto">Find</span>
              <div className="divTextoAnimado">
                <div className="divPrimarioText">
                  <div className="divYour">
                    <span className="spanTexto your">your</span>
                  </div>
                  <div className="divTwrs">
                    <span className="spanFondo thing">thing</span>
                    <span className="spanFondo way">way</span>
                    <span className="spanFondo rhythm">rhythm</span>
                    <span className="spanFondo spark">spark</span>
                  </div>
                </div>
                <span className="spanFondo yoursel">yoursel</span>
              </div>
            </div>
            <div className="divSecondTextoPortadaLive">
              <span>again and again</span>
              <span>in Ableton Live</span>
            </div>
          </div>
          <div className="divFlechaLive">
            <a href="#articleLive">
              <img
                className="imgFlecha"
                src={svgFlecha}
                alt="Flecha hacia abajo"
              />
            </a>
          </div>
        </div>
        <article id="articleLive" className="articleLive">
          <div className="divTextoArticleLive">
            <span>
              Whatever music you make, and whoever you are as a music maker,
              there’s always more to explore in Live. See how you can go further
              with Live 12.
            </span>
          </div>
          <div className="divPlayArticle">
            <img
              className="imgArticleVideo"
              src={imgArticleVideo}
              alt="imagen articulo"
            />
            <div className="divFondoArticleLVideo">
              <img
                className="imgFlechaPlay"
                src={svgFlechaPlay}
                alt="flecha video"
              />
            </div>
            <span className="spanArticleVideo">
              A look at some of the highlights of Live 12
            </span>
          </div>
          <div className="divArticleFooter">
            <div className="divArticleFooterCentrar">
              <span>Find out what’s possible in Live 12</span>
              <ul>
                <li>Jump to:</li>
                <li>Play freely with ideas</li>
                <li>Surprise yourself with sounds</li>
                <li>Work more intuitively</li>
                <li>See all new features</li>
              </ul>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
