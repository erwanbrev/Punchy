import { useState, useEffect } from 'react';
import img from '../../public/assets/img/routeDuRock.jpg';
import user from '../../public/assets/img/user.png';
import { IoStar, IoLogoEuro, IoTimeOutline, IoPerson } from 'react-icons/io5';
import '../../public/assets/css/accueil.css';
import { ButtonAdd } from '../components/buttonAdd';
import { useNavigate } from 'react-router-dom';

export const Accueil = () => {
	const navigate = useNavigate();
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

	const moreInfos = () => {
		navigate('/carpool', { replace: true });
	};

	return (
		<div className="accueil">
			{events.map(event => {
				const users = event.users.slice(0, 4);
				return (
					<div className="card">
						<div className="absolute">{event.category}</div>
						<img className="acAffiche" src={event.pictures[1]} alt="affiche de l'évènement" />
						<div className="row1">
							<div className="gap">
								<div className="prixCar">
									<span>{event.price}</span>
									<IoLogoEuro size="20" />
								</div>
								<div className="amis">
									<div className="friends">
										{users.map(user => {
											return <img className="pUser" src={user.profilePicture} alt="" />;
										})}
									</div>
									<div className="number">
										<IoPerson size="25" />
										<p>{event.users.length}</p>
									</div>
								</div>
							</div>
							<button className="btnAdd" onClick={moreInfos}>
								Plus d'infos
							</button>
						</div>
					</div>
				);
			})}
			<ButtonAdd />
		</div>
	);
};
