export class Authentification {
	static authenticated = false;

	static login = async (email, password) => {
		if (email && password) {
			return fetch('http://localhost:5000/auth/signin', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email, password })
			})
				.then(response => response.json())
				.then(content => {
					// console.log(content),
					Authentification.authenticated = true;
					localStorage.setItem('token', content.token);
					// return content.user
				})
				.catch(error => console.log(error));
		} else {
			console.log('error');
		}
	};

	// requete à l'api
	static logout = () => {
		localStorage.removeItem('token');
		Authentification.authenticated = false;
		return Authentification.authenticated;
	};

	static checkAuthentication() {
		if (localStorage.getItem('token')) {
			Authentification.authenticated = true;
		} else {
			Authentification.authenticated = false;
		}
		return Authentification.authenticated;
	}
}
