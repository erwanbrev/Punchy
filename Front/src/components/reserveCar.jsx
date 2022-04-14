import { useState, useEffect } from 'react';
import '../../public/assets/css/reserveCar.css';
import user from '../../public/assets/img/user.png';
import img from '../../public/assets/img/imageCar.png';
import line from '../../public/assets/img/svg/lineReserve.svg';
import { IoStar, IoLogoEuro, IoTimeOutline, IoPerson } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

export const ReserveCar = ({ informations }) => {
	const startDate = new Date(informations.startTime);
	const day = startDate.getDate();
	const month = startDate.getMonth() + 1;
	const hours = startDate.getHours();
	const minutes = startDate.getMinutes();
	if (minutes < 10) {
		minutes = '0' + minutes;
	}

	const startTime = day + '/' + month + ' ' + hours + ':' + minutes;

	let note = informations.driver.notation.reduce((total, note) => total + note, 0) / informations.driver.notation.length;

	if (isNaN(note)) {
		note = 'Ø';
	}
	const navigate = useNavigate();

	const participate = () => {
		if (!localStorage.getItem('access_token')) {
			return navigate('/login', { replace: true });
		}
		fetch(`http://localhost:5000/carpooling/${informations.id}/participate`, {
			headers: {
				Authorization: 'Bearer ' + localStorage.getItem('access_token')
			}
		})
			.then(response => {
				return response.json();
			})
			.then(result => {
				console.log(result);
				alert('Votre participation a bien été enregistrer');
			})
			.catch(err => {
				console.log(err.message);
				alert(err.message);
			});
	};

	return (
		<div className="reserveCar">
			<img className="illustration" src={img} alt="illustration covoiturage" />
			<div className="annonce">
				<div className="row_">
					<img className="pProfil" src={informations.driver.profilePicture} alt="photo de profil" />
					<div className="monProfil">
						<p>{informations.driver.fName}</p>
						<div className="row_">
							<span>{note}</span>
							<IoStar color="FF7A00" size="35" />
						</div>
					</div>
				</div>
				<div className="row_">
					<p>{informations.startLocalisation}</p>
					<img className="lineO" src={line} alt="ligne de trajet" />
					<p>{informations.endLocalisation}</p>
				</div>
				<div className="row_">
					<p>Départ:</p>
					<p className="depart">{startTime}</p>
				</div>
				<div className="row_">
					<p>Type de voiture:</p>
					<p>{informations.carType}</p>
				</div>
				<div className="row_">
					<p>Couleur:</p>
					<p>{informations.carColor}</p>
				</div>
				<div className="row_">
					<p>Places disponibles: </p>
					<div className="row_">
						<IoPerson />
						<p>{informations.peopleNumber}</p>
					</div>
				</div>
				<div className="participe row_">
					<div className="prixCar v2">
						<span>{informations.price}</span>
						<IoLogoEuro size="25" />
					</div>
					<button className="btnAdd" onClick={participate}>
						Je participe
					</button>
				</div>
			</div>
		</div>
	);
};
