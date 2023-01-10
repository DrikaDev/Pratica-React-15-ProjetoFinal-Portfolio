import React from "react";
import { Link } from "react-router-dom"
import Astronauta from "../../Assets/Drika_Astronauta.png"
import DesenhoDrikaDev from "../../Assets/Oie.png"
import CV from "../../Assets/CV Drika_Dev.pdf"
import * as S from "./style"

export default function AboutMe() {
    return (
        <S.Container>

            <S.Home>
                <Link to="/"><img src={Astronauta} alt="Desenho Drika Astronauta"/>Início</Link>
            </S.Home>

            <S.AboutMe>
                <h1>Sobre mim</h1>

                <S.Information>
                    <img src={DesenhoDrikaDev} alt="Desenho Drika acenando" />

                    <div>
                        <p>Olá, muito prazer, sou Adriana Gutierrez, mas pode me chamar de Drika Dev!</p>
                        <p>Iniciei meus estudos com tecnologia em Janeiro de 2022 e estou amando e curtindo cada aprendizado!</p>

                        <p>Sempre gostei muito de computador e artesanato (sou bastante criativa e caprichosa), por isso,
                            desejo me tornar uma Dev de Front-End para unir estas duas coisas que gosto muito e usar 
                            estas minhas habilidades fazendo sites lindos e práticos para os usuários terem
                            uma experiência incrível na hora de navegar!</p>
                        <p>Gostaria de conhecer mais sobre a minha trajetória?</p>
                        <p>Clique aqui para ver meu <a href={CV} target="_blank">CV</a>!</p>
                    </div>

                </S.Information>

            </S.AboutMe>

        </S.Container>
    )
}