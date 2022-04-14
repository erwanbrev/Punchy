import { useState, useEffect } from 'react';
import img from '../../public/assets/img/routeDuRock.jpg';
import user from '../../public/assets/img/user.png';
import { IoStar, IoLogoEuro, IoTimeOutline, IoPerson } from 'react-icons/io5';
import '../../public/assets/css/accueil.css';
import { ButtonAdd } from '../components/buttonAdd';

export const Accueil = () => {
	let [events, setEvents] = useState([]);

	useEffect(() => {
		fetch('http://localhost:5000/event/popular')
			.then(response => {
				return response.json();
			})
			.then(({ response }) => {
				setEvents(response);
			})
			.catch(err => {
				console.log(err.message);
			});
	}, []);

    let profil = {
        prix: 53,
        amis: 13,
        activite: 'Festival'
    }

    return (
        <div className="accueil">
            <div className="card">
                <div className="absolute">{profil.activite}</div>
                <img className='acAffiche' src={img} alt="affiche de l'évènement" />
                <div className="row1">
                    <div className="gap">
                        <div className="prixCar">
                            <span>{profil.prix}</span>
                            <IoLogoEuro size="20"/>
                        </div>
                        <div className="amis">
                            <div className="friends">
                                <img className='pUser' src={user} alt="" />
                                <img className='pUser' src={user} alt="" />
                                <img className='pUser' src={user} alt="" />
                                <img className='pUser' src={user} alt="" />
                            </div>
                            <div className="number">
                                <IoPerson size="25"/>
                                <p>{profil.amis}</p>
                            </div> 
                        </div>
                    </div>
                    <button className='btnAdd'>Je participe</button>
                </div>
            </div>
            <ButtonAdd />
            <div className="card">
                <img className='acAffiche' src={img} alt="affiche de l'évènement" />
                <div className="row1">
                    <div className="gap">
                        <div className="prixCar">
                            <span>{profil.prix}</span>
                            <IoLogoEuro size="20"/>
                        </div>
                        <div className="amis">
                            <div className="friends">
                                <img className='pUser' src={user} alt="" />
                                <img className='pUser' src={user} alt="" />
                                <img className='pUser' src={user} alt="" />
                                <img className='pUser' src={user} alt="" />
                            </div>
                            <div className="number">
                                <IoPerson size="25"/>
                                <p>{profil.amis}</p>
                            </div> 
                        </div>
                    </div>
                    <button className='btnAdd'>Je participe</button>
                </div>
            </div>
        </div>
    )
}
