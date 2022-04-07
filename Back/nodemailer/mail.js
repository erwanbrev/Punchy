const nodemailer = require('nodemailer');

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

module.exports = { sendMailEvent };
