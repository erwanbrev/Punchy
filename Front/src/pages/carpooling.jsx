import React from "react";
import "../../public/assets/css/carpooling.css"
import imageCar from "../../public/assets/img/imageCarMin.png";
import line from "../../public/assets/img/svg/line.svg";
import user from "../../public/assets/img/user.png"
import { IoStar, IoLogoEuro, IoTimeOutline } from "react-icons/io5";
import { ButtonAdd } from "../components/buttonAdd";
import { AddPunchy } from "../components/addPunchy";
import { ReserveCar } from "../components/reserveCar";
import { AddPunchyCar } from "../components/addPunchyCar";

export const Carpool = () => {

    let profil = {
        name: 'Stephen',
        stars: 5,
        depart: 'Dinard',
        arrivee: 'Saint-Malo',
        heure: '17h30',
        prix: '3',
        time: '15'
    }

    return (
        <div className="containerCar">
            <article className="articleCar">
                <img className="imgCar" src={imageCar} alt="affiche de voiture" />
                <div className="between">
                    <div className="vertical">
                        <div className="profil">
                            <img className="userImage" src={user} alt="image de profil" />
                            <span>{profil.name}</span>
                            <div className="space">
                                <span>{profil.stars}</span>
                                <IoStar color="#FF7A00" />
                            </div>
                        </div>
                        <div className="hDepart">
                            <p>Départ:</p>
                            <span>{profil.heure}</span>
                        </div>
                        <div className="prixCar">
                            <span>{profil.prix}</span>
                            <IoLogoEuro />
                        </div>
                    </div>
                    <div className="vertical">
                        <div className="parcour">
                            <span>{profil.depart}</span>
                            <img className="line" src={line} alt="" />
                            <span>{profil.arrivee}</span>
                        </div>
                        <div className="time">
                            <IoTimeOutline />
                            <p>{profil.time} min</p>
                        </div>
                    </div>
                </div>
            </article>
            <article className="articleCar">
                <img className="imgCar" src={imageCar} alt="affiche de voiture" />
                <div className="between">
                    <div className="vertical">
                        <div className="profil">
                            <img className="userImage" src={user} alt="image de profil" />
                            <span>{profil.name}</span>
                            <div className="space">
                                <span>{profil.stars}</span>
                                <IoStar color="#FF7A00" />
                            </div>
                        </div>
                        <div className="hDepart">
                            <p>Départ:</p>
                            <span>{profil.heure}</span>
                        </div>
                        <div className="prixCar">
                            <span>{profil.prix}</span>
                            <IoLogoEuro />
                        </div>
                    </div>
                    <div className="vertical">
                        <div className="parcour">
                            <span>{profil.depart}</span>
                            <img className="line" src={line} alt="" />
                            <span>{profil.arrivee}</span>
                        </div>
                        <div className="time">
                            <IoTimeOutline />
                            <p>{profil.time} min</p>
                        </div>
                    </div>
                </div>
            </article>
            <article className="articleCar">
                <img className="imgCar" src={imageCar} alt="affiche de voiture" />
                <div className="between">
                    <div className="vertical">
                        <div className="profil">
                            <img className="userImage" src={user} alt="image de profil" />
                            <span>{profil.name}</span>
                            <div className="space">
                                <span>{profil.stars}</span>
                                <IoStar color="#FF7A00" />
                            </div>
                        </div>
                        <div className="hDepart">
                            <p>Départ:</p>
                            <span>{profil.heure}</span>
                        </div>
                        <div className="prixCar">
                            <span>{profil.prix}</span>
                            <IoLogoEuro />
                        </div>
                    </div>
                    <div className="vertical">
                        <div className="parcour">
                            <span>{profil.depart}</span>
                            <img className="line" src={line} alt="" />
                            <span>{profil.arrivee}</span>
                        </div>
                        <div className="time">
                            <IoTimeOutline />
                            <p>{profil.time} min</p>
                        </div>
                    </div>
                </div>
            </article>
            <article className="articleCar">
                <img className="imgCar" src={imageCar} alt="affiche de voiture" />
                <div className="between">
                    <div className="vertical">
                        <div className="profil">
                            <img className="userImage" src={user} alt="image de profil" />
                            <span>{profil.name}</span>
                            <div className="space">
                                <span>{profil.stars}</span>
                                <IoStar color="#FF7A00" />
                            </div>
                        </div>
                        <div className="hDepart">
                            <p>Départ:</p>
                            <span>{profil.heure}</span>
                        </div>
                        <div className="prixCar">
                            <span>{profil.prix}</span>
                            <IoLogoEuro />
                        </div>
                    </div>
                    <div className="vertical">
                        <div className="parcour">
                            <span>{profil.depart}</span>
                            <img className="line" src={line} alt="" />
                            <span>{profil.arrivee}</span>
                        </div>
                        <div className="time">
                            <IoTimeOutline />
                            <p>{profil.time} min</p>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}