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
        if(Authentification.isAuthenticated()) {
            navigate('/', { replace: true })
        }
    }

    // React.useEffect(() => {
    //     if(Authentification.isAuthenticated()) {
    //         navigate('/', { replace: true })
    //     }
    // })

    return (
    <>
        <div style={{background: 'linear-gradient(90deg, #4b6cb7 0%, #182848 100%', height: '100vh'}}>

        <div className="login">
        <div className="form">
            <form className="login-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="first name" onChange={e => setIdentifier(e.target.value)}/>
            <input type="password" placeholder="password" required onChange={e => setPassword(e.target.value)}/>
            <button>login</button>
            </form>  
        </div>
        </div>
        </div>
    </>
    )
}