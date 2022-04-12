import React from "react";
import { icons } from "react-icons";
import { Link, NavLink, NavNavLink } from "react-router-dom";
import logo from "./../../public/assets/img/svg/logo.svg";

export const Navbar = () => {
    return (
        <div>
            {/* Header version Mobile */}
            <nav className="mobile-head">
                <div id="logo-mobile">
                    <Link to="/">
                        <img src={logo} alt="logo-mobile" />
                    </Link>
                </div>
            </nav>
            {/* Menu latérale gauche version Desktop */}
            <nav className="leftMenu">
                <div id="logo">
                    <Link to="/" ><img src={logo} alt="logo" /></Link>
                </div>
                <div className="cont-Nav">
                    <NavLink activeclassname="active" to="/event" className="nameNav" ><img
                        src={require('../../public/assets/img/svg/evenement.svg')} alt="logo-event" /> <span id="event">Événement</span> </NavLink>
                    <NavLink activeclassname="active" to="/carpool" className="nameNav"><img src={require('../../public/assets/img/svg/covoit.svg')} alt="logo-covoit" />Covoiturage</NavLink>
                    <NavLink activeclassname="active" to="/housing" className="nameNav"><img src={require('../../public/assets/img/svg/itineraire.svg')} alt="logo-geoloc" />Logement</NavLink>
                    <NavLink activeclassname="active" to="/friends" className="nameNav"><img src={require('../../public/assets/img/svg/nb_personnes.svg')} alt="logo-amis" />Amis</NavLink>
                </div>
                <div className="min-compte">
                    <NavLink to="/login" className="nameNav">
                        <img src={require('../../public/assets/img/svg/nb_personnes.svg')} alt="min-login" /> <span className="event">Connexion</span>
                    </NavLink>
                    <NavLink to="/register" className="nameNav">
                        <img src={require('../../public/assets/img/svg/nb_personnes.svg')} alt="min-inscription" /> <span className="event">Inscription</span>
                    </NavLink>
                </div>
            </nav >

            {/* Version Mobile */}
            <nav className="bottomMenu" >
                <div className="cont-Nav">
                    <NavLink activeclassname="active" to="/event" className="nameNav"><img
                        src={require('../../public/assets/img/svg/evenement.svg')} alt="logo-event" /></NavLink>
                    <NavLink activeclassname="active" to="/covoit" className="nameNav"><img src={require('../../public/assets/img/svg/covoit.svg')} alt="logo-covoit" /></NavLink>
                    <NavLink activeclassname="active" to="/geoloc" className="nameNav"><img src={require('../../public/assets/img/svg/itineraire.svg')} alt="logo-geoloc" /></NavLink>
                    <NavLink activeclassname="active" to="/amis" className="nameNav"><img src={require('../../public/assets/img/svg/nb_personnes.svg')} alt="logo-amis" /></NavLink>
                </div>
                <div className="min-compte">
                    <NavLink activeclassname="active" to="/inscription">
                        <img src={require('../../public/assets/img/svg/nb_personnes.svg')} alt="min-inscription" />
                    </NavLink>
                    <NavLink activeclassname="active" to="/connexion">
                        <img src={require('../../public/assets/img/svg/nb_personnes.svg')} alt="min-inscription" />
                    </NavLink>
                </div>
            </nav >
        </div>
    )
}