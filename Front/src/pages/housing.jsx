import React from "react";
import "../../public/assets/css/housing.css"
import picHouse from "../../public/assets/img/dinan-yannick-dufils-bN7Ae_grzZw-unsplash.jpeg"
import loopImg from "../../public/assets/img/loop.png";
import { IoLogoEuro, IoLocationSharp, IoPieChart, IoPodium, IoStorefront } from "react-icons/io5";
import { MdSouth, MdNorth } from "react-icons/md";
import { ButtonAdd } from "../components/buttonAdd";

export const Housing = () => {

    let contentHouse = {
        name: 'Quentin',
        localization: 'Dinan',
        surface: '9m2',
        price: '450',
        // content: 'Non meublé',
        content: 'Meublé',
        type: 'Appartement'
    }

    return (
        <div>
            <div className="contain-house">
                {/* Barre de filtres */}
                <form id="filterBarH">
                    <label>Trier</label>
                    <input placeholder="Localisation" type="text" />
                    <input placeholder="Surface m²" type="number" />
                    <select name="n-price" >
                        <option value="maritime">Prix</option>
                        {/* intervalle de prix */}
                    </select>
                    <select name="n-content" >
                        <option value="content">Meublé</option>
                        <option value="no-content">Non meublé</option>
                    </select>
                    <select name="n-type" >
                        <option value="type">Type</option>
                        <option value="flat">Appartement</option>
                        <option value="home">Maison</option>
                    </select>

                    <label>Score Punchy</label>
                    <div id="scoreUp">
                        <MdNorth />
                    </div>
                    <div id="scoreDown">
                        <MdSouth />
                    </div>

                    <button type="submit">
                        <img className="loop" src={loopImg} alt="loupe"></img>
                    </button>
                </form>
                {/* 1er article */}
                <article className="art-Housing">
                    <img className="img-housing" src={picHouse} alt="Photo de Yannick Dufils sur Unsplash" />
                    {/* between est l'espace entre la colonne de gauche et de droite */}
                    <div className="between-housing">
                        {/* vertical permet de classer veticalement le contenu*/}
                        {/* colonne de gauche */}
                        <div className="vertical-housing-left">
                            <div className="name-owner">
                                <span>{contentHouse.name}</span>
                            </div>
                            <div className="localization-housing">
                                <IoLocationSharp color="var(--orange)" className="localiz-logo" />
                                <span>{contentHouse.localization}</span>
                            </div>
                            <div className="price-housing">
                                <p>{contentHouse.price}</p>
                                <IoLogoEuro className="price-logo" />
                            </div>
                        </div>
                        {/* colonne de droite */}
                        <div className="vertical-housing-right">
                            <div className="type-housing">
                                <IoStorefront color="var(--orange)" className="housing-logo" />
                                <span>{contentHouse.type}</span>
                            </div>
                            <div className="content-housing">
                                <IoPodium color="var(--orange)" className="content-logo" />
                                <span>{contentHouse.content}</span>
                            </div>
                            <div className="surface-housing">
                                <IoPieChart color="var(--orange)" className="surface-logo" />
                                <span>{contentHouse.surface}</span>
                            </div>
                        </div>
                    </div>
                </article>
                {/* 2eme article */}
                <article className="art-Housing">
                    <img className="img-housing" src={picHouse} alt="Photo de Yannick Dufils sur Unsplash" />
                    {/* between est l'espace entre la colonne de gauche et de droite */}
                    <div className="between-housing">
                        {/* vertical permet de classer veticalement le contenu*/}
                        {/* colonne de gauche */}
                        <div className="vertical-housing-left">
                            <div className="name-owner">
                                <span>{contentHouse.name}</span>
                            </div>
                            <div className="localization-housing">
                                <IoLocationSharp color="var(--orange)" className="localiz-logo" />
                                <span>{contentHouse.localization}</span>
                            </div>
                            <div className="price-housing">
                                <p>{contentHouse.price}</p>
                                <IoLogoEuro className="price-logo" />
                            </div>
                        </div>
                        {/* colonne de droite */}
                        <div className="vertical-housing-right">
                            <div className="type-housing">
                                <IoStorefront color="var(--orange)" className="housing-logo" />
                                <span>{contentHouse.type}</span>
                            </div>
                            <div className="content-housing">
                                <IoPodium color="var(--orange)" className="content-logo" />
                                <span>{contentHouse.content}</span>
                            </div>
                            <div className="surface-housing">
                                <IoPieChart color="var(--orange)" className="surface-logo" />
                                <span>{contentHouse.surface}</span>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="art-Housing">
                    <img className="img-housing" src={picHouse} alt="Photo de Yannick Dufils sur Unsplash" />
                    {/* between est l'espace entre la colonne de gauche et de droite */}
                    <div className="between-housing">
                        {/* vertical permet de classer veticalement le contenu*/}
                        {/* colonne de gauche */}
                        <div className="vertical-housing-left">
                            <div className="name-owner">
                                <span>{contentHouse.name}</span>
                            </div>
                            <div className="localization-housing">
                                <IoLocationSharp color="var(--orange)" className="localiz-logo" />
                                <span>{contentHouse.localization}</span>
                            </div>
                            <div className="price-housing">
                                <p>{contentHouse.price}</p>
                                <IoLogoEuro className="price-logo" />
                            </div>
                        </div>
                        {/* colonne de droite */}
                        <div className="vertical-housing-right">
                            <div className="type-housing">
                                <IoStorefront color="var(--orange)" className="housing-logo" />
                                <span>{contentHouse.type}</span>
                            </div>
                            <div className="content-housing">
                                <IoPodium color="var(--orange)" className="content-logo" />
                                <span>{contentHouse.content}</span>
                            </div>
                            <div className="surface-housing">
                                <IoPieChart color="var(--orange)" className="surface-logo" />
                                <span>{contentHouse.surface}</span>
                            </div>
                        </div>
                    </div>
                </article>    <article className="art-Housing">
                    <img className="img-housing" src={picHouse} alt="Photo de Yannick Dufils sur Unsplash" />
                    {/* between est l'espace entre la colonne de gauche et de droite */}
                    <div className="between-housing">
                        {/* vertical permet de classer veticalement le contenu*/}
                        {/* colonne de gauche */}
                        <div className="vertical-housing-left">
                            <div className="name-owner">
                                <span>{contentHouse.name}</span>
                            </div>
                            <div className="localization-housing">
                                <IoLocationSharp color="var(--orange)" className="localiz-logo" />
                                <span>{contentHouse.localization}</span>
                            </div>
                            <div className="price-housing">
                                <p>{contentHouse.price}</p>
                                <IoLogoEuro className="price-logo" />
                            </div>
                        </div>
                        {/* colonne de droite */}
                        <div className="vertical-housing-right">
                            <div className="type-housing">
                                <IoStorefront color="var(--orange)" className="housing-logo" />
                                <span>{contentHouse.type}</span>
                            </div>
                            <div className="content-housing">
                                <IoPodium color="var(--orange)" className="content-logo" />
                                <span>{contentHouse.content}</span>
                            </div>
                            <div className="surface-housing">
                                <IoPieChart color="var(--orange)" className="surface-logo" />
                                <span>{contentHouse.surface}</span>
                            </div>
                        </div>
                    </div>
                </article>    <article className="art-Housing">
                    <img className="img-housing" src={picHouse} alt="Photo de Yannick Dufils sur Unsplash" />
                    {/* between est l'espace entre la colonne de gauche et de droite */}
                    <div className="between-housing">
                        {/* vertical permet de classer veticalement le contenu*/}
                        {/* colonne de gauche */}
                        <div className="vertical-housing-left">
                            <div className="name-owner">
                                <span>{contentHouse.name}</span>
                            </div>
                            <div className="localization-housing">
                                <IoLocationSharp color="var(--orange)" className="localiz-logo" />
                                <span>{contentHouse.localization}</span>
                            </div>
                            <div className="price-housing">
                                <p>{contentHouse.price}</p>
                                <IoLogoEuro className="price-logo" />
                            </div>
                        </div>
                        {/* colonne de droite */}
                        <div className="vertical-housing-right">
                            <div className="type-housing">
                                <IoStorefront color="var(--orange)" className="housing-logo" />
                                <span>{contentHouse.type}</span>
                            </div>
                            <div className="content-housing">
                                <IoPodium color="var(--orange)" className="content-logo" />
                                <span>{contentHouse.content}</span>
                            </div>
                            <div className="surface-housing">
                                <IoPieChart color="var(--orange)" className="surface-logo" />
                                <span>{contentHouse.surface}</span>
                            </div>
                        </div>
                    </div>
                </article>    <article className="art-Housing">
                    <img className="img-housing" src={picHouse} alt="Photo de Yannick Dufils sur Unsplash" />
                    {/* between est l'espace entre la colonne de gauche et de droite */}
                    <div className="between-housing">
                        {/* vertical permet de classer veticalement le contenu*/}
                        {/* colonne de gauche */}
                        <div className="vertical-housing-left">
                            <div className="name-owner">
                                <span>{contentHouse.name}</span>
                            </div>
                            <div className="localization-housing">
                                <IoLocationSharp color="var(--orange)" className="localiz-logo" />
                                <span>{contentHouse.localization}</span>
                            </div>
                            <div className="price-housing">
                                <p>{contentHouse.price}</p>
                                <IoLogoEuro className="price-logo" />
                            </div>
                        </div>
                        {/* colonne de droite */}
                        <div className="vertical-housing-right">
                            <div className="type-housing">
                                <IoStorefront color="var(--orange)" className="housing-logo" />
                                <span>{contentHouse.type}</span>
                            </div>
                            <div className="content-housing">
                                <IoPodium color="var(--orange)" className="content-logo" />
                                <span>{contentHouse.content}</span>
                            </div>
                            <div className="surface-housing">
                                <IoPieChart color="var(--orange)" className="surface-logo" />
                                <span>{contentHouse.surface}</span>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
            <ButtonAdd />
        </div>
    )
}