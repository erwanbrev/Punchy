import React from "react";
import { icons } from "react-icons";
import { Link } from "react-router-dom";
import logo from "./../../public/assets/img/svg/logo.svg";


function clickUpper(){
    
}
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
                    <Link to="/event" className="nameNav" onClick={clickUpper}><img
                        src={require('../../public/assets/img/svg/evenement.svg')} alt="logo-event" /> <span id="event">Événement</span> </Link>
                    <Link to="/carpool" className="nameNav"><img src={require('../../public/assets/img/svg/covoit.svg')} alt="logo-covoit" />Covoiturage</Link>
                    <Link to="/housing" className="nameNav"><img src={require('../../public/assets/img/svg/itineraire.svg')} alt="logo-geoloc" />Logement</Link>
                    <Link to="/friends" className="nameNav"><img src={require('../../public/assets/img/svg/nb_personnes.svg')} alt="logo-amis" />Amis</Link>
                </div>
                <div className="min-compte">
                    <Link to="/register" className="nameNav">
                        <img src={require('../../public/assets/img/svg/nb_personnes.svg')} alt="min-inscription" /> <span className="event">Inscription</span>
                    </Link>
                </div>
            </nav >

            {/* Version Mobile */}
            <nav className="bottomMenu" >
                <div className="cont-Nav">
                    <Link to="/event" className="nameNav"><img
                        src={require('../../public/assets/img/svg/evenement.svg')} alt="logo-event" /></Link>
                    <Link to="/covoit" className="nameNav"><img src={require('../../public/assets/img/svg/covoit.svg')} alt="logo-covoit" /></Link>
                    <Link to="/geoloc" className="nameNav"><img src={require('../../public/assets/img/svg/itineraire.svg')} alt="logo-geoloc" /></Link>
                    <Link to="/amis" className="nameNav"><img src={require('../../public/assets/img/svg/nb_personnes.svg')} alt="logo-amis" /></Link>
                </div>
                <div className="min-compte">
                    <Link to="/inscription">
                        <img src={require('../../public/assets/img/svg/nb_personnes.svg')} alt="min-inscription" />
                    </Link>
                </div>
            </nav >
        </div>
    )
}