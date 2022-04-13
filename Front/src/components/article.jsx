import React from "react";
import "../../public/assets/css/article.css"
import { IoLogoEuro } from "react-icons/io5";
export const Article = () => {
    return (
        <div className="main-container">
            <h1 className="page-title-menu">Actualités</h1>
            <article className="article-event">
                <h2 className="part01-article">Type d'Article</h2>
                <img src="#" alt="img-event" className="part02-article" />
                <div className="part03-article">
                    <IoLogoEuro />
                </div>
                <p className="part04-article">compteur de participant</p>
                <h3 className="part05-article">Je participe</h3>
            </article>
        </div>
    )
}