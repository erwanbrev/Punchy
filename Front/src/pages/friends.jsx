import React, { useState, useEffect } from 'react';
import { icons } from 'react-icons';
import '../../public/assets/css/friends.css';
import loopImg from '../../public/assets/img/loop.png';
import punchie from '../../public/assets/img/punchie.png';
import { FiUser } from 'react-icons/fi';
import { MdOutlineSchool } from 'react-icons/md';
import { MdOutlineLocationOn } from 'react-icons/md';
import { MdNorth } from 'react-icons/md';
import { MdSouth } from 'react-icons/md';


export const Friends = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch('http://localhost:5000/user/search', {
			headers: {
				Authorization: 'Bearer ' + localStorage.getItem('token')
			}
		})
			.then(response => {
				return response.json();
			})
			.then(({ response }) => {
				setUsers(response);
				console.log(response);
			})
			.catch(err => {
				console.log(err.message);
			});
	});

	

	return (
		<div className="main">
			
			{/* Barre de filtres */}
			<form id="filterBar">
				<label id="labelSchool">Établissement scolaire</label>
				<select name="school">
					<option value="IMTS">IMTS</option>
					<option value="institutD">Institut du Design</option>
					<option value="iut">IUT</option>
					<option value="maritime">Lycée Maritime</option>
					<option value="institPRo">Lycée L'Institution / La Providence</option>
					<option value="maupertuis">Lycée Maupertuis</option>
					<option value="jc">Lycée Jacques Cartier</option>
					<option value="marineMarchande">École de Marine Marchande</option>
				</select>

				<label id="labelPunchy">Score Punchy</label>
				<div id="scoreUp">
					<MdNorth />
				</div>
				<div id="scoreDown">
					<MdSouth />
				</div>

				<button type="submit">
					<img className="loop" src={loopImg} alt="loupe"></img>
				</button>
			</form>

			{/* Barre de recherche */}
			<form id="researchBar">
				<input type="text" name="research" />
				<button type="submit">
					<img className="loop" src={loopImg} alt="loupe"></img>
				</button>
			</form>

			{/* Liste d'amis */}
			<div id="friendsList">
				{users.map(user => {
					console.log(user);
					return (
						<div className="friendBlock">
							<div className="friendImg">
								<img src={user.profilePicture} />
							</div>
							<div className="friendInfos">
								<ul className="infosList">
									<li className="friendName">
										<FiUser />
										{user.fName} {user.lName}
									</li>
									{/* <li>
										<MdOutlineLocationOn />
										Saint-Malo
									</li> */}
									<li className="schoolName">
										<MdOutlineSchool />
										{/* Institut Marie-Thérèse Solacroup */}
										{user.school}
									</li>
								</ul>
								<div className="punchiesNumber">
									13<img src={punchie}></img>
								</div>
								<button className="profileButton" type="submit">
									Voir profil
								</button>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
