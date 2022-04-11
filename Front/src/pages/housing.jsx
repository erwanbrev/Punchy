import React from "react";
import { icons } from "react-icons";
import euro from "../../public/assets/img/svg/prix.svg"

export const Housing = () => {
    return (
        <div className="main-container">
            <h1 className="page-title">Logement</h1>
            <article className="article-event-2nd">
                <h2 className="part01-article">Type de logement</h2>
                <img src="#" alt="img-logement" className="part02-article" />
                <div className="part03-article-2nd">
                    <img src={euro} alt="logo-euro" />
                </div>
                <h3 className="part05-article-2nd">Je participe</h3>
            </article>
        </div>
    )
}