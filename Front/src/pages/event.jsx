import React, { useEffect } from "react";
import { icons } from "react-icons";
import "../../public/assets/css/evenement.css"
import euro from "../../public/assets/img/svg/prix.svg"
import image from "../../public/assets/img/bulles.jpg"
import imagePerso from "../../public/assets/img/boite.jpg"
<<<<<<< HEAD
import { CgEuro, CgSmartHomeBoiler } from 'react-icons/cg';
import { ButtonAdd } from "../components/buttonAdd";
=======
import { CgEuro } from 'react-icons/cg';
>>>>>>> 1462ffe46079e206f84b6c64f1f8fb9b31fb0c82


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

        function partiImportant(){
            ParticipantsImportants.classList.toggle('hidetexte')
            ParticipantsImportants.classList.toggle('showtexte')
        }

        function clair(){
            detailevent.classList.toggle('hide');
            sombre.classList.toggle('clair');
        }

        function popupinfoPerso(){
            detaileventPerso.classList.toggle('hide');
            sombrePerso.classList.toggle('clairPerso');
        }

        function popupinfoDeuxPerso(){
            detaileventPerso.classList.toggle('hide');
            sombrePerso.classList.toggle('clairPerso');
        }

        function popupinfoTroisPerso(){
            detaileventPerso.classList.toggle('hide');
            sombrePerso.classList.toggle('clairPerso');
        }

        function popupinfoQuatrePerso(){
            detaileventPerso.PersoclassList.toggle('hide');
            sombrePerso.PersoclassList.toggle('clairPerso');
        }

        function popupinfoCinqPerso(){
            detaileventPerso.classList.toggle('hide');
            sombrePerso.classList.toggle('clairPerso');
        }

        function popupinfoSixPerso(){
            detaileventPerso.classList.toggle('hide');
            sombrePerso.classList.toggle('clairPerso');
        }

        function popupinfoSeptPerso(){
            detaileventPerso.classList.toggle('hide');
            sombrePerso.classList.toggle('clairPerso');
        }

        function clairPerso(){
            detaileventPerso.classList.toggle('hide');
            sombrePerso.classList.toggle('clairPerso');
        }

        function partiPerso(){
            ParticipantsPerso.classList.toggle('hidetexte')
            ParticipantsPerso.classList.toggle('showtexte')
        }

        Click.addEventListener('click', popupinfo)
        ClickDeux.addEventListener('click', popupinfoDeux)
        ClickTrois.addEventListener('click', popupinfoTrois)
        ClickQuatre.addEventListener('click', popupinfoQuatre)
        ClickCinq.addEventListener('click', popupinfoCinq)
        ClickSix.addEventListener('click', popupinfoSix)
        ClickSept.addEventListener('click', popupinfoSept)
        sombre.addEventListener('click', clair)
        catParticipant.addEventListener('mouseover', partiImportant)
        catParticipant.addEventListener('mouseout', partiImportant)

        ClickPerso.addEventListener('click', popupinfoPerso)
        ClickPersoDeux.addEventListener('click', popupinfoDeuxPerso)
        ClickPersoTrois.addEventListener('click', popupinfoTroisPerso)
        ClickPersoQuatre.addEventListener('click', popupinfoQuatrePerso)
        ClickPersoCinq.addEventListener('click', popupinfoCinqPerso)
        ClickPersoSix.addEventListener('click', popupinfoSixPerso)
        ClickPersoSept.addEventListener('click', popupinfoSeptPerso)
        sombrePerso.addEventListener('click', clairPerso)
        catPersoParticipant.addEventListener('mouseover', partiPerso)
        catPersoParticipant.addEventListener('mouseout', partiPerso)
        }
    )
    
    let event = {
        titre: 'Quai des bulles à St Malo',
        prix: '20',
        datedebut: '15 Janvier 2022',
        datefin: '21 Janvier 2022',
        lieu: '11 rue de la république, St Malo 35400',
        participant : ['Bruce Willis ', 'Phillipe Poutou ', 'Jean Dujardin ', 'Homer Simpson ', 'Pierre Lemonnier ', 'Antoine Mounier ', 'Quentin Seurt ', 'Mathieu Peran ']
    }

    let eventPerso = {
        titre: 'Soirée Cinéma organisé par le BDE',
        prix: '9,50',
        datedebut: '15 Janvier 2022 20h30',
        datefin: '15 Janvier 2022 22h30',
        lieu: 'Cinedol, place du Foirail, 35120 Dol-de-Bretagne',
        participant : ['Johnny Hallyday ', 'Emmanuel Macron ', 'Jean Lassale ', 'Mathieu Peran ', 'Alexandre Touchet ', 'Erwan Brevault ', 'Jean Naymar ', 'Archibald Theobald ']
    }

    
    return (
        <div>
            <div className="clair" id="sombre"></div>
            <div className="eventcontainer">
                <div className="EventImportant">
                    <article className="evenement">
                        <span className="titre">{event.titre}</span>
                        <img className="image" id="Click" src={image} alt="" srcset="" />
                        <div className="euro"><CgEuro /></div><span className="prix">{event.prix}</span>
                        <p className="participation">Je participe !</p>
                    </article>

                    <article className="evenement">
                        <span className="titre">{event.titre}</span>
                        <img className="image" id="ClickDeux" src={image} alt="" srcset="" />
                        <div className="euro"><CgEuro /></div><span className="prix">{event.prix}</span>
                        <p className="participation">Je participe !</p>
                    </article>

                    <article className="evenement">
                        <span className="titre">{event.titre}</span>
                        <img className="image" id="ClickTrois" src={image} alt="" srcset="" />
                        <div className="euro"><CgEuro /></div><span className="prix">{event.prix}</span>
                        <p className="participation">Je participe !</p>
                    </article>
                    <article className="evenement">
                        <span className="titre">{event.titre}</span>
                        <img className="image" id="ClickQuatre" src={image} alt="" srcset="" />
                        <div className="euro"><CgEuro /></div><span className="prix">{event.prix}</span>
                        <p className="participation">Je participe !</p>
                    </article>

                    <article className="evenement">
                        <span className="titre">{event.titre}</span>
                        <img className="image" id="ClickCinq" src={image} alt="" srcset="" />
                        <div className="euro"><CgEuro /></div><span className="prix">{event.prix}</span>
                        <p className="participation">Je participe !</p>
                    </article>

                    <article className="evenement">
                        <span className="titre">{event.titre}</span>
                        <img className="image" id="ClickSix" src={image} alt="" srcset="" />
                        <div className="euro"><CgEuro /></div><span className="prix">{event.prix}</span>
                        <p className="participation">Je participe !</p>
                    </article>

                    <article className="evenement">
                        <span className="titre">{event.titre}</span>
                        <img className="image" id="ClickSept" src={image} alt="" srcset="" />
                        <span className="prix"> <CgEuro />{event.prix}</span>
                        <p className="participation">Je participe !</p>
                    </article>
                </div>
            </div>
            
            <div className="clairPerso" id="sombrePerso"></div>
            <div className="eventPersocontainer">
                <div className="EventPerso">
                    <article className="evenementPerso">
                        <span className="titre">{eventPerso.titre}</span>
                        <img className="image" id="ClickPerso" src={imagePerso} alt="" srcset="" />
                        <div className="euro"><CgEuro /></div><span className="prix">{eventPerso.prix}</span>
                        <p className="participation PartiPerso">Je participe !</p>
                    </article>

                    <article className="evenementPerso">
                        <span className="titre">{eventPerso.titre}</span>
                        <img className="image" id="ClickPersoDeux" src={imagePerso} alt="" srcset="" />
                        <div className="euro"><CgEuro /></div><span className="prix">{eventPerso.prix}</span>
                        <p className="participation PartiPerso">Je participe !</p>
                    </article>

                    <article className="evenementPerso">
                        <span className="titre">{eventPerso.titre}</span>
                        <img className="image" id="ClickPersoTrois" src={imagePerso} alt="" srcset="" />
                        <div className="euro"><CgEuro /></div><span className="prix">{eventPerso.prix}</span>
                        <p className="participation PartiPerso">Je participe !</p>
                    </article>
                    <article className="evenementPerso">
                        <span className="titre">{eventPerso.titre}</span>
                        <img className="image" id="ClickPersoQuatre" src={imagePerso} alt="" srcset="" />
                        <div className="euro"><CgEuro /></div><span className="prix">{eventPerso.prix}</span>
                        <p className="participation PartiPerso">Je participe !</p>
                    </article>

                    <article className="evenementPerso">
                        <span className="titre">{eventPerso.titre}</span>
                        <img className="image" id="ClickPersoCinq" src={imagePerso} alt="" srcset="" />
                        <div className="euro"><CgEuro /></div><span className="prix">{eventPerso.prix}</span>
                        <p className="participation PartiPerso">Je participe !</p>
                    </article>

                    <article className="evenementPerso">
                        <span className="titre">{eventPerso.titre}</span>
                        <img className="image" id="ClickPersoSix" src={imagePerso} alt="" srcset="" />
                        <div className="euro"><CgEuro /></div><span className="prix">{eventPerso.prix}</span>
                        <p className="participation PartiPerso">Je participe !</p>
                    </article>

                    <article className="evenementPerso">
                        <span className="titre">{eventPerso.titre}</span>
                        <img className="image" id="ClickPersoSept" src={imagePerso} alt="" srcset="" />
                        <span className="prix"> <CgEuro />{event.prix}</span>
                        <p className="participation PartiPerso">Je participe !</p>
                    </article>
                </div>
            </div>


            <div className="hide" id="detailevent">
                <img className="imageDetail" src={image} alt="" srcset="" />
                <span className="catNom grisTexte">Nom :</span><span className="detailtitre">{event.titre}</span>
                <span className="catLieu grisTexte">Lieu :</span><span className="detaillieu">{event.lieu}</span>
                <span className="catDebut grisTexte">Début :</span><span className="detaildebut">{event.datedebut}</span>
                <span className="catFin grisTexte">Fin :</span><span className="detailfin">{event.datefin}</span>
                <span className="catPrix grisTexte">Prix :</span><span className="detailprix">{event.prix} €</span>
                <span id="catParticipant">Participants</span>
                <button className="catParticipation">Je participe</button>
                <span class="hidetexte" id="ParticipantsImportants">{event.participant}</span>



            </div>

            <div className="hide" id="detaileventPerso">
                <img className="imageDetailPerso" src={imagePerso} alt="" srcset="" />
                <span className="catPersoNom grisTexte">Nom :</span><span className="titrePerso detailPersotitre">{eventPerso.titre}</span>
                <span className="catPersoLieu grisTexte">Lieu :</span><span className="titrePerso detailPersolieu">{eventPerso.lieu}</span>
                <span className="catPersoDebut grisTexte">Début :</span><span className="titrePerso detailPersodebut">{eventPerso.datedebut}</span>
                <span className="catPersoFin grisTexte">Fin :</span><span className="titrePerso detailPersofin">{eventPerso.datefin}</span>
                <span className="catPersoPrix grisTexte">Prix :</span><span className="titrePerso detailPersoprix">{eventPerso.prix} €</span>
                <span className="catTop" id="catPersoParticipant">Participants</span>
                <button className="catTop catPersoParticipation">Je participe</button>
                <span class="hidetexte" id="ParticipantsPerso">{eventPerso.participant}</span>
            </div>
            <ButtonAdd />
        </div>            
    )
}
