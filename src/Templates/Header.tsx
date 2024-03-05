import React from "react"; //SE COLOCA POR BUENAS PRACTICAS, PERO NO ES NECESARIO.
import "../Styles/Header.css";
import { Helmet } from "react-helmet";
/*Img*/
import Ts from "../ImgTs/bxl-typescript.svg";



export default function Header(props) {
  const menu = [
    {
      listaMenu: [
        ["Live", "/live",props.color1],
        ["Push", "/push",props.color2],
        ["Note", "/note",props.color3],
        ["Link", "/link",props.color4],
        ["Tienda", "/tienda",props.color5],
        ["Packs", "/packs",props.color6],
        ["Ayuda", "/ayuda",props.color7],
        ["Más", "/mas",props.color8],
      ],
    },
  ];
  return (
    <>
      <Helmet>
        <link rel="shortcut icon" href={Ts} type="image/x-icon" />
      </Helmet>
      <header>
        <div className="divLogo">
          <a href="/">
            <img className="imgTs" src={Ts} alt="vector ts" />
          </a>
        </div>
        <div className="divMenu">
          <ul className="ulMenu">
            {menu.map((item) =>
              item.listaMenu.map((urlA, i) => (
                <li key={i}>
                  <a href={urlA[1]} style={{color: urlA[2]}}>{urlA[0]}</a>
                </li>
              ))
            )}
          </ul>
        </div>
        <div className="divLog">
          <div className="divLive">
            <a href="/live">Prueba Live Gratis</a>
          </div>
          <div className="divReg">
            <a href="/register">Inicia sesión o regístrate</a>
          </div>
        </div>
      </header>
    </>
  );
}
