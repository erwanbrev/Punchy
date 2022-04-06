export class Authentification {

    static authenticated = false

    static login = async (first_name, password) => {
        //On prepare la requete
        const request = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({first_name, password})
        }

        // requete à l'api
        const res = await fetch('http://localhost:5000/login', request)
        if(res.ok) {
            //stocker la response de l'api
            const body = await res.json()
            //On passe l'authentification a vrai
            Authentification.authenticated = true 
            console.log(body)
            // stocker l'identification de l'utilisateur
            localStorage.setItem('uid', body.uid)
        }
    }

    // requete à l'api
    static logout = () => {
        const request = {
            method: 'GET',
            headers: { 'uid': localStorage.getItem('uid') },
            credentials: 'include'
        }

        return fetch('http://localhost:5000/logout', request)
        .then(res => {
            // on lui dit qu'il est plus connecter
            Authentification.authenticated = false
            // on clear tout les informations de l'utilisateur du localStorage
            localStorage.clear()
        })
    }

    //function qui renvoie le status de connexion de l'utilisateur
    static isAuthenticated() {
        return Authentification.authenticated
    }
}