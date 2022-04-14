import '../../public/assets/css/searchBarCar.css';
import { IoStar, IoLogoEuro, IoTimeOutline, IoCaretForward, IoLocation, IoCalendar, IoPeople, IoSearch } from 'react-icons/io5';

export const SearchBarCar = () => {
    return (
        <div className="barCar">
            <form action="" className="searchCar">
                <div className="flex">
                    <div className="choose nombre">
                        <IoLocation/>
                        <input placeholder='destination' type="text" />
                    </div>
                    <div className="choose">
                        <IoCalendar/>
                        <input placeholder='Quand' type="date" />
                    </div>
                    <div className="choose nombre">
                        <IoPeople/>
                        <input placeholder='Personne(s)' type="number" />
                    </div>
                </div>
                <div className="search">
                    <IoSearch className='searchIcon'/>
                </div>
            </form>
        </div>
    )
}