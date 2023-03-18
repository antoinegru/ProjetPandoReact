import {BrowserRouter,Routes,Route} from "react-router-dom"
import React from "react";
import Questionnaire from "./pages/Questionnaire";
import "./styles/all.css"
import QuestionnaireP2 from "./pages/QuestionnaireP2";
import QuestionnaireP3 from "./pages/QuestionnaireP3";
import Pagefin from "./pages/Pagefin";
const App = () => {
    return (
        <BrowserRouter>{/*création de mes routes, en mettant les liens vers nos chemins. */}
            <Routes>
                <Route path = "/" element={<Questionnaire/>} />
                <Route path = "/*" element={<Questionnaire/>} /> {/*ici on fait en sorte que si la personne tape n'importe quoi en lien il est ramené à la page de questionnaire numéro 1 */}
                <Route path = "/page2" element={<QuestionnaireP2/>} />
                <Route path = "/page3" element={<QuestionnaireP3/>} />
                <Route path = "/pagefin" element={<Pagefin/>} />
            </Routes>
        </BrowserRouter>
    )
};

export default App;
