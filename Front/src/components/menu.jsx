import react from "react";
import { icons } from "react-icons";
import { Link } from "react-router-dom";
// import logo from "../../public/assets/img/logo.png";

export const Navbar = () => {
    return (
        <div>
            <nav className="leftMenu">
                <div id="logo">
                    {/* <img src="{logo}" alt="logo" /> */}
                    <h1>Punchy</h1>
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
        </div>
    )
}