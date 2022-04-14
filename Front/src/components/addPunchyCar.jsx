import '../../public/assets/css/addPunchyCar.css';
import { IoReader, IoPencilOutline, IoPush, IoLocationSharp, IoCalendar, IoAccessibilitySharp, IoLogoEuro, IoPeople } from "react-icons/io5";

export const AddPunchyCar = () => {
    return (
        <div className="overlayPunchy2">
            <h1>Ajouter un covoiturage</h1>
            <form className='formAdd' action="">
                <div className="row">
                    <div className="label">
                        <label>Lieu de départ</label>
                        <IoPencilOutline className='icon' size="20px" />
                        <input type="text"/> 
                    </div>
                    <div className="label">
                        <label>Lieu d'arrivé</label>
                        <IoPencilOutline className='icon' size="20px" />
                        <input type="text"/> 
                    </div>
                </div>
                <div className="row">
                    <div className="label">
                        <label>Début</label>
                        <IoLocationSharp className='icon' size="20px"/>
                        <input type="date"/>
                    </div>
                    <div className="label">
                        <label>Arrivé</label>
                        <IoCalendar className='icon' size="20px" />
                        <input type="date"/> 
                    </div>
                    <div className="label">
                        <label>Evènement</label>
                        <IoReader className='icon' size="20px"/>
                        <select id="categories">
                            <option value="festif">Festif</option>
                            <option value="culturel">Culturel</option>
                            <option value="divertissement">Divertissement</option>
                            <option value="sportif">Sportif</option>
                            <option value="autres">Aucun</option>
                        </select>
                    </div> 
                    <div className="label num">
                        <label>Places disponible</label>
                        <IoCalendar className='icon' size="20px" />
                        <input type="number"/> 
                    </div>
                </div>
                <div className="row">
                    <div className="label">
                        <label>Type de voiture</label>
                        <IoLogoEuro className='icon' size="20px" />
                        <input type="texte"/> 
                    </div>
                    <div className="label">
                        <label>Couleur de la voiture</label>
                        <IoPeople className='icon' size="20px" />
                        <input type="texte"/> 
                    </div> 
                </div>
                <div className="row2">
                        <div className="label">
                        <label>prix</label>
                        <IoCalendar className='icon' size="20px" />
                        <input type="number"/> 
                    </div>
                    <div className="label">
                        <label>Type Payment</label>
                        <IoReader className='icon' size="20px"/>
                        <select id="categories">
                            <option value="carte">Carte</option>
                            <option value="espece">Espèce</option>
                        </select>
                    </div>
                </div>
                <button className='btnAdd'>Je m'inscris !</button>
            </form>
        </div>
    )
}