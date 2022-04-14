import React from "react";
import { useNavigate } from "react-router-dom";
import '../account/account.css';


export const Register = () => {
    const navigate = useNavigate()


    const [file, setFile] = React.useState()
    const [fName, setFName] = React.useState('')
    const [lName, setLName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [school, setSchool] = React.useState('')
    const [profil, setProfile] = React.useState('')

    React.useEffect(() => {
        file ?
            new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => resolve(setProfile(reader.result));
                reader.onerror = error => reject(error);
            })
            : null
    }, [file])

    const handleSubmit = e => {
        e.preventDefault()
        const body = { fName, lName, email, password, phone, school }
        if (profil) body.profil = profil
        const request = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        }
        console.log(request);

        // requete à l'api
        fetch(`http://localhost:5000/user/signup`, request)
            .then(res => res.json())
            .then(data => localStorage.setItem('token', data.token))
            .catch(err => console.log(err))

        navigate('/', { replace: true })
    }

    const handleChange = e => {
        setSchool(e.target.value)
        console.log(school)
    }

    return (
        <div className="main-container">
            <div className="container-register">
                <h1 className="text-center h1-register">Inscription</h1>
                <form className="registration-form" onSubmit={handleSubmit} encType="multipart/form-data">
                    <label className="col-one-half">
                        <span className="label-text">Prénom</span>
                        <input type="text" required value={fName} onChange={(e) => { setFName(e.target.value) }} />
                    </label>
                    <label className="col-one-half">
                        <span className="label-text">Nom</span>
                        <input type="text" required value={lName} onChange={(e) => { setLName(e.target.value) }} />
                    </label>
                    <label>
                        <span className="label-text">Email</span>
                        <input type="text" required value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    </label>
                    <label className="password">
                        <span className="label-text">Mot de passe</span>
                        <input type="password" required value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    </label>
                    <label>
                        <span className="label-text">Téléphone</span>
                        <input type="text" required value={phone} onChange={(e) => { setPhone(e.target.value) }} />
                    </label>
                    <label htmlFor="">
                        <span className="label-text">Photo de profil</span>
                        <input type="file" className="file" onChange={e => setFile(e.target.files[0])} placeholder="bonjour" />
                    </label>
                    <label>
                        <span className="label-text">Ecole</span>
                        <select required value={school} onChange={handleChange} style={{ width: "100%" }}>
                            {/* <option >Sélectionnez un établissement.</option>
                            <option value="IMTS">IMTS</option>
                            <option value="IUT Saint Malo">IUT Saint Malo</option>
                            <option value="Ecole infirmiere">Ecole infirmiere</option>
                            <option value="Institut du design">Institut du design</option>
                            <option value="ENSM">ENSM</option>
                            <option value="BTS">BTS</option>
                        </select> */}
                            {/* MAJ de la liste des lycées */}
                            <option >Sélectionnez un établissement.</option>
                            <option value="IMTS">IMTS</option>
                            <option value="institutD">Institut du Design</option>
                            <option value="iut">IUT</option>
                            <option value="maritime">Lycée Maritime</option>
                            <option value="institPRo">Lycée L'Institution / La Providence</option>
                            <option value="maupertuis">Lycée Maupertuis</option>
                            <option value="jc">Lycée Jacques Cartier</option>
                            <option value="marineMarchande">École de Marine Marchande</option>
                        </select>
                    </label>
                    <div className="text-center">
                        <button type="submit" className="btnAdd" name="register">S'inscrire</button>
                    </div>
                </form>

            </div>
        </div>
    )
}