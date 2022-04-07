import react from "react";
import { icons } from "react-icons";
import { Link } from "react-router-dom";
import logo from "../../public/assets/img/svg/logo.svg";

export const Navbar = () => {
    return (
        <div>
            {/* Header version Mobile */}
            <nav className="mobile-head">
                <div id="logo-mobile">
                    <img src="{logo}" alt="logo-mobile" />
                </div>
            </nav>
            {/* Menu latérale gauche version Desktop */}
            <nav className="leftMenu">
                <div id="logo">
                    <img src="{logo}" alt="logo" />
                </div>
                <div className="cont-Nav">
                    <Link to="/event" className="nameNav"><img
                        src={require('../../public/assets/img/svg/evenement.svg')} alt="logo-event" /> <span className="event">Évènement</span> </Link>
                    <Link to="/covoit" className="nameNav"><img src={require('../../public/assets/img/svg/covoit.svg')} alt="logo-covoit" />Covoiturage</Link>
                    <Link to="/geoloc" className="nameNav"><img src={require('../../public/assets/img/svg/itineraire.svg')} alt="logo-geoloc" />Location</Link>
                    <Link to="/amis" className="nameNav"><img src={require('../../public/assets/img/svg/nb_personnes.svg')} alt="logo-amis" />Amis</Link>
                </div>
                <div className="min-compte">
                    <Link to="/compte">
                        <img src={require('../../public/assets/img/svg/nb_personnes.svg')} alt="min-compte" /> <span className="event">Pseudo</span>
                    </Link>
                </div>
            </nav>
            {/* Version Mobile */}

            <nav className="bottomMenu">
                <div className="cont-Nav">
                    <Link to="/event" className="nameNav"><img
                        src={require('../../public/assets/img/svg/evenement.svg')} alt="logo-event" /></Link>
                    <Link to="/covoit" className="nameNav"><img src={require('../../public/assets/img/svg/covoit.svg')} alt="logo-covoit" /></Link>
                    <Link to="/geoloc" className="nameNav"><img src={require('../../public/assets/img/svg/itineraire.svg')} alt="logo-geoloc" /></Link>
                    <Link to="/amis" className="nameNav"><img src={require('../../public/assets/img/svg/nb_personnes.svg')} alt="logo-amis" /></Link>
                </div>
                <div className="min-compte">
                    <Link to="/compte">
                        <img src={require('../../public/assets/img/svg/nb_personnes.svg')} alt="min-compte" />
                    </Link>
                </div>
            </nav>
        </div>
    )
}