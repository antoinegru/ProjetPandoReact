import React from 'react';
import Button_valid from "../components/Button_valid";
import VideoHolder from "../components/VideoHolder";
import Button_news from "../components/Button_news";
import {NavLink} from "react-router-dom";
import Text from "../components/Text";
import Text2 from "../components/Text2";
import Title from "../components/Title";
import Text3 from "../components/Text3";

const Questionnaire3 = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <VideoHolder></VideoHolder> {/*on met notre video holder qui remplace les vidéos de bases*/}
                </div>
                <div className="col">
                    <Title></Title>
                    <Text3></Text3>
                    <Button_news page = "page3"></Button_news> {/*réutilisation de mes boutons news dans ma nouvelle page*/}
                    <NavLink to={"/pagefin"}>Continuer</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Questionnaire3;