import React from 'react';
import Button_valid from "../components/Button_valid";
import VideoHolder from "../components/VideoHolder";
import Button_news from "../components/Button_news";
import {NavLink} from "react-router-dom";
import Text from "../components/Text";
import Title from "../components/Title";


// premier element rsc qui est notre page de base.
const Questionnaire = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">{/*création de div avec className pour utiliser la techno flex pour la mise en page css*/}
                <VideoHolder></VideoHolder> {/*appel au composent videoHolder créé */}
                </div>
                <div className="col">
                    <Title></Title>
                    <Text></Text>{/*appel au composent text créé */}
                <Button_news page="page1"></Button_news>{/*passage de page1 en props pour pouvoir le réutiliser en conditionel dans notre composant button news*/}
                    <NavLink to={"/page2"}>Continuer</NavLink> {/*création de mon lien vers la deuxième page*/}
                </div>

            </div>
        </div>
    );
};

export default Questionnaire;