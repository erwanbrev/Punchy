import React from "react";
import { icons } from "react-icons";
import EventImportant from "../components/evenement/eventimportant";
import EventPerso from "../components/evenement/EventPerso";
import "../../public/assets/css/evenement.css"
import { FaPlusCircle } from 'react-icons/fa';

export const Event = () => {
    return (
        <div className="main-container">
            <article className="EvenementImportant">
                <EventImportant />
            </article>
            <article className="EvenementPerso">
                <EventPerso />
            </article>
            <div className="add">
                <FaPlusCircle />
            </div>
        </div>
    )
}