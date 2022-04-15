import '../../public/assets/css/addPunchyCar.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoReader, IoPencilOutline, IoPush, IoLocationSharp, IoCalendar, IoAccessibilitySharp, IoLogoEuro, IoPeople } from 'react-icons/io5';

export const AddPunchyCar = () => {
	const navigate = useNavigate();
	useEffect(() => {
		const form = document.getElementById('form');
		form.addEventListener(
			'submit',
			e => {
				if (!localStorage.getItem('token')) {
					navigate('/login', { replace: true });
				}

				e.preventDefault();
				const inputs = Array.from(e.target);
				console.log(inputs);
				const startDate = new Date(document.getElementById('startDate').value).getTime();
				const endDate = new Date(document.getElementById('endDate').value).getTime();
				if (startDate < Date.now()) {
					return alert('La date de départ doit être supérieure à la date actuelle');
				}
				if (endDate < startDate) {
					return alert('La date de fin doit être supérieure à la date de départ');
				}

				const body = {
					startTime: startDate,
					endTime: endDate,
					startLocalisation: document.getElementById('startLocalisation').value,
					endLocalisation: document.getElementById('endLocalisation').value,
					repeat: 'None',
					peopleNumber: document.getElementById('peopleNumber').value,
					price: document.getElementById('price').value,
					smoker: false,
					carType: document.getElementById('carType').value,
					carColor: document.getElementById('carColor').value
				};

				fetch('http://localhost:5000/carpooling', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						Authorization: 'Bearer ' + localStorage.getItem('token')
					},
					body: JSON.stringify(body)
				})
					.then(response => {
						return response.json();
					})
					.then(({ carpooling }) => {
						console.log(carpooling);
						navigate('/carpool', { replace: true });
					})
					.catch(err => {
						console.log(err.message);
					});
			},
			{ once: true }
		);
	}, []);

	return (
		<div className="overlayPunchy2">
			<h1>Ajouter un covoiturage</h1>
			<form className="formAdd" action="" id="form">
				<div className="row">
					<div className="label">
						<label>Lieu de départ</label>
						<IoPencilOutline className="icon" size="20px" />
						<input id="startLocalisation" type="text" required />
					</div>
					<div className="label">
						<label>Lieu d'arrivé</label>
						<IoPencilOutline className="icon" size="20px" />
						<input id="endLocalisation" type="text" required />
					</div>
				</div>
				<div className="row">
					<div className="label">
						<label>Début</label>
						<IoLocationSharp className="icon" size="20px" />
						<input id="startDate" type="date" required />
					</div>
					<div className="label">
						<label>Arrivé</label>
						<IoCalendar className="icon" size="20px" />
						<input id="endDate" type="date" required />
					</div>
					<div className="label">
						<label>Evènement</label>
						<IoReader className="icon" size="20px" />
						<select id="categories">
							<option value="festif">Festif</option>
							<option value="culturel">Culturel</option>
							<option value="divertissement">Divertissement</option>
							<option value="sportif">Sportif</option>
							<option value="autres">Aucun</option>
						</select>
					</div>
					<div className="label num">
						<label>Places disponible</label>
						<IoCalendar className="icon" size="20px" />
						<input id="peopleNumber" type="number" min="1" required />
					</div>
				</div>
				<div className="row">
					<div className="label">
						<label>Type de voiture</label>
						<IoLogoEuro className="icon" size="20px" />
						<input id="carType" type="texte" required />
					</div>
					<div className="label">
						<label>Couleur de la voiture</label>
						<IoPeople className="icon" size="20px" />
						<input type="texte" id="carColor" required />
					</div>
				</div>
				<div className="row2">
					<div className="label">
						<label>prix</label>
						<IoCalendar className="icon" size="20px" />
						<input type="number" min="0" required id="price" />
					</div>
					<div className="label">
						<label>Type Payment</label>
						<IoReader className="icon" size="20px" />
						<select id="categories">
							<option value="carte">Carte</option>
							<option value="espece">Espèce</option>
						</select>
					</div>
				</div>
				<button className="btnAdd" type="submit">
					Créer
				</button>
			</form>
		</div>
	);
};
