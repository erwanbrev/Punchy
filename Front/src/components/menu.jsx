import React, { useEffect } from 'react';
import { IoBeer, IoCarSharp, IoBusiness, IoPersonAdd, IoPersonCircle } from 'react-icons/io5';
import { Link, NavLink, NavNavLink, useNavigate } from 'react-router-dom';
import { Authentification } from './account/auth';
import logo from './../../public/assets/img/svg/logo.svg';
import '../../public/assets/css/main.css';

export const Navbar = props => {
	const navigate = useNavigate();

	useEffect(() => {
		// console.log('authMenu', Authentification.isAuthenticated())
		console.log(Authentification.checkAuthentication());
	}, [navigate]);

	const leftMenu = () => {
		const a = document.querySelector('.leftMenu');
		a.classList.toggle('left');
	};

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
					<Link to="/">
						<img src={logo} alt="logo" />
					</Link>
				</div>
				<p className="iconLeft" onClick={leftMenu}></p>
				<div className="cont-Nav">
					<NavLink activeclassname="active" to="/event" className="nameNav">
						{' '}
						<IoBeer className="iconMenu" color="#FFF" size="20" /> <span>Événement</span>{' '}
					</NavLink>
					<NavLink activeclassname="active" to="/carpool" className="nameNav">
						{' '}
						<IoCarSharp className="iconMenu" color="#FFF" size="20" /> <span>Covoiturage</span>
					</NavLink>
					<NavLink activeclassname="active" to="/housing" className="nameNav">
						{' '}
						<IoBusiness className="iconMenu" color="#FFF" size="20" /> <span>Logement</span>
					</NavLink>
					{Authentification.checkAuthentication() ? (
						<>
							<NavLink activeclassname="active" to="/friends" className="nameNav">
								{' '}
								<IoPersonAdd className="iconMenu" color="#FFF" size="20" /> <span>Amis</span>
							</NavLink>
						</>
					) : (
						<></>
					)}
				</div>
				<div className="min-compte">
					{Authentification.checkAuthentication() ? (
						// Si authentifier affiche btn profil
						<>
							<NavLink to="/profil" className="nameNav">
								<IoPersonCircle className="iconMenu" color="#FFF" size="20" /> <span className="event">Profil</span>
							</NavLink>
							<NavLink to="" className="nameNav" onClick={Authentification.logout}>
								<IoPersonCircle className="iconMenu" color="#FFF" size="20" /> <span className="event">Déconnexion</span>
							</NavLink>
						</>
					) : (
						// sinon affiche inscription/connexion
						<>
							<NavLink to="/login" className="nameNav">
								<IoPersonCircle className="iconMenu" color="#FFF" size="20" /> <span className="event">Connexion</span>
							</NavLink>
							<NavLink to="/register" className="nameNav">
								<IoPersonCircle className="iconMenu" color="#FFF" size="20" /> <span className="event">Inscription</span>
							</NavLink>
						</>
					)}
				</div>
			</nav>

			{/* Version Mobile */}
			<nav className="bottomMenu">
				{/* <div className="cont-Nav">
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
                </div> */}
			</nav>
		</div>
	);
};
