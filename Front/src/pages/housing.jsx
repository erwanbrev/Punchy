import React from "react";
import "../../public/assets/css/housing.css"
import user from "../../public/assets/img/user.png"
import picHouse from "../../public/assets/img/dinan-yannick-dufils-bN7Ae_grzZw-unsplash.jpeg"
import { IoStar, IoLogoEuro, IoTimeOutline } from "react-icons/io5";
import { Searchbar } from "../components/searchbar";

export const Housing = () => {

    let contentHouse = {
        name: 'Quentin',
        stars: 5,
        localization: 'Dinan',
        surface: '9m2',
        price: '450',
        // content: 'Non meublé',
        content: 'Meublé',
        type: 'Appartement',
    }

    return (
        <div className="cont-housing">
            <article className="art-Housing">
                <img className="img-housing" src={picHouse} alt="Photo de Yannick Dufils sur Unsplash" />
                <div className="between">
                    <div className="vertical">
                        <div className="contentHouse">
                            <img className="userImage" src={user} alt="image de profil" />
                            <span>{contentHouse.name}</span>
                            <div className="space">
                                <span>{contentHouse.stars}</span>
                                <IoStar color="#FF7A00" />
                            </div>
                        </div>
                        <div className="hDepart">
                            <p>Localisation :</p>
                            <span>{contentHouse.localization}</span>
                        </div>
                        <div className="price">
                            <span>{contentHouse.price}</span>
                            <IoLogoEuro />
                        </div>
                    </div>
                    <div className="vertical">
                        <div className="parcours">
                            <span>{contentHouse.depart}</span>
                        </div>
                        <div className="time">
                            <IoTimeOutline />
                            <p>{contentHouse.time} min</p>
                        </div>
                    </div>
                </div>
            </article>
            <article className="art-housing">
                <img className="img-housing" src={picHouse} alt="affiche de voiture" />
                <div className="between">
                    <div className="vertical">
                        <div className="contentHouse">
                            <img className="userImage" src={user} alt="image de profil" />
                            <span>{contentHouse.name}</span>
                            <div className="space">
                                <span>{contentHouse.stars}</span>
                                <IoStar color="#FF7A00" />
                            </div>
                        </div>
                        <div className="hDepart">
                            <p>Départ:</p>
                            <span>{contentHouse.heure}</span>
                        </div>
                        <div className="price">
                            <span>{contentHouse.price}</span>
                            <IoLogoEuro />
                        </div>
                    </div>
                    <div className="vertical">
                        <div className="parcour">
                            <span>{contentHouse.depart}</span>
                            {/* <img className="line" src={line} alt="" /> */}
                            <span>{contentHouse.arrivee}</span>
                        </div>
                        <div className="time">
                            <IoTimeOutline />
                            <p>{contentHouse.time} min</p>
                        </div>
                    </div>
                </div>
            </article>
            <article className="art-housing">
                <img className="img-housing" src={picHouse} alt="affiche de voiture" />
                <div className="between">
                    <div className="vertical">
                        <div className="contentHouse">
                            <img className="userImage" src={user} alt="image de profil" />
                            <span>{contentHouse.name}</span>
                            <div className="space">
                                <span>{contentHouse.stars}</span>
                                <IoStar color="#FF7A00" />
                            </div>
                        </div>
                        <div className="hDepart">
                            <p>Départ:</p>
                            <span>{contentHouse.heure}</span>
                        </div>
                        <div className="price">
                            <span>{contentHouse.price}</span>
                            <IoLogoEuro />
                        </div>
                    </div>
                    <div className="vertical">
                        <div className="parcour">
                            <span>{contentHouse.depart}</span>
                            <img className="line" src={line} alt="" />
                            <span>{contentHouse.arrivee}</span>
                        </div>
                        <div className="time">
                            <IoTimeOutline />
                            <p>{contentHouse.time} min</p>
                        </div>
                    </div>
                </div>
            </article>
            <article className="art-housing">
                <img className="img-housing" src={picHouse} alt="affiche de voiture" />
                <div className="between">
                    <div className="vertical">
                        <div className="contentHouse">
                            <img className="userImage" src={user} alt="image de profil" />
                            <span>{contentHouse.name}</span>
                            <div className="space">
                                <span>{contentHouse.stars}</span>
                                <IoStar color="#FF7A00" />
                            </div>
                        </div>
                        <div className="hDepart">
                            <p>Départ:</p>
                            <span>{contentHouse.heure}</span>
                        </div>
                        <div className="price">
                            <span>{contentHouse.price}</span>
                            <IoLogoEuro />
                        </div>
                    </div>
                    <div className="vertical">
                        <div className="parcour">
                            <span>{contentHouse.depart}</span>
                            <img className="line" src={line} alt="" />
                            <span>{contentHouse.arrivee}</span>
                        </div>
                        <div className="time">
                            <IoTimeOutline />
                            <p>{contentHouse.time} min</p>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}