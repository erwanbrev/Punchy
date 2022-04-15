import React, { useState, useEffect } from 'react';
import '../../public/assets/css/carpooling.css';
import imageCar from '../../public/assets/img/imageCarMin.png';
import line from '../../public/assets/img/svg/line.svg';
import { IoStar, IoLogoEuro, IoTimeOutline } from 'react-icons/io5';
import { BouttonPlus, ButtonAdd } from '../components/buttonAdd';
import { AddPunchy } from '../components/addPunchy';
import { SearchBarCar } from '../components/searchBarCar';
import { ReserveCar } from '../components/reserveCar';
import { AddPunchyCar } from '../components/addPunchyCar';

export const Carpool = () => {
	let [data, setData] = useState([]);
	let [showPopup, setShowPopup] = useState(false);
	let [popupInfos, setPopupInfos] = useState([false, { driver: { notation: [] } }]);

	useEffect(() => {
		fetch('http://localhost:5000/carpooling')
			.then(response => {
				return response.json();
			})
			.then(({ response }) => {
				console.log(response);
				setData(response);
			});
	}, []);

	const handleClick = e => {
		setPopupInfos([!popupInfos[0], e]);
		const sombreDiv = document.querySelector('#sombre');
		sombreDiv.classList.toggle('sombre');
	};

	const setPopup = () => {
		setShowPopup(!showPopup);
		const sombreDiv = document.querySelector('#sombre');
		sombreDiv.classList.toggle('sombre');
	};

	return (
		<div>
			<SearchBarCar />
			<div className="containerCar">
				{data.map(profil => {
					const startDate = new Date(profil.startTime);
					const day = startDate.getDate();
					const month = startDate.getMonth() + 1;
					const hours = startDate.getHours();
					let minutes = startDate.getMinutes();
					if (minutes < 10) {
						minutes = '0' + minutes;
					}

					let startTime = day + '/' + month + ' ' + hours + ':' + minutes;

					const time = new Date(profil.endTime).getTime() - new Date(profil.startTime).getTime();
					let hoursTime = Math.floor(time / (1000 * 60 * 60));
					if (hoursTime < 10) {
						hoursTime = '0' + hoursTime;
					}
					let minutesTime = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
					if (minutesTime < 10) {
						minutesTime = '0' + minutesTime;
					}
					const timeCarpooling = hoursTime + 'h' + minutesTime;

					if (minutesTime < 10) {
						minutesTime = '00' + minutesTime;
					}

					let note = profil.driver.notation.reduce((total, note) => total + note, 0) / profil.driver.notation.length;

					if (isNaN(note)) {
						note = 'Ø';
					}
					return (
						<article className="articleCar" data-id={profil.id} onClick={() => handleClick(profil)}>
							<img className="imgCar" src={imageCar} alt="affiche de voiture" />
							<div className="between">
								<div className="vertical">
									<div className="profil">
										<img className="userImage" src={profil.driver.profilePicture} alt="image de profil" />
										<span className="name">{profil.driver.fName}</span>
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
										<span className="long">{profil.startLocalisation}</span>
										<img className="line" src={line} alt="" />
										<span className="long">{profil.endLocalisation}</span>
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
				<div className="reserveCarDiv">{popupInfos[0] && <ReserveCar informations={popupInfos[1]} />}</div>
				<div onClick={() => setPopup()}>
					<ButtonAdd />
				</div>
				<div
					id="sombre"
					onClick={() => {
						setShowPopup(false);
						setPopupInfos([false, { driver: { notation: [] } }]);
						document.querySelector('#sombre').classList.toggle('sombre');
					}}
				></div>
				{showPopup && <AddPunchyCar></AddPunchyCar>}
			</div>
		</div>
	);
};
