import React from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import * as S from "./style"

export default function Home() {
    return (
        <S.Container>
            <S.Box>
                <ul>
                    <li>
                        <Link to="/about_me">Sobre Mim</Link>
                    </li>
                    <li>
                        <Link to="/my_technologies">Tecnologias</Link>
                    </li>
                    <li>
                        <Link to="/my_hobbies">Hobbies</Link>
                    </li>
                    <li>
                        <Link to="/academic_formation">Formação Acadêmica</Link>
                    </li>
                    <li>
                        <Link to="/my_projects">Meus Projetos</Link>
                    </li>
                    <li>
                        <Link to="/contact_me">Fale comigo!</Link>
                    </li>
                </ul>
                <S.Title>
                    <p>Olá =)</p>
                    <p>Sou Adriana Gutierrez,</p>
                    <p>Desenvolvedora de Front-End!</p>
                    <p>Seja muito bem-vindo(a) ao meu portfólio!</p>
                </S.Title>
            </S.Box>

            <h5>&copy; Projeto final do Curso Vai Na Web - Prof. Marlon Yuri - Feito com 🧡 pela aluna Adriana Gutierrez - 10/2022</h5>
            
        </S.Container>
    )
}

