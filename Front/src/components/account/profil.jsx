import React from "react";

export const Profil = () => {
    const [body, setBody]=React.useState([])

    React.useEffect(() => {
        (async() => {
            const request = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json',
                //recupérer l'identification pour la requete
                            'authorization': 'bearer ' + localStorage.getItem('access_token')}
            }
        
            // requete à l'api
            const res = await fetch('http://localhost:5000/user/me', request)
            console.log(res);
            if(res.ok) {
                //stocker la response de l'api
                const body = await res.json()
                setBody(body)
                console.log(body);
            }
        })()
    }, [])

    return (
        <div className="main-container">
            <ul style={{marginLeft: "20%"}}>
                <li>{body.fName}</li>
                <li>{body.lName}</li>
                <li>{body.phone}</li>
                <li>{body.school}</li>
            </ul>
            <img src={body.profilePicture} alt="" />
        </div>
    )
}