import React from "react"
import "../../public/assets/css/searchbar.css"
export const Searchbar = () => {
    return (
        <div className="cont-search">
            <div className="housing-localiz">
                <input type="text" placeholder="Localisation" />
            </div>
            <div className="housing-surface">
                Surface
                {/* intervalle */}
            </div>
            <div className="housing-price">
                Prix
                {/* intervalle */}
            </div>
            <div className="housing-content">
                <label class="container-cont">Non meublé
                    <input type="radio" checked="checked" name="radio" />
                    <span class="checkmark"></span>
                </label>

                <label class="container-cont">Meublé
                    <input type="radio" name="radio" />
                    <span class="checkmark"></span>
                </label>
            </div >
            <div className="housing-type">Type</div>
        </div >
    )
}