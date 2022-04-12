import React from "react";
import '../account/account.css';


export const Register = () => {

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
        const request = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ fName, lName, email, password, phone, school, profil })
        }
        console.log(request);
    
        // requete à l'api
        fetch(`http://localhost:5000/user/signup`, request)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    const handleChange = e => {
        setSchool(e.target.value)
        console.log(school)
    }

    return (
        <div className="container">
        <h1 className="text-center">Register</h1>
        <form className="registration-form" onSubmit={handleSubmit} encType="multipart/form-data">
            <label className="col-one-half">
                <span className="label-text">First Name</span>
                <input type="text" required value={fName} onChange={(e) => {setFName(e.target.value)}}/>
            </label>
            <label className="col-one-half">
                <span className="label-text">Last Name</span>
                <input type="text" required value={lName}  onChange={(e) => {setLName(e.target.value)}} />
            </label>
            <label>
                <span className="label-text">Email</span>
                <input type="text" required value={email} onChange={(e) => {setEmail(e.target.value)}} />
            </label>
            <label className="password">
                <span className="label-text">Password</span>
                <input type="password" required value={password} onChange={(e) => {setPassword(e.target.value)}} />
            </label>
            <label>
                <span className="label-text">Phone</span>
                <input type="text" required value={phone} onChange={(e) => {setPhone(e.target.value)}} />
            </label>
            <label>
                <span className="label-text">School</span>
                <select required value={school} onChange={handleChange}  style={{width: "100%"}}>
                    <option value="IMTS">IMTS</option>
                    <option value="IUT Saint Malo">IUT Saint Malo</option>
                    <option value="Ecole infirmiere">Ecole infirmiere</option>
                    <option value="Institut du design">Institut du design</option>
                    <option value="ENSM">ENSM</option>
                    <option value="BTS">BTS</option>

                </select>
            </label>
            <input type="file" onChange={e => setFile(e.target.files[0])} />
            <div className="text-center">
                <button type="submit" className="submit" name="register">Sign Me Up</button>
            </div>
        </form>

    </div>
    )
}