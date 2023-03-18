import React, { useState } from "react";

function ButtonWithText(props) {
    const [text, setText] = useState(""); {/* A retirer : base de ma fonction pour gérer des paramètres, inutile au final mais laissé comme exemple*/}

    const handleClick = (event) => { {/*ici en fonction de ce qu'on a passé en props pour faire appel à la fonction on modifie d'une manière ou d'une autre la valeur de notre texte dans la balise p*/}
        if (props.page == "page1") {
            document.querySelector(".ptexte").innerHTML = 'c’est bel et bien vrai et parmi ces aventures, il y a également un power-up de gestion de projet Trello, en collaboration avec MOSH'
        }else if (props.page == "page2"){
            document.querySelector(".ptexte").innerHTML = 'Là on avoue que même nous on ne sait pas trop. Après tout qu’est ce qu’exister ?\n' +
                'Se boire sans soif, comme disait Jean-Paul Sartre ? À méditer, lol.'
        }else if (props.page =="page3"){
            document.querySelector(".ptexte").innerHTML = 'BIG NEWS. Notre 3e projet interne autofinancé. On fabrique des faux sites & fausses applications pour le 7e art et la petite lucarne. À notre actif : Un faux Insta et des fausses stories, un faux Tinder, des fausses recherches Google et un faux Gmail.\n' +
                '\n' +
                'Les Cinq Diables, Super Bourrés, Après l’aurore'
        }
        console.log(props.page)
    };
    return (
        <div className={"div_button"}>
            <button onClick={handleClick}>Big News</button> {/*création de mon bouton big news qui fait appel a ma fonction handleClick pour mettre à jour le texte de ma balise p*/}
            <button onClick={handleClick}>Fake News</button>{/*création de mon bouton Fake news qui fait appel a ma fonction handleClick pour mettre à jour le texte de ma balise p*/}
            <div id="ok">{text}</div>
        </div>
    );
}

export default ButtonWithText;