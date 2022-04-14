import React, { useEffect } from "react";
import { icons } from "react-icons";
import "../../public/assets/css/evenement.css"
import euro from "../../public/assets/img/svg/prix.svg"
import image from "../../public/assets/img/bulles.jpg"
import imagePerso from "../../public/assets/img/boite.jpg"
import { CgEuro, CgSmartHomeBoiler } from 'react-icons/cg';
import { ButtonAdd } from "../components/buttonAdd";
import { CgEuro } from 'react-icons/cg';
import { CgEuro } from 'react-icons/cg';


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
            detaileventPerso.classList.toggle('hide');
            sombrePerso.classList.toggle('clairPerso');
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
        titre: 'Quai des bulles',
        prix: '20',
        datedebut: '15 Janvier 2022',
        datefin: '21 Janvier 2022',
        lieu: '39 Rue du Levant, 35400 Saint-Malo',
        participant : ['Bruce Willis ', 'Phillipe Poutou ', 'Jean Dujardin ', 'Homer Simpson ', 'Pierre Lemonnier ', 'Antoine Mounier ', 'Quentin Seurt ', 'Mathieu Peran '],
        description : `Quai des bulles est l'un des festival de BD les plus important de la région. Vous y découvrez de nombreux dessinateur et leur créations, un excellent moyen de découverte !`
    }

    let eventPerso = {
        titre: 'Soirée Cinéma organisé par le BDE',
        prix: '9,50',
        datedebut: '15 Janvier 2022 20h30',
        datefin: '15 Janvier 2022 22h30',
        lieu: 'Cinedol, place du Foirail, 35120 Dol-de-Bretagne',
        participant : ['Johnny Hallyday ', 'Emmanuel Macron ', 'Jean Lassale ', 'Mathieu Peran ', 'Alexandre Touchet ', 'Erwan Brevault ', 'Jean Naymar ', 'Archibald Theobald '],
        description : `Le BDE vous propose une séance de cinéma pour aller voir ensemble le film Garfield 8.`
    }
    
    return (
        <div>
            <div className="clair" id="sombre"></div>
            <div className="eventcontainer">
                <div className="EventImportant">
                    <article className="evenement">
                        <span className="titre orange">{event.titre}</span>
                        <img className="image" id="Click" src={image} alt="" srcset="" />
                        <div className="priceEvent"><span className="prix orange">{event.prix}</span><span className="euro orange"><CgEuro /></span></div>
                        <p className="participation">Je participe !</p>
                    </article>

                    <article className="evenement">
                        <span className="titre orange">{event.titre}</span>
                        <img className="image" id="ClickDeux" src={image} alt="" srcset="" />
                        <div className="priceEvent"><span className="prix orange">{event.prix}</span><span className="euro orange"><CgEuro /></span></div>
                        <p className="participation">Je participe !</p>
                    </article>

                    <article className="evenement">
                        <span className="titre orange">{event.titre}</span>
                        <img className="image" id="ClickTrois" src={image} alt="" srcset="" />
                        <div className="priceEvent"><span className="prix orange">{event.prix}</span><span className="euro orange"><CgEuro /></span></div>
                        <p className="participation">Je participe !</p>
                    </article>
                    <article className="evenement">
                        <span className="titre orange">{event.titre}</span>
                        <img className="image" id="ClickQuatre" src={image} alt="" srcset="" />
                        <div className="priceEvent"><span className="prix orange">{event.prix}</span><span className="euro orange"><CgEuro /></span></div>
                        <p className="participation">Je participe !</p>
                    </article>

                    <article className="evenement">
                        <span className="titre orange">{event.titre}</span>
                        <img className="image" id="ClickCinq" src={image} alt="" srcset="" />
                        <div className="priceEvent"><span className="prix orange">{event.prix}</span><span className="euro orange"><CgEuro /></span></div>
                        <p className="participation">Je participe !</p>
                    </article>

                    <article className="evenement">
                        <span className="titre orange">{event.titre}</span>
                        <img className="image" id="ClickSix" src={image} alt="" srcset="" />
                        <div className="priceEvent"><span className="prix orange">{event.prix}</span><span className="euro orange"><CgEuro /></span></div>
                        <p className="participation">Je participe !</p>
                    </article>

                    <article className="evenement">
                        <span className="titre orange">{event.titre}</span>
                        <img className="image" id="ClickSept" src={image} alt="" srcset="" />
                        <div className="priceEvent"><span className="euro orange"><CgEuro /></span><span className="prix orange">{event.prix}</span></div>
                        <p className="participation">Je participe !</p>
                    </article>
                </div>
            </div>
            
            <div className="clairPerso" id="sombrePerso"></div>
            <div className="eventPersocontainer">

                <div className="EventPerso">
                    <article className="evenementPerso">
                        <span className="titre orange">{eventPerso.titre}</span>
                        <img className="image" id="ClickPerso" src={imagePerso} alt="" srcset="" />
                        <div className="priceEvent"><span className="prix orange">{eventPerso.prix}</span><span className="euro orange"><CgEuro /></span></div>
                        <p className="participation PartiPerso">Je participe !</p>
                    </article>

                    <article className="evenementPerso">
                        <span className="titre orange">{eventPerso.titre}</span>
                        <img className="image" id="ClickPersoDeux" src={imagePerso} alt="" srcset="" />
                        <div className="priceEvent"><span className="prix orange">{eventPerso.prix}</span><span className="euro orange"><CgEuro /></span></div>
                        <p className="participation PartiPerso">Je participe !</p>
                    </article>

                    <article className="evenementPerso">
                        <span className="titre orange">{eventPerso.titre}</span>
                        <img className="image" id="ClickPersoTrois" src={imagePerso} alt="" srcset="" />
                        <div className="priceEvent"><span className="prix orange">{eventPerso.prix}</span><span className="euro orange"><CgEuro /></span></div>
                        <p className="participation PartiPerso">Je participe !</p>
                    </article>
                    <article className="evenementPerso">
                        <span className="titre orange">{eventPerso.titre}</span>
                        <img className="image" id="ClickPersoQuatre" src={imagePerso} alt="" srcset="" />
                        <div className="priceEvent"><span className="prix orange">{eventPerso.prix}</span><span className="euro orange"><CgEuro /></span></div>
                        <p className="participation PartiPerso">Je participe !</p>
                    </article>

                    <article className="evenementPerso">
                        <span className="titre orange">{eventPerso.titre}</span>
                        <img className="image" id="ClickPersoCinq" src={imagePerso} alt="" srcset="" />
                        <div className="priceEvent"><span className="prix orange">{eventPerso.prix}</span><span className="euro orange"><CgEuro /></span></div>
                        <p className="participation PartiPerso">Je participe !</p>
                    </article>

                    <article className="evenementPerso">
                        <span className="titre orange">{eventPerso.titre}</span>
                        <img className="image" id="ClickPersoSix" src={imagePerso} alt="" srcset="" />
                        <div className="priceEvent"><span className="prix orange">{eventPerso.prix}</span><span className="euro orange"><CgEuro /></span></div>
                        <p className="participation PartiPerso">Je participe !</p>
                    </article>

                    <article className="evenementPerso">
                        <span className="titre orange">{eventPerso.titre}</span>
                        <img className="image" id="ClickPersoSept" src={imagePerso} alt="" srcset="" />
                        <div className="priceEvent"><span className="prix orange">{eventPerso.prix}</span><span className="euro orange"><CgEuro /></span></div>
                        <p className="participation PartiPerso">Je participe !</p>
                    </article>
                </div>
            </div>


            <div className="hide" id="detailevent">
                <img className="imageDetail" src={image} alt="" srcset="" />
                <span className="titreEvent catNom grisTexte">Nom :</span><span className="eventExplication detailtitre">{event.titre}</span>
                <span className="titreEvent catLieu grisTexte">Lieu :</span><span className="eventExplication detaillieu">{event.lieu}</span>
                <span className="titreEvent catDebut grisTexte">Début :</span><span className="eventExplication detaildebut">{event.datedebut}</span>
                <span className="titreEvent catFin grisTexte">Fin :</span><span className="eventExplication detailfin">{event.datefin}</span>
                <span className="titreEvent catPrix grisTexte">Prix :</span><span className="eventExplication detailprix">{event.prix} €</span>
                <span className="detaildescription">{event.description}</span>
                <span className=" eventPart" id="catParticipant">Participants</span>
                <button className="catParticipation">Je participe</button>
                <span class="hidetexte eventPart" id="ParticipantsImportants"><ul>
                <p>{event.participant.length} participants dont :</p><br/>
                <li>{event.participant[0]}</li>
                <li>{event.participant[1]}</li>
                <li>{event.participant[2]}</li>
                <li>{event.participant[3]}</li>
                <li>{event.participant[4]}</li>
                <li>{event.participant[5]}</li>
                </ul>
                </span>
            </div>

            <div className="hide" id="detaileventPerso">
                <img className="imageDetailPerso" src={imagePerso} alt="" srcset="" />
                <span className="detailPersotitre">{eventPerso.titre}</span>
                <span className="persoNomination catPersoLieu grisTexte">Lieu :</span><span className="persoCategorie titrePerso detailPersolieu">{eventPerso.lieu}</span>
                <span className="persoNomination catPersoDebut grisTexte">Début :</span><span className="persoCategorie titrePerso detailPersodebut">{eventPerso.datedebut}</span>
                <span className="persoNomination catPersoFin grisTexte">Fin :</span><span className="persoCategorie titrePerso detailPersofin">{eventPerso.datefin}</span>
                <span className="persoNomination catPersoPrix grisTexte">Prix :</span><span className="persoCategorie titrePerso detailPersoprix">{eventPerso.prix} €</span>
                <span className="detailPersodescription">{eventPerso.description}</span>
                <span className="catTop" id="catPersoParticipant">Participants</span>
                <button className="catTop catPersoParticipation">Je participe</button>
                <span class="hidetexte" id="ParticipantsPerso"><ul>
                <p>{eventPerso.participant.length} participants dont :</p><br/>
                <li>{eventPerso.participant[0]}</li>
                <li>{eventPerso.participant[1]}</li>
                <li>{eventPerso.participant[2]}</li>
                <li>{eventPerso.participant[3]}</li>
                <li>{eventPerso.participant[4]}</li>
                <li>{eventPerso.participant[5]}</li>
                </ul></span>
            </div>
            <ButtonAdd />
        </div>            
    )
}
