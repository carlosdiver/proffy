import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import api from "../../services/api";

import logoImg from "../../assets/images/logo.svg";
import landingImg from "../../assets/images/landing.svg";
import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";

import "./styles.css";

function Landing() {
  const [totalConnection, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get("connections").then((response) => {
      const { total } = response.data;
      setTotalConnections(total);
    });
  }, []);

  return (
    <div id="page-landing" className="center">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online</h2>
        </div>
        <div className="hero-image-div center">
          <img
            src={landingImg}
            alt="Plataforma de estudos"
            className="hero-image"
          />
        </div>
        <div className="buttons-container center">
          <Link to="study" className="study center">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </Link>
          <Link to="give-classes" className="give-classes center">
            <img src={giveClassesIcon} alt="Dar aulas" />
            Dar aulas
          </Link>
        </div>
        <span className="total-connections center">
          Total de {totalConnection}{" "}
          {totalConnection > 1 ? "conexões" : "conexão"} já realizada
          {totalConnection > 1 ? "s" : " "}
          <img src={purpleHeartIcon} alt="Coração roxo" />
        </span>
      </div>
    </div>
  );
}
export default Landing;
