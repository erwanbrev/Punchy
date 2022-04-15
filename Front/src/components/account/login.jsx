import React from "react";
// import '../../public/assets/css/account.css';
import { Authentification } from "./auth";
import { useNavigate } from "react-router-dom";

export const Login = () => {

    // Set les champs nécéssaire a la connexion
    const [identifier, setIdentifier] = React.useState('')
    const [password, setPassword] = React.useState('')

    const navigate = useNavigate()

    // function du submit
    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await Authentification.login(identifier, password)
        if (Authentification.checkAuthentication()) {
            navigate('/', { replace: true })
        }
    }

    // React.useEffect(() => {
    //     if(Authentification.isAuthenticated()) {
    //         navigate('/', { replace: true })
    //     }
    // })

    return (
        <div className="main-container">
        <div className="container-register">
            <h1 className="text-center h1-register">Connexion</h1>
            <form className="registration-form" onSubmit={handleSubmit}>
                <label>
                    <span className="label-text">Email</span>
                    <input type="email" required value={identifier} onChange={(e) => {setIdentifier(e.target.value)}}/>
                </label>
                <label className="password">
                    <span className="label-text">Password</span>
                    <input type="password" required value={password} onChange={(e) => {setPassword(e.target.value)}} />
                </label>
                <div className="text-center">
                    <button type="submit" className="btnAdd">Je me connecte !</button>
                </div>
            </form>  
        </div>
    </div>
    )
}