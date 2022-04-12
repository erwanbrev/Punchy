import React from "react";
import { icons } from "react-icons";
import "../../public/assets/css/evenement.css"
import euro from "../../public/assets/img/svg/prix.svg"
import image from "../../public/assets/img/bulles.jpg"

export const Event = () => {

    let event = {
        titre: 'Quai des bulles à St Malo',
        prix: '20.05',
    }

    return (
        <div>
            <div className="eventcontainer">
                <div className="EventImportant">
                    <article className="evenement">
                        <span className="titre">{event.titre}</span>
                        <img className="image" src={image} alt="" srcset="" />
                        <span className="prix">{event.prix}</span>
                        <span className="participation">Je participe !</span>
                    </article>

                    <article className="evenement">
                        <span className="titre">{event.titre}</span>
                        <img className="image" src={image} alt="" srcset="" />
                        <span className="prix">{event.prix}</span>
                        <span className="participation">Je participe !</span>
                    </article>

                    <article className="evenement">
                        <span className="titre">{event.titre}</span>
                        <img className="image" src={image} alt="" srcset="" />
                        <span className="prix">{event.prix}</span>
                        <span className="participation">Je participe !</span>
                    </article>
                    <article className="evenement">
                        <span className="titre">{event.titre}</span>
                        <img className="image" src={image} alt="" srcset="" />
                        <span className="prix">{event.prix}</span>
                        <span className="participation">Je participe !</span>
                    </article>

                    <article className="evenement">
                        <span className="titre">{event.titre}</span>
                        <img className="image" src={image} alt="" srcset="" />
                        <span className="prix">{event.prix}</span>
                        <span className="participation">Je participe !</span>
                    </article>

                    <article className="evenement">
                        <span className="titre">{event.titre}</span>
                        <img className="image" src={image} alt="" srcset="" />
                        <span className="prix">{event.prix}</span>
                        <span className="participation">Je participe !</span>
                    </article>

                    <article className="evenement">
                        <span className="titre">{event.titre}</span>
                        <img className="image" src={image} alt="" srcset="" />
                        <span className="prix">{event.prix}</span>
                        <span className="participation">Je participe !</span>
                    </article>

                </div>
            </div>
        </div>            
    )
}
