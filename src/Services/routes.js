import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../Components/Home/index"
import AboutMe from "../Components/AboutMe/index"
import MyTecnologies from "../Components/MyTecnologies/index"
import MyHobbies from "../Components/MyHobbies/index"
import AcademicFormation from "../Components/AcademicFormation"
import MyProjects from "../Components/MyProjects"
import ContactMe from "../Components/ContactMe"
import ErroPage from "../Components/ErroPage";

export default function Rotas () {
    return(
        <Router>
            <Routes>
                <Route path= "/" element= {<Home/>}/>
                <Route path= "/about_me" element= {<AboutMe/>}/>
                <Route path= "/my_technologies" element= {<MyTecnologies/>}/>
                <Route path= "/my_hobbies" element= {<MyHobbies/>}/>
                <Route path= "/academic_formation" element= {<AcademicFormation/>}/>
                <Route path= "/my_projects" element= {<MyProjects/>}/>
                <Route path= "/contact_me" element= {<ContactMe/>}/>
                <Route path= "*" element= {<ErroPage/>}/>
            </Routes>
        </Router>
    )
}