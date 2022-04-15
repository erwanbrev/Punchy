import React from "react";
import { IoStar } from 'react-icons/io5';
import punchie from '../../../public/assets/img/punchie.png';
import '../../../public/assets/css/Pprofil.css';


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
                setBody(body.user)
            }
        })()
    }, [])



    return (
        <div className="monProfil">
            <article className=" Pprofil">
                <div className="between">
                    <div className="vertical">
                        <div className="profil">
                            <img className="userImage" src={body.profilePicture} alt="image de profil" />
                            <span className="fName">{body.fName}</span>
                            <div className="space">
                                <span>{body.note}</span>
                                <IoStar color="#FF7A00" />
                            </div>
                        </div>
                        <div className="punchiesNumber">
							13<img className="punch" src={punchie}></img>
						</div>
                        <div className="parcour">
                            <p>Ecole</p>
                            <span>{body.school}</span>
                        </div>
                    </div>
                </div>
            </article>
        </div>

    )
}