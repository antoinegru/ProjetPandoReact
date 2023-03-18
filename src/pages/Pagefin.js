import React from 'react';
import {NavLink} from "react-router-dom";

const Pagefin = () => {
    return (
        <div className={"texteFin"}> {/*ajout d'un className pour pouvoir modifier la mise en page avec CSS*/}
            <h1>Fin du test : Faisons équipe ensemble :))</h1>
            <NavLink to={"/page1"} className={"returntobeginning"}>Retourner au début</NavLink> {/*retourner vers la page de début*/}
        </div>
    );
};

export default Pagefin;