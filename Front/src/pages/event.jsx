import React, { useEffect } from "react";
import { icons } from "react-icons";
import "../../public/assets/css/evenement.css"
import euro from "../../public/assets/img/svg/prix.svg"
import image from "../../public/assets/img/bulles.jpg"
import { CgEuro, CgSmartHomeBoiler } from 'react-icons/cg';


export const Event = () => {
    
    useEffect(
        () => {        
        function popupinfo(){
            detailevent.classList.toggle('hide');
            sombre.classList.toggle('clair');
        }

        function popupinfoDeux(){
            detailevent.classList.toggle('hide');
            sombre.classList.toggle('clair');
        }

        function popupinfoTrois(){
            detailevent.classList.toggle('hide');
            sombre.classList.toggle('clair');
        }

        function popupinfoQuatre(){
            detailevent.classList.toggle('hide');
            sombre.classList.toggle('clair');
        }

        function popupinfoCinq(){
            detailevent.classList.toggle('hide');
            sombre.classList.toggle('clair');
        }

        function popupinfoSix(){
            detailevent.classList.toggle('hide');
            sombre.classList.toggle('clair');
        }

        function popupinfoSept(){
            detailevent.classList.toggle('hide');
            sombre.classList.toggle('clair');
        }

        function clair(){
            detailevent.classList.toggle('hide');
            sombre.classList.toggle('clair');
        }



        Click.addEventListener('click', popupinfo)
        ClickDeux.addEventListener('click', popupinfoDeux)
        ClickTrois.addEventListener('click', popupinfoTrois)
        ClickQuatre.addEventListener('click', popupinfoQuatre)
        ClickCinq.addEventListener('click', popupinfoCinq)
        ClickSix.addEventListener('click', popupinfoSix)
        ClickSept.addEventListener('click', popupinfoSept)
        sombre.addEventListener('click', clair)
        }
    )
    
    let event = {
        titre: 'Quai des bulles à St Malo',
        prix: '20.05',
        datedebut: '15 Janvier 2022',
        datefin: '21 Janvier 2022',
        lieu: '11 rue de la république, St Malo 35400'
    }

    
    return (
        <div>
            <div className="clair" id="sombre"></div>
            <div className="eventcontainer">
                <div className="EventImportant">
                    <article className="evenement">
                        <span className="titre">{event.titre}</span>
                        <img className="image" id="Click" src={image} alt="" srcset="" />
                        <span className="prix"> <CgEuro />{event.prix}</span>
                        <span className="participation">Je participe !</span>
                    </article>

                    <article className="evenement">
                        <span className="titre">{event.titre}</span>
                        <img className="image" id="ClickDeux" src={image} alt="" srcset="" />
                        <span className="prix"> <CgEuro />{event.prix}</span>
                        <span className="participation">Je participe !</span>
                    </article>

                    <article className="evenement">
                        <span className="titre">{event.titre}</span>
                        <img className="image" id="ClickTrois" src={image} alt="" srcset="" />
                        <span className="prix"> <CgEuro />{event.prix}</span>
                        <span className="participation">Je participe !</span>
                    </article>
                    <article className="evenement">
                        <span className="titre">{event.titre}</span>
                        <img className="image" id="ClickQuatre" src={image} alt="" srcset="" />
                        <span className="prix"> <CgEuro />{event.prix}</span>
                        <span className="participation">Je participe !</span>
                    </article>

                    <article className="evenement">
                        <span className="titre">{event.titre}</span>
                        <img className="image" id="ClickCinq" src={image} alt="" srcset="" />
                        <span className="prix"> <CgEuro />{event.prix}</span>
                        <span className="participation">Je participe !</span>
                    </article>

                    <article className="evenement">
                        <span className="titre">{event.titre}</span>
                        <img className="image" id="ClickSix" src={image} alt="" srcset="" />
                        <span className="prix"> <CgEuro />{event.prix}</span>
                        <span className="participation">Je participe !</span>
                    </article>

                    <article className="evenement">
                        <span className="titre">{event.titre}</span>
                        <img className="image" id="ClickSept" src={image} alt="" srcset="" />
                        <span className="prix"> <CgEuro />{event.prix}</span>
                        <span className="participation">Je participe !</span>
                    </article>
                </div>
            </div>
            
            <div className="hide" id="detailevent">
                <span className="catNom">Nom :</span><span className="detailtitre">{event.titre}</span>
                <span className="catLieu">Lieu :</span><span className="detaillieu">{event.lieu}</span>
                <span className="catDebut">Début :</span><span className="detaildebut">{event.datedebut}</span>
                <span className="catFin">Fin :</span><span className="detailfin">{event.datefin}</span>
                <span className="catPrix">Prix :</span><span className="detailprix">{event.prix}</span>
            </div>
        </div>            
    )
}
