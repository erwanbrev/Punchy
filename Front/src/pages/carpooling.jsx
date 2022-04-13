import React, { useState, useEffect } from 'react';
import '../../public/assets/css/carpooling.css';
import imageCar from '../../public/assets/img/imageCarMin.png';
import line from '../../public/assets/img/svg/line.svg';
import { IoStar, IoLogoEuro, IoTimeOutline } from 'react-icons/io5';
import { BouttonPlus, ButtonAdd } from '../components/buttonAdd';
import { AddPunchy } from '../components/addPunchy';
import { ReserveCar } from '../components/reserveCar';

export const Carpool = () => {
	let [data, setData] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3000/carpooling')
			.then(response => {
				return response.json();
			})
			.then(result => {
				console.log(result);
				setData(result);
			});
	}, []);

	const handleClick = e => {
		console.log(e);
		const a = document.querySelector(`article[data-id="${e}"] .reserveCarDiv`);
		console.log(a);
		a.hidden = !a.hidden;
	};

	return (
		<div className="containerCar">
			{data.map(profil => {
				const startDate = new Date(profil.startTime);
				const day = startDate.getDate();
				const month = startDate.getMonth() + 1;
				const hours = startDate.getHours();
				const minutes = startDate.getMinutes();
				if (minutes < 10) {
					minutes = '0' + minutes;
				}

				const startTime = day + '/' + month + ' ' + hours + ':' + minutes;

				const time = new Date(profil.endTime).getTime() - new Date(profil.startTime).getTime();
				const hoursTime = Math.floor(time / (1000 * 60 * 60));
				const minutesTime = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
				const timeCarpooling = hoursTime + 'h' + minutesTime;

				let note = profil.driver.notation.reduce((total, note) => total + note, 0) / profil.driver.notation.length;

				if (isNaN(note)) {
					note = 'Ø';
				}

				return (
					<article className="articleCar" data-id={profil.id} onClick={() => handleClick(profil.id)}>
						<div className="reserveCarDiv" hidden>
							<ReserveCar informations={profil} />
						</div>
						<img className="imgCar" src={imageCar} alt="affiche de voiture" />
						<div className="between">
							<div className="vertical">
								<div className="profil">
									<img className="userImage" src={profil.driver.profilePicture} alt="image de profil" />
									<span>{profil.driver.fName}</span>
									<div className="space">
										<span>{note}</span>
										<IoStar color="#FF7A00" />
									</div>
								</div>
								<div className="hDepart">
									<p>Départ:</p>
									<span>{startTime}</span>
								</div>
								<div className="prixCar">
									<span>{profil.price}</span>
									<IoLogoEuro />
								</div>
							</div>
							<div className="vertical">
								<div className="parcour">
									<span>{profil.startLocalisation}</span>
									<img className="line" src={line} alt="" />
									<span>{profil.endLocalisation}</span>
								</div>
								<div className="time">
									<IoTimeOutline />
									<p>{timeCarpooling}</p>
								</div>
							</div>
						</div>
					</article>
				);
			})}
			<ButtonAdd /> 
		</div>
	);
};
