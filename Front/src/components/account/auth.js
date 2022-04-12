export class Authentification {

    static authenticated = false

    static login = async (fName, password) => {
        //On prepare la requete
        const request = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({fName, password})
        }

        // requete à l'api
        const res = await fetch('http://localhost:5000/auth/signin', request)
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
        localStorage.clear()
    }

    //function qui renvoie le status de connexion de l'utilisateur
    static isAuthenticated() {
        return Authentification.authenticated
    }
}