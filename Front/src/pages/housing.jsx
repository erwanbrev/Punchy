import React, { useState, useEffect } from 'react';
import '../../public/assets/css/housing.css';
import picHouse from '../../public/assets/img/dinan-yannick-dufils-bN7Ae_grzZw-unsplash.jpeg';
import { IoLogoEuro, IoLocationSharp, IoPieChart, IoPodium, IoStorefront } from 'react-icons/io5';
import { ButtonAdd } from '../components/buttonAdd';
import { SearchBarHouse } from '../components/searchBarHouse';
export const Housing = () => {
	let [data, setData] = useState([]);

	useEffect(() => {
		fetch('http://localhost:5000/housing')
			.then(response => {
				return response.json();
			})
			.then(({ response }) => {
				console.log(response);
				setData(response);
			});
	}, []);

	let contentHouse = {
		name: 'Quentin',
		localization: 'Dinan',
		surface: '9m2',
		price: '450',
		// content: 'Non meublé',
		content: 'Meublé',
		type: 'Appartement'
	};

	return (
		<div>
			<div className="contain-house">
				{/* Barre de filtres */}
				<SearchBarHouse />
				{/* 1er article */}
				{data.map(housing => {
                    console.log(housing);
					return (
						<article className="art-Housing">
							<img className="img-housing" src={picHouse} alt="Photo de Yannick Dufils sur Unsplash" />
							{/* between est l'espace entre la colonne de gauche et de droite */}
							<div className="between-housing">
								{/* vertical permet de classer veticalement le contenu*/}
								{/* colonne de gauche */}
								<div className="vertical-housing-left">
									<div className="name-owner">
										{/* <span>{housing.description}</span> */}
									</div>
									<div className="localization-housing">
										<IoLocationSharp color="var(--orange)" className="localiz-logo" />
										<span>{housing.localisation}</span>
									</div>
									<div className="price-housing">
										<p>{housing.rent}</p>
										<IoLogoEuro className="price-logo" />
									</div>
								</div>
								{/* colonne de droite */}
								<div className="vertical-housing-right">
									<div className="type-housing">
										<IoStorefront color="var(--orange)" className="housing-logo" />
										<span>{housing.type}</span>
									</div>
									<div className="content-housing">
										<IoPodium color="var(--orange)" className="content-logo" />
										<span>{housing.furnished ? "Meublé": "Non meublé"}</span>
									</div>
									<div className="surface-housing">
										<IoPieChart color="var(--orange)" className="surface-logo" />
										<span>{housing.surface}m²</span>
									</div>
								</div>
							</div>
						</article>
					);
				})}
			</div>
			<ButtonAdd />
		</div>
	);
};
