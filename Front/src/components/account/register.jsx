import React from "react";
// import '../../public/assets/css/account.css';


export const Register = () => {

    const [fName, setFName] = React.useState('')
    const [lName, setLName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [school, setSchool] = React.useState('')

    const handleSubmit = e => {
        e.preventDefault()
        const request = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ fName, lName, email, password, phone, school })
        }
        console.log(request);
    
        // requete à l'api
        fetch(`http://localhost:5000/user/signup`, request)
        .then(res => res.json())
        .then(content => console.log(content))
        .catch(err => console.log(err))
    }

    return (
    <>
        <div>

        <div className="login">
        <div className="form">
            <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column"}}>
            <input type="text" placeholder="first name" required value={fName} onChange={(e) => {setFName(e.target.value)}} />
            <input type="text" placeholder="last name" required value={lName}  onChange={(e) => {setLName(e.target.value)}} />
            <input type="email" placeholder="email" required value={email} onChange={(e) => {setEmail(e.target.value)}}/>
            <input type="password" placeholder="password" required value={password} onChange={(e) => {setPassword(e.target.value)}}/>
            <input type="text" placeholder="phone" required value={phone} onChange={(e) => {setPhone(e.target.value)}} />
            <input type="text" placeholder="school" required value={school} onChange={(e) => {setSchool(e.target.value)}} />
            <button type="submit">Register</button>
            </form>  
        </div>
        </div>
        </div>
    </>
    )
}