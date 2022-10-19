import React from "react";
import { Link } from "react-router-dom"
import Astronauta from "../../Assets/Drika_Astronauta.png"
import MeLiga from "../../Assets/MeLiga.png"
import Email from "../../Assets/email.png"
import Whats from "../../Assets/whatsapp.png"
import Linkedin from "../../Assets/linkedin.png"
import GitHub from "../../Assets/github.png"
import Instagram from "../../Assets/instagram.png"
import * as S from "./style"

export default function AboutMe() {
    return (
        <S.Container>
            
            <S.Home>
                <Link to="/"><img src={Astronauta} alt="Desenho Drika Astronauta"/>Início</Link>
            </S.Home>

            <h1>Fale Comigo!</h1>
            <h2>Clique nos ícones abaixo e entre em contato através do Email, WhatsApp ou me siga nas redes sociais.</h2>

            <S.BoxContactMe>

                <S.BoxSocialNetworks>
                    <a href="mailto:adriguti.adriana@hotmail.com" target="_blank" rel= "noopener noreferrer"><img src={Email} alt="Logo do Email" /></a>
                    <a href ="https://wa.me/5511970371923" target="_blank" rel= "noopener noreferrer"><img src={Whats} alt="Logo do Whatsapp"/></a>
                    <a href="https://www.linkedin.com/in/drikadev/" target="_blank" rel= "noopener noreferrer"><img src={Linkedin} alt="Logo do Linkedin" /></a>
                    <a href="https://www.instagram.com/drika_dev/" target="_blank" rel= "noopener noreferrer"><img src={Instagram} alt="Logo do Instagram" /></a>
                    <a href="https://github.com/DrikaDev" target="_blank" rel= "noopener noreferrer"><img src={GitHub} alt="Logo do GitHub" /></a>
                </S.BoxSocialNetworks>

                <figure>
                    <img src={MeLiga} alt="Foto Me Liga" />
                </figure>

                <p>Obrigada pela sua visita! 🧡</p>

            </S.BoxContactMe>
        </S.Container>
    )
}