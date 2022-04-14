import React from "react";
import { icons } from "react-icons";
import euro from "../../public/assets/img/svg/prix.svg";
import "../../public/assets/css/friends.css";
import friendImg1 from "../../public/assets/img/friend1.jpg";
import friendImg2 from "../../public/assets/img/friend2.jpg";
import friendImg3 from "../../public/assets/img/friend3.jpg";
import loopImg from "../../public/assets/img/loop.png";
import downFleche from "../../public/assets/img/down.png";
import upFleche from "../../public/assets/img/up.png";
import punchie from "../../public/assets/img/punchie.png";
import { FiUser } from "react-icons/fi";
import { MdOutlineSchool } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdNorth } from "react-icons/md";
import { MdSouth } from "react-icons/md";

export const Friends = () => {

  return (
    <div className="main">
      {/* <h1 className="page-title">Amis</h1> */}


      {/* Barre de filtres */}
      <form id="filterBar">
        <label id="labelSchool">Établissement scolaire</label>
        <select name="school">
          <option value="institutD">Institut du Design</option>
          <option value="iut">IUT</option>
          <option value="maritime">Lycée Maritime</option>
          <option value="institPRo">Lycée L'Institution / La Providence</option>
          <option value="maupertuis">Lycée Maupertuis</option>
          <option value="jc">Lycée Jacques Cartier</option>
          <option value="marineMarchande">École de Marine Marchande</option>
        </select>

        <label id="labelPunchy">Score Punchy</label>
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


      {/* Barre de recherche */}
      <form id="researchBar">
        <input type="text" name="research" />
        <button type="submit">
          <img className="loop" src={loopImg} alt="loupe"></img>
        </button>
      </form>


      {/* Liste d'amis */}
      <div id="friendsList">

        <div className="friendBlock">
          <div className="friendImg">
            <img src={friendImg1} />
          </div>
          <div className="friendInfos">
            <ul className="infosList">
              <li className="friendName">
                <FiUser />
                Mathieu Peran
              </li>
              <li>
                <MdOutlineLocationOn />
                Saint-Malo
              </li>
              <li className="schoolName">
                <MdOutlineSchool />
                Institut Marie-Thérèse Solacroup
              </li>
            </ul>
            <div className="punchiesNumber">
              13<img src={punchie}></img>
            </div>
            <button className="profileButton" type="submit">
              Voir profil
            </button>
          </div>
        </div>

        <div className="friendBlock">
          <div className="friendImg">
            <img src={friendImg2} />
          </div>
          <div className="friendInfos">
            <ul className="infosList">
              <li className="friendName">
                <FiUser />
                Antoine Mounier
              </li>
              <li>
                <MdOutlineLocationOn />
                Cancale
              </li>
              <li className="schoolName">
                <MdOutlineSchool />
                Institut supérieur de design
              </li>
            </ul>
            <div className="punchiesNumber">
              19<img src={punchie}></img>
            </div>
            <button className="profileButton" type="submit">
              Voir profil
            </button>
          </div>
        </div>

        <div className="friendBlock">
          <div className="friendImg">
            <img src={friendImg3} />
          </div>
          <div className="friendInfos">
            <ul className="infosList">
              <li className="friendName">
                <FiUser />
                Pierre Lemonnier
              </li>
              <li>
                <MdOutlineLocationOn />
                Saint-Jouan
              </li>
              <li className="schoolName">
                <MdOutlineSchool />
                École nationale supérieure Maritime
              </li>
            </ul>
            <div className="punchiesNumber">
              15<img src={punchie}></img>
            </div>
            <button className="profileButton" type="submit">
              Voir profil
            </button>
          </div>
        </div>

        <div className="friendBlock">
          <div className="friendImg">
            <img src={friendImg1} />
          </div>
          <div className="friendInfos">
            <ul className="infosList">
              <li className="friendName">
                <FiUser />
                Mathieu Peran
              </li>
              <li>
                <MdOutlineLocationOn />
                Saint-Méloir
              </li>
              <li className="schoolName">
                <MdOutlineSchool />
                Institut Marie-Thérèse Solacroup
              </li>
            </ul>
            <div className="punchiesNumber">
              17<img src={punchie}></img>
            </div>
            <button className="profileButton" type="submit">
              Voir profil
            </button>
          </div>
        </div>

        <div className="friendBlock">
          <div className="friendImg">
            <img src={friendImg2} />
          </div>
          <div className="friendInfos">
            <ul className="infosList">
              <li className="friendName">
                <FiUser />
                Mathieu Peran
              </li>
              <li>
                <MdOutlineLocationOn /> Saint-Malo
              </li>
              <li className="schoolName">
                <MdOutlineSchool />
                IUT
              </li>
            </ul>
            <div className="punchiesNumber">
              8<img src={punchie}></img>
            </div>
            <button className="profileButton" type="submit">
              Voir profil
            </button>
          </div>
        </div>

        <div className="friendBlock">
          <div className="friendImg">
            <img src={friendImg3} />
          </div>
          <div className="friendInfos">
            <ul className="infosList">
              <li className="friendName">
                <FiUser />
                Mathieu Peran
              </li>
              <li>
                <MdOutlineLocationOn />
                La Fresnais
              </li>
              <li className="schoolName">
                <MdOutlineSchool />
                Lycée Jacques-Cartier
              </li>
            </ul>
            <div className="punchiesNumber">
              5<img src={punchie}></img>
            </div>
            <button className="profileButton" type="submit">
              Voir profil
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
