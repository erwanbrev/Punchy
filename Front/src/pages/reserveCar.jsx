import "../../public/assets/css/reserveCar.css"
import user from "../../public/assets/img/user.png"
import img from '../../public/assets/img/imageCar.png';
import line from '../../public/assets/img/svg/lineReserve.svg';
import { IoStar, IoLogoEuro, IoTimeOutline, IoPerson } from "react-icons/io5";


export const ReserveCar = () => {

        let profil = {
        name: 'Stephen',
        stars: 5,
        depart: 'Dinard',
        arrivee: 'Saint-Malo',
        heure: '17h30',
        prix: '3',
        time: '15',
        voiture: 'clio 3',
        couleur: 'noir',
        number: '2',
    }

    return (
        <div className='reserveCar'>
            <img className="illustration" src={img} alt="illustration covoiturage" />
            <div className="annonce">
                <div className="row_">
                    <img className="pProfil" src={user} alt="photo de profil" />
                    <div className="monProfil">
                        <p>{profil.name}</p>
                        <div className="row_">
                            <span>{profil.stars}</span>
                            <IoStar color="FF7A00" size='35'/>
                        </div>
                    </div>
                </div>
                <div className="row_">
                    <p>{profil.arrivee}</p>
                    <img className="line" src={line} alt="ligne de trajet" />
                    <p>{profil.depart}</p>
                </div>
                <div className="row_">
                    <p>Départ:</p>
                    <p className="depart">{profil.heure}</p>
                </div>
                <div className="row_">
                    <p>Type de voiture:</p>
                    <p>{profil.voiture}</p>
                </div>
                <div className="row_">
                    <p>Couleur:</p>
                    <p>{profil.couleur}</p>
                </div>
                <div className="row_">
                    <p>Places disponibles: </p>
                    <div className="row_">
                        <IoPerson/>
                        <p>{profil.number}</p>
                    </div>
                </div>
                <div className="participe row_">
                        <div className="prixCar v2">
                        <span>{profil.prix}</span>
                        <IoLogoEuro size="25"/>
                    </div>
                    <button>Je participe</button>
                </div>
            </div>
        </div>
    )
}