import React from "react";
import "../../public/assets/css/housing.css"
import user from "../../public/assets/img/user.png"
import picHouse from "../../public/assets/img/dinan-yannick-dufils-bN7Ae_grzZw-unsplash.jpeg"
import { IoStar, IoLogoEuro, IoLocationSharp, IoPieChart, IoPodium, IoStorefront } from "react-icons/io5";
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
        <div className="cont-house">
            <article className="art-Housing">
                <img className="img-housing" src={picHouse} alt="Photo de Yannick Dufils sur Unsplash" />
                {/* between est l'espace entre la colonne de gauche et de droite */}
                <div className="between">
                    {/* vertical permet de classer veticalement le contenu*/}
                    <div className="vertical">
                        <div className="contentHouse">
                            <span>{contentHouse.name}</span>
                            <div>
                                <span>{contentHouse.stars}</span>
                                <IoStar color="#FF7A00" />
                            </div>
                        </div>
                        <div className="localization">
                            <span>{contentHouse.localization}</span>
                            <IoLocationSharp />
                        </div>
                        <div className="surface">
                            <span>{contentHouse.surface}</span>
                            <IoPieChart />
                        </div>
                    </div>
                    <div className="vertical">
                        <div className="type">
                            <p>{contentHouse.type}</p>
                            <IoStorefront />
                        </div>
                        <div className="content">
                            <p>{contentHouse.content}</p>
                            <IoPodium />
                        </div>
                        <div className="price">
                            <span>{contentHouse.price}</span>
                            <IoLogoEuro />
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}