import React from "react";
import { icons } from "react-icons";
import { NavLink } from "react-router-dom";
import logo from "./../../public/assets/img/svg/logo.svg";


function clickUpper() {

}
export const Navbar = () => {
    return (
        <div>
            {/* Header version Mobile */}
            <nav className="mobile-head">
                <div id="logo-mobile">
                    <NavLink to="/">
                        <img src={logo} alt="logo-mobile" />
                    </NavLink>
                </div>
            </nav>
            {/* Menu latérale gauche version Desktop */}
            <nav className="leftMenu">
                <div id="logo">
                    <NavLink to="/" ><img src={logo} alt="logo" /></NavLink>
                </div>
                <div className="cont-Nav">
                    <NavLink exact activeClassName="active" to="/event" className="nameNav" ><img
                        src={require('../../public/assets/img/svg/evenement.svg')} alt="logo-event" /> <span id="event">Événement</span> </NavLink>
                    <NavLink activeClassName="active" to="/carpool" className="nameNav"><img src={require('../../public/assets/img/svg/covoit.svg')} alt="logo-covoit" />Covoiturage</NavLink>
                    <NavLink activeClassName="active" to="/housing" className="nameNav"><img src={require('../../public/assets/img/svg/itineraire.svg')} alt="logo-geoloc" />Logement</NavLink>
                    <NavLink activeClassName="active" to="/friends" className="nameNav"><img src={require('../../public/assets/img/svg/nb_personnes.svg')} alt="logo-amis" />Amis</NavLink>
                </div>
                <div className="min-compte">
                    <NavLink activeClassName="active" to="/register" className="nameNav">
                        <img src={require('../../public/assets/img/svg/nb_personnes.svg')} alt="min-inscription" /> <span className="event">Inscription</span>
                    </NavLink>
                </div>
            </nav >

            {/* Version Mobile */}
            <nav className="bottomMenu" >
                <div className="cont-Nav">
                    <NavLink exact activeClassName="active" to="/event" className="nameNav"><img
                        src={require('../../public/assets/img/svg/evenement.svg')} alt="logo-event" /></NavLink>
                    <NavLink activeClassName="active" to="/covoit" className="nameNav"><img src={require('../../public/assets/img/svg/covoit.svg')} alt="logo-covoit" /></NavLink>
                    <NavLink activeClassName="active" to="/geoloc" className="nameNav"><img src={require('../../public/assets/img/svg/itineraire.svg')} alt="logo-geoloc" /></NavLink>
                    <NavLink activeClassName="active" to="/amis" className="nameNav"><img src={require('../../public/assets/img/svg/nb_personnes.svg')} alt="logo-amis" /></NavLink>
                </div>
                <div className="min-compte">
                    <NavLink activeClassName="active" to="/inscription">
                        <img src={require('../../public/assets/img/svg/nb_personnes.svg')} alt="min-inscription" />
                    </NavLink>
                </div>
            </nav >
        </div>
    )
}