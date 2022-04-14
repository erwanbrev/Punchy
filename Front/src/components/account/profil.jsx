import React from "react";
import { IoStar } from 'react-icons/io5';
import '../../../public/assets/css/Pprofil.css'


export const Profil = () => {
    const [body, setBody]=React.useState([])

    React.useEffect(() => {
        (async() => {
            const request = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json',
                //recupérer l'identification pour la requete
                            'authorization': 'bearer ' + localStorage.getItem('token')}
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
            <article className="articleCar Pprofil">
            <div className="between">
                <div className="vertical">
                    <div className="profil">
                        <img className="userImage" src={body.user.profilePicture} alt="image de profil" />
                        <p>Name :</p>
                        <span>{body.user.fName}</span>
                        <div className="space">
                            <span>NOTE</span>
                            <IoStar color="#FF7A00" />
                        </div>
                    </div>
                    <div className="parcour">
                        <p>School:</p>
                        <span>{body.user.school}</span>
                    </div>
                </div>
            </div>
            </article>
            
        </div>

    )
}