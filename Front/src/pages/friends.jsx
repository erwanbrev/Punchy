import React from "react";
import { icons } from "react-icons";
import euro from "../../public/assets/img/svg/prix.svg"
import "../../public/assets/css/friends.css"
import friendImg from "../../public/assets/img/friend1.jpg";
import loopImg from '../../public/assets/img/loop.png';
import downFleche from '../../public/assets/img/down.png';
import upFleche from '../../public/assets/img/up.png';
import punchie from '../../public/assets/img/punchie.png';

export const Friends = () => {
    return (
        <div className="main">
            <h1 className="page-title">Amis</h1>
            
                <form id="researchBar">
                    <input type="text" name="research"/>
                    <button type="submit"><img className="loop" src={loopImg} alt="loupe"></img>
                    </button>
                </form>

                <form id="filterBar">
                <label>Établissement scolaire</label>
                        <select name="school">
                            <option value="iut">IUT</option>
                            <option value="lyceeM">Lycée Maritime</option>
                            <option value="institutD">Institut de design</option>
                        </select>
                    
                <label>Note de covoiturage</label>
                <img src={downFleche}></img>
                <img src={upFleche}></img>
                
                    <button type="submit"><img className="loop" src={loopImg} alt="loupe"></img>
                    </button>
                </form>   

                <div id="listFriends">
                    <div className ="friendBlock">
                        <div className="friendImg">
                        <img id="profileImg" src ={friendImg}/>
                        </div>
                        <div className="friendInfos">
                                <ul className="infosList">
                                    <li className="friendName">Mathieu Péran</li>
                                    <li className="schoolName">Institut Marie-Thérèse Solacroup</li>
                                </ul>
                                <div className="punchiesNumber">13<img src={punchie}></img></div>
                                <button id="profileButton" type="submit">Voir profil</button>
                        </div>
                    </div>
                    <div className ="friendBlock">
                        <div className="friendImg">
                        <img id="profileImg" src ={friendImg}/>
                        </div>
                        <div className="friendInfos">
                                <ul className="infosList">
                                    <li className="friendName">Antoine Mounier</li>
                                    <li className="schoolName">Institut Marie-Thérèse Solacroup</li> 
                                </ul>
                                <div className="punchiesNumber">19<img src={punchie}></img></div>
                                <button id="profileButton" type="submit">Voir profil</button>
                        </div>
                    </div>
                    <div className ="friendBlock">
                        <div className="friendImg">
                        <img id="profileImg" src ={friendImg}/>

                        </div>
                        <div className="friendInfos">
                    
                                <ul className="infosList">
                                    <li className="friendName">Pierre Lemonnier</li>
                                    <li className="schoolName">Institut Marie-Thérèse Solacroup</li>
                                
                                </ul>
                                <div className="punchiesNumber">15<img src={punchie}></img></div>
                                <button id="profileButton" type="submit">Voir profil</button>  
                        </div>
                    </div>
                    <div className ="friendBlock">
                        <div className="friendImg">
                        <img id="profileImg" src ={friendImg}/>
                        </div>
                        <div className="friendInfos">
                    
                                <ul className="infosList">
                                    <li className="friendName">Mathieu Péran</li>
                                    <li className="schoolName">Institut Marie-Thérèse Solacroup</li>  
                                </ul>
                                <div className="punchiesNumber">13<img src={punchie}></img></div>
                                <button id="profileButton" type="submit">Voir profil</button> 
                        </div>
                    </div>
                    <div className ="friendBlock">
                        <div className="friendImg">
                        <img id="profileImg" src ={friendImg}/>
                        </div>
                        <div className="friendInfos">
                    
                                <ul className="infosList">
                                    <li className="friendName">Mathieu Péran</li>
                                    <li className="schoolName">Institut Marie-Thérèse Solacroup</li>  
                                </ul>
                                <div className="punchiesNumber">13<img src={punchie}></img></div>
                                <button id="profileButton" type="submit">Voir profil</button> 
                        </div>
                    </div>
                    <div className ="friendBlock">
                        <div className="friendImg">
                        <img id="profileImg" src ={friendImg}/>
                        </div>
                        <div className="friendInfos">
                    
                                <ul className="infosList">
                                    <li className="friendName">Mathieu Péran</li>
                                    <li className="schoolName">Institut Marie-Thérèse Solacroup</li>  
                                </ul>
                                <div className="punchiesNumber">13<img src={punchie}></img></div>
                                <button id="profileButton" type="submit">Voir profil</button> 
                        </div>
                    </div>
                </div>
        </div>
    )
}