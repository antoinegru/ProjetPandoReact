import React from 'react';
import Button_valid from "../components/Button_valid";
import VideoHolder from "../components/VideoHolder";
import Button_news from "../components/Button_news";
import {NavLink} from "react-router-dom";
import Text from "../components/Text";
import Text2 from "../components/Text2";
import Title from "../components/Title";

const Questionnaire2 = () => {
    return (
        <div className="container"> {/*conteneur avec des className, respectivement container,row, col pour  une mise en page flex*/}
            <div className="row">
                <div className="col">
                    <VideoHolder></VideoHolder>
                </div>
                <div className="col">
                    <Title></Title>{/*Appel composant Title*/}
                    <Text2></Text2>{/*Appel composant Text2*/}
                    <Button_news page = "page2"></Button_news> {/*réutilisation de mes boutons news dans ma nouvelle page*/}
                    <NavLink to={"/page3"}>Continuer</NavLink> {/*lien de navigation vers la prochaine page*/}
                </div>

            </div>
        </div>
    );
};

export default Questionnaire2;