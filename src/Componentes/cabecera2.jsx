import logoMP from "../Img/LOGOMP.png";
import "../Estilos/cabecera2.css";
import "../Javascript/cabecera";
import { Helmet } from "react-helmet";

export default function Cabecera() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <header>
        <div className="cabecera">
          <div className="logo">
            <img className="imgLogo" src={logoMP} alt="sillas cocina" />
            <span>FIERROS Y MADERA</span>
          </div>
          <div className="menu">
            <ul>
              <li>PRODUCTOS</li>
              <li>CATALOGO</li>
              <li>CONTACTO</li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
