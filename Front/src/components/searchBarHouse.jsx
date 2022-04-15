import { MdSouth, MdNorth } from "react-icons/md";
import loopImg from "../../public/assets/img/loop.png";
import '../../public/assets/css/housing.css';

export const SearchBarHouse = () => {
    return (
        <div>
            <form id="filterBarH">
                <label>Trier</label>
                <input placeholder="Localisation" type="text" />
                <input placeholder="Surface m²" type="number" />
                <select name="n-price" >
                    <option value="maritime">Prix</option>
                    {/* intervalle de prix */}
                </select>
                <select name="n-content" >
                    <option value="content">Meublé</option>
                    <option value="no-content">Non meublé</option>
                </select>
                <select name="n-type" >
                    <option value="type">Type</option>
                    <option value="flat">Appartement</option>
                    <option value="home">Maison</option>
                </select>

                <label>Score Punchy</label>
                <div id="scoreUp">
                    <MdNorth />
                </div>
                <div id="scoreDown">
                    <MdSouth />
                </div>

                <button type="submit">
                    <img className="loop" src={loopImg} alt="loupe"></img>
                </button>
            </form>
        </div>
    )
}