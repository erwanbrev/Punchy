import React from "react";
import './account.css';
import "../../../public/assets/css/main.css"

export const Register = () => {

    const handleSubmit = (first_name, last_name, email, password, tel, school) => {

        const request = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ first_name, last_name, email, password, tel, school })
        }

        // requete à l'api
        fetch(`http://localhost:5000/register`, request)
            .then(res => res.json())
            .catch(err => console.log(err))
    }

    return (
        <>
            <div>
                <div class="login">
                    <div class="form">
                        <form class="login-form" onSubmit={handleSubmit}>
                            <span class="material-icons">lock</span>
                            <input type="text" placeholder="first name" required />
                            <input type="text" placeholder="last name" required />
                            <input type="text" placeholder="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
                            <input type="password" placeholder="password" required />
                            <input type="text" placeholder="tel" required />
                            <input type="text" placeholder="school" required />
                            <button>Register</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}