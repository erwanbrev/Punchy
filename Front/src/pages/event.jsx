import React, { useEffect, useState } from 'react';
import { icons } from 'react-icons';
import '../../public/assets/css/evenement.css';
import euro from '../../public/assets/img/svg/prix.svg';
import image from '../../public/assets/img/bulles.jpg';
import imagePerso from '../../public/assets/img/boite.jpg';
import { CgEuro, CgSmartHomeBoiler } from 'react-icons/cg';
import { ButtonAdd } from '../components/buttonAdd';
import { CgEuro } from 'react-icons/cg';
import { CgEuro } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';

export const Event = () => {
	const [events, setEvents] = useState([[], []]);

	const popupinfo = index => {
		const popup = document.querySelector('.detailevent' + index);
		popup.classList.toggle('hide');
		const sombre = document.querySelector('.sombre' + index);
		sombre.classList.toggle('clair');
	};

	const clair = index => {
		const popup = document.querySelector('.detailevent' + index);
		popup.classList.toggle('hide');
		const sombre = document.querySelector('.sombre' + index);
		sombre.classList.toggle('clair');
	};

	const popupinfoPerso = index => {
		const popup = document.querySelector('.detaileventPerso' + index);
		popup.classList.toggle('hide');
		const sombre = document.querySelector('.sombrePerso' + index);
		sombre.classList.toggle('clairPerso');
	};

	const clairPerso = index => {
		const popup = document.querySelector('.detaileventPerso' + index);
		popup.classList.toggle('hide');
		const sombre = document.querySelector('.sombrePerso' + index);
		sombre.classList.toggle('clairPerso');
	};

	const participate = id => {
		console.log(id);
		if (!localStorage.getItem('token')) {
			return useNavigate('/login', { replace: true });
		}

		fetch(`http://localhost:5000/event/${id}/participate`, { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } })
			.then(response => {
				return response.json();
			})
			.then(({ event }) => {
				// alert('Votre participation a bien été prise en compte');
			})
			// .catch(alert('Vous n\'êtes pas connecté !'));
	};

	useEffect(() => {
		fetch('http://localhost:5000/event')
			.then(res => {
				return res.json();
			})
			.then(({ response }) => {
				const eventsA = response.filter(event => event.category === 'Divertissement' || event.category === 'Festif');
				const eventsB = response.filter(event => event.category === 'Culturel' || event.category === 'Sportif' || event.category === 'Autre');
				setEvents([eventsA, eventsB]);
			});
	}, []);

	return (
		<div>
			{events[0].map((event, index) => {
				return <div className={'clair sombre sombre' + index} onClick={() => clair(index)}></div>;
			})}
			<div className="eventcontainer">
				<div className="EventImportant">
					{events[0].map((event, index) => {
						return (
							<article className="evenement" onClick={() => popupinfo(index)}>
								<span className="titre orange">{event.title}</span>
								<img className="image" src={event.pictures[0]} alt="" srcset="" />
								<div className="priceEvent">
									<span className="prix orange">{event.price}</span>
									<span className="euro orange">
										<CgEuro />
									</span>
								</div>
								<p className="participation">Je participe !</p>
							</article>
						);
					})}
				</div>
			</div>
			{events[1].map((event, index) => {
				return <div className={'clairPerso sombrePerso sombrePerso' + index} onClick={() => clairPerso(index)}></div>;
			})}
			<div className="eventPersocontainer">
				<div className="EventPerso">
					{events[1].map((event, index) => {
						return (
							<article className="evenementPerso" onClick={() => popupinfoPerso(index)}>
								<span className="titre orange">{event.title}</span>
								<img className="image" src={event.pictures[0]} alt="" srcset="" />
								<div className="priceEvent">
									<span className="prix orange">{event.price}</span>
									<span className="euro orange">
										<CgEuro />
									</span>
								</div>
								<p className="participation PartiPerso" onClick={() => participate(event.id)}>
									Je participe !
								</p>
							</article>
						);
					})}
				</div>
			</div>

			{events[0].map((event, index) => {
				const startDate = new Date(event.startDate);
				const day = startDate.getDate();
				let month = startDate.getMonth() + 1;
				const hours = startDate.getHours();
				let minutes = startDate.getMinutes();
				if (minutes < 10) {
					minutes = '0' + minutes;
				}

				if (month < 10) {
					month = '0' + month;
				}

				let startTime = hours + ':' + minutes + ' - ' + day + '/' + month;

				const endDate = new Date(event.endDate);
				const dayEnd = endDate.getDate();
				let monthEnd = endDate.getMonth() + 1;
				const hoursEnd = endDate.getHours();
				let minutesEnd = endDate.getMinutes();
				if (minutesEnd < 10) {
					minutesEnd = '0' + minutesEnd;
				}

				if (monthEnd < 10) {
					monthEnd = '0' + monthEnd;
				}

				let endTime = hoursEnd + ':' + minutesEnd + ' - ' + dayEnd + '/' + monthEnd;
				return (
					<div className={'hide detailevent detailevent' + index}>
						<img className="imageDetail" src={event.pictures[0]} alt="" srcset="" />
						<span className="titreEvent catNom grisTexte">Nom :</span>
						<span className="eventExplication detailtitre">{event.title}</span>
						<span className="titreEvent catLieu grisTexte">Lieu :</span>
						<span className="eventExplication detaillieu">{event.localisation}</span>
						<span className="titreEvent catDebut grisTexte">Début :</span>
						<span className="eventExplication detaildebut">{startTime}</span>
						<span className="titreEvent catFin grisTexte">Fin :</span>
						<span className="eventExplication detailfin">{endTime}</span>
						<span className="titreEvent catPrix grisTexte">Prix :</span>
						<span className="eventExplication detailprix">{event.price} €</span>
						<span className="detaildescription">{event.description}</span>
						<span className=" eventPart" id="catParticipant">
							Participants
						</span>
						<button className="catParticipation" onClick={() => participate(event.id)}>
							Je participe
						</button>
						<span class="hidetexte eventPart" id="ParticipantsImportants">
							<ul>
								{/* <p>{event.participants.slice(0, 5).length} participants dont :</p>
								<br />
								<li>{event.participant[0]}</li>
								<li>{event.participant[1]}</li>
								<li>{event.participant[2]}</li>
								<li>{event.participant[3]}</li>
								<li>{event.participant[4]}</li>
								<li>{event.participant[5]}</li> */}
							</ul>
						</span>
					</div>
				);
			})}

			{events[1].map((event, index) => {
				const startDate = new Date(event.startDate);
				const day = startDate.getDate();
				let month = startDate.getMonth() + 1;
				const hours = startDate.getHours();
				let minutes = startDate.getMinutes();
				if (minutes < 10) {
					minutes = '0' + minutes;
				}

				if (month < 10) {
					month = '0' + month;
				}

				let startTime = hours + ':' + minutes + ' - ' + day + '/' + month;

				const endDate = new Date(event.endDate);
				const dayEnd = endDate.getDate();
				let monthEnd = endDate.getMonth() + 1;
				const hoursEnd = endDate.getHours();
				let minutesEnd = endDate.getMinutes();
				if (minutesEnd < 10) {
					minutesEnd = '0' + minutesEnd;
				}

				if (monthEnd < 10) {
					monthEnd = '0' + monthEnd;
				}

				let endTime = hoursEnd + ':' + minutesEnd + ' - ' + dayEnd + '/' + monthEnd;
				return (
					<div className={'hide detaileventPerso detaileventPerso' + index}>
						<img className="imageDetailPerso" src={event.pictures[0]} alt="" srcset="" />
						<span className="detailPersotitre">{event.title}</span>
						<span className="persoNomination catPersoLieu grisTexte">Lieu :</span>
						<span className="persoCategorie titrePerso detailPersolieu">{event.localisation}</span>
						<span className="persoNomination catPersoDebut grisTexte">Début :</span>
						<span className="persoCategorie titrePerso detailPersodebut">{startTime}</span>
						<span className="persoNomination catPersoFin grisTexte">Fin :</span>
						<span className="persoCategorie titrePerso detailPersofin">{endTime}</span>
						<span className="persoNomination catPersoPrix grisTexte">Prix :</span>
						<span className="persoCategorie titrePerso detailPersoprix">{event.price} €</span>
						<span className="detailPersodescription">{event.description}</span>
						<span className="catTop" id="catPersoParticipant">
							Participants
						</span>
						<button className="catTop catPersoParticipation" onClick={() => participate(event.id)}>
							Je participe
						</button>
						<span class="hidetexte" id="ParticipantsPerso">
							<ul>
								{/* <p>{eventPerso.participant.length} participants dont :</p>
                    <br />
                    <li>{eventPerso.participant[0]}</li>
                    <li>{eventPerso.participant[1]}</li>
                    <li>{eventPerso.participant[2]}</li>
                    <li>{eventPerso.participant[3]}</li>
                    <li>{eventPerso.participant[4]}</li>
                    <li>{eventPerso.participant[5]}</li> */}
							</ul>
						</span>
					</div>
				);
			})}
			<ButtonAdd />
		</div>
	);
};
