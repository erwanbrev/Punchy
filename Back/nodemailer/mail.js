const nodemailer = require('nodemailer');

const User = require('./../models/User');

const sendMailEvent = async event => {
	const transporter = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		type: 'login',
		auth: {
			user: 'punchy.mails@gmail.com',
			pass: process.env.PASSWORD_MAIL
		}
	});

	const attachments = [];
	event.pictures.forEach(image => {
		attachments.push({ path: image });
	});

	const mailOptions = {
		from: 'punchy.mails@gmail.com',
		to: 'punchy.mails@gmail.com',
		subject: 'Nouvel évènement',
		html: `
		<html><body>
		<b>Nouvel évènement</b>
		<ul>
			<li>Catégorie: ${event.category}</li>
			<li>Titre: ${event.title}</li>
			<li>Description: ${event.description}</li>
			<li>Localisation: ${event.localisation}</li>
			<li>Prix: ${event.price}€</li>
			<li>Date de début: ${event.startDate.toLocaleDateString('fr-FR', {
				weekday: 'long',
				year: 'numeric',
				month: 'long',
				day: 'numeric',
				hour: 'numeric',
				minute: 'numeric'
			})}</li>
			<li>Date de fin: ${event.endDate.toLocaleDateString('fr-FR', {
				weekday: 'long',
				year: 'numeric',
				month: 'long',
				day: 'numeric',
				hour: 'numeric',
				minute: 'numeric'
			})}</li>
			<li>Créer le : ${event.createdAt.toLocaleDateString('fr-FR', {
				weekday: 'long',
				year: 'numeric',
				month: 'long',
				day: 'numeric',
				hour: 'numeric',
				minute: 'numeric'
			})}</li>
		</ul>
        <form method="get" action="http://localhost:3000/event/confirmed">
            <input type="hidden" name="id" value="${event._id.toString()}">
            <button type="submit">Publier</button>
        </form>
		</body>
		</html>
		`.trim(),
		attachments
	};

	transporter.sendMail(mailOptions, (error, response) => {
		if (error) {
			console.log(error);
			return error;
		}
		console.log('email sent');
		return response;
	});
};

const sendMailHousing = async housing => {
	const transporter = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		type: 'login',
		auth: {
			user: 'punchy.mails@gmail.com',
			pass: process.env.PASSWORD_MAIL
		}
	});

	const attachments = [];
	housing.pictures.forEach(image => {
		attachments.push({ path: image });
	});

	const { fName, lName } = await User.findById(housing.owner);

	const mailOptions = {
		from: 'punchy.mails@gmail.com',
		to: 'punchy.mails@gmail.com',
		subject: 'Nouveau logement',
		html: `
		<html><body>
		<b>Nouveau Logement</b>
		<ul>
			<li>Description: ${housing.description}</li>
			<li>Localisation: ${housing.localisation}</li>
			<li>Surface: ${housing.surface}m²</li>
			<li>Type: ${housing.type}</li>
			<li>Disponibilité: ${housing.available.toLocaleDateString('fr-FR', {
				weekday: 'long',
				year: 'numeric',
				month: 'long',
				day: 'numeric',
				hour: 'numeric',
				minute: 'numeric'
			})}</li>
			<li>Loyer: ${housing.rent}€</li>
			<li>Meublé: ${housing.furnished === true ? 'Vrai' : 'False'}</li>
			<li>Nombre Chambres: ${housing.bedroomNumber}</li>
			<li>Nombre Salle de bains: ${housing.bathroomNumber}</li>
			<li>Jardin ? ${housing.garden === true ? 'Vrai' : 'Faux'}</li>
			<li>Terrasse ? ${housing.terrace === true ? 'Vrai' : 'Faux'}</li>
			<li>Créateur: ${fName} ${lName}</li>
			<li>Créer le : ${housing.createdAt.toLocaleDateString('fr-FR', {
				weekday: 'long',
				year: 'numeric',
				month: 'long',
				day: 'numeric',
				hour: 'numeric',
				minute: 'numeric'
			})}</li>
		</ul>
        <form method="get" action="http://localhost:3000/housing/confirmed">
            <input type="hidden" name="id" value="${housing._id.toString()}">
            <button type="submit">Publier</button>
        </form>
		</body>
		</html>
		`.trim(),
		attachments
	};

	transporter.sendMail(mailOptions, (error, response) => {
		if (error) {
			console.log(error);
			return error;
		}
		return response;
	});
};

module.exports = { sendMailEvent, sendMailHousing };
