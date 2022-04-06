import react from "react";
import { icons } from "react-icons";
import { Link } from "react-router-dom";
// import logo from "../../public/assets/img/logo.png";

export const Navbar = () => {
    return (
        <div>
            <nav className="leftMenu">
                <div id="logo">
                    <img src="{logo}" alt="logo" />
                </div>
                <div>
                    <Link to="/" className="nameNav"><img src="#" alt="logo-home" />Home</Link>
                    <Link to="/event" className="nameNav"><img src="#" alt="logo-event" />Évènement</Link>
                    <Link to="/covoit" className="nameNav"><img src="#" alt="logo-covoit" />Covoiturage</Link>
                    <Link to="/geoloc" className="nameNav"><img src="#" alt="logo-geoloc" />Location</Link>
                </div>
            </nav>
        </div>
    )
}