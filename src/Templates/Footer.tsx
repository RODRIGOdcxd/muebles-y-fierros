import React from "react";
import "../Styles/Footer.css";
import Facebook from "../ImgTs/bxl-facebook.svg";
import Instagram from "../ImgTs/bxl-instagram.svg";
import Twitter from "../ImgTs/bxl-twitter.svg";
import Youtube from "../ImgTs/bxl-youtube.svg";
import Ts from "../ImgTs/bxl-typescript.svg";
//type Props = {}

export default function Footer(/*{}: Props*/) {
  return (
    <footer>
      <div className="divTituloFooter">
        <span>Ableton</span>
      </div>
      <div className="divPanelesFooter">
        <div className="divPanelFooter">
          <span>Register Live or Push {">"}</span>
          <span>About Ableton {">"}</span>
          <span>Jobs {">"}</span>
          <div className="divIconos">
            <img
              src={Facebook}
              alt="facebook"
              className="imgIconos"
              style={{ backgroundColor: "#3477F2" }}
            />
            <img
              src={Twitter}
              alt="twitter"
              className="imgIconos"
              style={{ backgroundColor: "#1DA1F2" }}
            />
            <img
              src={Youtube}
              alt="youtube"
              className="imgIconos"
              style={{ backgroundColor: "#FF001D" }}
            />
            <img
              src={Instagram}
              alt="instagram"
              className="imgIconos"
              style={{ backgroundColor: "#F77737" }}
            />
          </div>
        </div>
        <div className="divPanelFooter">
          <span style={{ fontWeight: "bold" }}>Education</span>
          <span>Offers for students and teacher {">"}</span>
          <span>Ableton for the Classroom {">"}</span>
          <span>Ableton for Colleges and Universities {">"}</span>
        </div>
        <div className="divPanelFooter">
          <span style={{ fontWeight: "bold" }}>Sign up to our newsletter</span>
          <p style={{ fontSize: "2vh" }}>
            Enter your email address to stay up to date with the latest offers,
            tutorials, downloads, surveys and more.
          </p>
          <div className="divBotones">
            <input type="text" placeholder="Email Address" />
            <button>Sign up</button>
          </div>
        </div>
        <div className="divPanelFooter">
          <span style={{ fontWeight: "bold" }}>Community</span>
          <span>Find Ableton User Groups {">"}</span>
          <span>Find Certified Training {">"}</span>
          <span>Become a Certified Trainer {">"}</span>
        </div>
        <div className="divPanelFooter">
          <span style={{ fontWeight: "bold" }}>Lenguage and Location</span>
          <div className="divSelect">
            <select name="select">
              <option value="value1">English</option>
              <option value="value2" selected>
                Spanish
              </option>
              <option value="value3">France</option>
            </select>
            <select name="select">
              <option value="value1">Peru</option>
              <option value="value2" selected>
                EEUU
              </option>
              <option value="value3">FRANCIA</option>
            </select>
          </div>
        </div>
      </div>
      <div className="divFooterEnlaces">
        <div>
          <ul>
            <a href="#"><li>Contact Us</li></a>
            <a href="#"><li>Press Resource</li></a>
            <a href="#"><li>Legal Info</li></a>
            <a href="#"><li>Privacy Policy</li></a>
            <a href="#"><li>Cookie Settings</li></a>
            <a href="#"></a><li>Imprint</li>
          </ul>
        </div>
        <div>
          <span>Made in Peru</span>
          <img src={Ts} alt="imagen ts" />
        </div>
      </div>
    </footer>
  );
}
