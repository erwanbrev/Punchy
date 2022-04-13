import '../../public/assets/css/addPunchy.css';
import { IoReader, IoPencilOutline, IoPush, IoLocationSharp, IoCalendar, IoAccessibilitySharp, IoLogoEuro, IoPeople } from "react-icons/io5";

export const AddPunchy = () => {
    return (
        <div className="overlayPunchy">
            <h1>Ajouter un évènement</h1>
            <form className='formAdd' action="">
                <div className="row">
                    <div className="label">
                        <label>Catégorie</label>
                        <IoReader className='icon' size="20px"/>
                        <select id="categories">
                            <option value="festif">Festif</option>
                            <option value="culturel">Culturel</option>
                            <option value="divertissement">Divertissement</option>
                            <option value="sportif">Sportif</option>
                            <option value="autres">Autres</option>
                        </select>
                    </div>
                    <div className="label">
                        <label className='mLabel'>Titre</label>
                        <IoPencilOutline className='icon' size="20px" />
                        <input type="text"/> 
                    </div>
                </div>
                <div className="row">
                    <div className="label">
                        <label className='mLabel'>Lieu</label>
                        <IoLocationSharp className='icon' size="20px"/>
                        <input type="text"/>
                    </div>
                    <div className="label">
                        <label className='mLabel'>Date de début</label>
                        <IoCalendar className='icon' size="20px" />
                        <input type="date"/> 
                    </div>
                    <div className="label">
                        <label className='mLabel'>Date de fin</label>
                        <IoCalendar className='icon' size="20px" />
                        <input type="date"/> 
                    </div>
                </div>
                <div className="row">
                    <div className="label">
                        <label className='mLabel'>Nom</label>
                        <IoAccessibilitySharp className='icon' size="20px"/>
                        <input type="text"/>
                    </div>
                    <div className="label">
                        <label className='mLabel'>Prix</label>
                        <IoLogoEuro className='icon' size="20px" />
                        <input type="number"/> 
                    </div>
                    <div className="label">
                        <label className='mLabel'>Participants</label>
                        <IoPeople className='icon' size="20px" />
                        <input type="number"/> 
                    </div>
                </div>
                <div className='description'>
                    <label htmlFor="" className='mLabel'>Description</label>
                    <input type="text" />
                </div>
                <div className='affiche'>
                    <label htmlFor="" className='mLabel'>Affiche de l'évènement</label>
                    <IoPush className='iconAffiche' size="50"/>
                    <input type="file" />
                </div>
                <button className='btnAdd'>Je m'inscris !</button>
            </form>
        </div>
    )
}