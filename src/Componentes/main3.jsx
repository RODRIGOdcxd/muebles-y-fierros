import "../Estilos/main3.css";
import restaurante1 from "../Img/mueble-restaurantewebp.webp";
import restaurante2 from "../Img/muebles-restaurante2.jpg";
import restaurante3 from "../Img/muebles-restaurante3.jpg";
import flechaDerecha from "../Img/flecha-derecha.svg";
import flechaIquierda from "../Img/flecha-izquierda.svg";
import sillasCocina from "../Img/sillascocina.jpg";
import terraza from "../Img/Terraza.png";
import juegoRestaurante from "../Img/Juego_para_Restaurante_Modelo5_-_Restaurante.png";
import juegoRestaurante2 from "../Img/Juego_para_Restaurante__Modelo6-_Restaurante.png";
import { useState } from "react";
import Cabecera2 from "../Componentes/cabecera2";
//import { keyframes } from '@emotion/react'
//import cambiosPantallas from '../Javascript/main3'

export default function Main3() {
  const [iteradorPantalla, setIteradorPantalla] = useState(0);

  function iterador(param) {
    if (param === 1 && iteradorPantalla < 2) {
      setIteradorPantalla(iteradorPantalla + 1);
    } else if (param === 0 && iteradorPantalla > 0) {
      setIteradorPantalla(iteradorPantalla - 1);
    }
  }

  function flechaEstilos(param) {
    if (param === "derecha") {
      const divFlechaDerechaStyle = {
        transition: "opacity 1s ease",
        opacity: iteradorPantalla >= 2 ? "0" : "1",
        cursor: iteradorPantalla >= 2 ? "default" : "pointer",
      };
      return divFlechaDerechaStyle;
    } else {
      const divFlechaIzquierdaStyle = {
        transition: "opacity 1s ease",
        opacity: iteradorPantalla > 0 ? "1" : "0",
        cursor: iteradorPantalla > 0 ? "pointer" : "default",
      };
      return divFlechaIzquierdaStyle;
    }
  }

  function moverImagen(param) {
    const transition = {
      transition: "all 1s ease",
    };
    if (param === 1) {
      if (iteradorPantalla > 0) {
        transition.transform = "translateX(-100%)";
      } else {
        transition.transform = "translateX(0)";
      }
    } else if (param === 2) {
      if (iteradorPantalla > 0 && iteradorPantalla < 2) {
        transition.transform = "translateX(0)";
      } else {
        transition.transform = "translateX(-100%)";
      }
    } else if (param === 3) {
      if (iteradorPantalla > 1) {
        transition.transform = "translateX(0)";
      } else {
        transition.transform = "translateX(-100%)";
      }
    }
    return transition;
  }

  function TextoImg() {
    return (
      <div className="divTextoPortada">
        <span>CREATIVIDAD EN EL DISEÑO</span>
        <span>RESTAURANTE</span>
        <button>CONTACTO</button>
      </div>
    );
  }

  function TextoSection(props) {
    return (
      <div style={{ fontFamily: "Arial" }}>
        <div>
          <span style={{ fontSize: "5vw", color: "#FBE47E" }}>
            {props.numero}
          </span>
        </div>
        <div>
          <img
            src={props.imagen}
            alt="juego restaurante"
            style={{ width: "100%", height: "50vh" }}
          />
          <p style={{ fontSize: "1vw" }}>{props.descripcion}</p>
        </div>
      </div>
    );
  }

  let descripcion =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, totam? Enim hic tenetur quam, nemo sapiente exercitationem fugiat rerum vel ipsam soluta atque laborum et repellat aliquid dignissimos, eligendi ipsa.";

  return (
    <main>
      <div className="divPortadas">
        <Cabecera2 />
        <div className="divMover" style={moverImagen(1)}>
          <div className="divPortada">
            <img
              className="imgRestaurante"
              src={restaurante1}
              alt="restaurante"
            />
            <TextoImg />
          </div>
        </div>
        <div className="divMover" style={moverImagen(2)}>
          <div className="divPortada">
            <img
              className="imgRestaurante"
              src={restaurante2}
              alt="restaurante"
            />
            <TextoImg />
          </div>
        </div>
        <div className="divMover" style={moverImagen(3)}>
          <div className="divPortada">
            <img
              className="imgRestaurante"
              src={restaurante3}
              alt="restaurante"
            />
            <TextoImg />
          </div>
        </div>
        <div
          onClick={() => iterador(1)}
          className="divFlecha derecha"
          style={flechaEstilos("derecha")}
        >
          <img
            src={flechaDerecha}
            atl="flecha derecha"
            className="imgFlecha"
            alt="imagen1"
          />
        </div>
        <div
          onClick={() => iterador(0)}
          className="divFlecha izquierda"
          style={flechaEstilos("izquierda")}
        >
          <img
            src={flechaIquierda}
            atl="flecha derecha"
            className="imgFlecha"
            alt="imagen1"
          />
        </div>
      </div>
      <aside>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <span style={{ fontSize: "2.7vw", display: "inline" }}>HISTORIA</span>
        </div>
        <div>
          <p style={{ fontSize: "1.3vw" }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            facilis assumenda vero, quae deleniti distinctio iusto dolores
            voluptatibus itaque impedit amet, earum esse nobis aspernatur quia
            blanditiis eaque consequuntur ex?
          </p>
        </div>
      </aside>
      <section className="">
        <TextoSection
          numero="01"
          descripcion={descripcion}
          imagen={juegoRestaurante}
        />
        <TextoSection
          numero="02"
          descripcion={descripcion}
          imagen={juegoRestaurante2}
        />
      </section>
      <div className="divSeparados">
        <div className="divSeparador1">
          <span
            style={{ fontSize: "5vw", color: "#354050", marginLeft: "1.5vw" }}
          >
            01
          </span>
          <div className="divImgSep">
            <img src={terraza} alt="imgTerraza" className="imgSeparador" />
          </div>
          <div className="divInfo">
            <span style={{ gridArea: "nombre", fontSize: "2vw" }}>
              JUEGO DE TERRAZA
            </span>
            <button style={{ gridArea: "boton" }}>CONTACTO</button>
            <p style={{ gridArea: "descripcion", fontSize: "1vw" }}>
              Lorema ipsum dolor, sit amet consectetur adipisicing elit. Officia
              nam commodi ratione veniam voluptatibus? Eligendi enim quam animi
              sed maiores libero, minus quae quod, ipsum amet nam voluptate
              facilis dignissimos!
            </p>
          </div>
        </div>
        <div className="divSeparador2">
          <span
            style={{
              fontSize: "5vw",
              color: "#354050",
              marginRight: "1.5vw",
              display: "flex",
              justifyContent: "right",
            }}
          >
            02
          </span>
          <div className="divImgSep">
            <img src={terraza} alt="imgTerraza" className="imgSeparador" />
          </div>
          <div className="divInfo">
            <span style={{ gridArea: "nombre", fontSize: "2vw" }}>
              JUEGO DE TERRAZA
            </span>
            <button style={{ gridArea: "boton" }}>CONTACTO</button>
            <p style={{ gridArea: "descripcion", fontSize: "1vw" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
              consequuntur assumenda tenetur laboriosam harum rerum vitae iusto
              doloribus necessitatibus accusamus eos id, laborum voluptas
              aperiam, blanditiis quod sequi praesentium commodi.
            </p>
          </div>
        </div>
      </div>
      <footer className="footerMain">
        <div>
          <span style={{ color: "#FBE47E", fontSize: "3vw" }}>FOOTER</span>
        </div>
        <div>
          <p style={{ color: "white", fontSize: "1.5vw" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At
            voluptatibus iusto quis eum eius odio et voluptatum. Similique vero
            maxime illo velit unde excepturi, ab aspernatur hic aliquam
            repudiandae veritatis?
          </p>
        </div>
        <div className="divImgFooter">
          <img className="imgFooter" src={sillasCocina} />
          <img className="imgFooter" src={sillasCocina} />
          <div class="divSubImgFooter">
            <img className="imgFooter" src={sillasCocina} />
            <img className="imgFooter" src={sillasCocina} />
          </div>
          <div class="divSubImgFooter">
            <img className="imgFooter" src={sillasCocina} />
            <img className="imgFooter" src={sillasCocina} />
          </div>
        </div>
      </footer>
    </main>
  );
}
