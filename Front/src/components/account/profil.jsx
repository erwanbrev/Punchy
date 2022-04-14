import React from "react";
import { IoStar } from 'react-icons/io5';


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
            <article className="articleCar">
            <div className="between">
                <div className="vertical">
                    <div className="profil">
                        <img className="userImage" src={body.profilePicture} alt="image de profil" />
                        <span>{body.fName}</span>
                        <div className="space">
                            <span>NOTE</span>
                            <IoStar color="#FF7A00" />
                        </div>
                    </div>
                    <div className="parcour">
                        <p>Départ:</p>
                        <span>{body.school}</span>
                    </div>
                </div>
            </div>
            </article>
            
        </div>

    )
}