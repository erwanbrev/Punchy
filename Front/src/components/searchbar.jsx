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
                Contenu
            </div>
            <div className="housing-type">Type</div>
        </div>
    )
}