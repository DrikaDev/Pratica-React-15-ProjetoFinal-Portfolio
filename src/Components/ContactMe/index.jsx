import React from "react";
import { Link } from "react-router-dom"
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
                <Link to="/">Home</Link>
            </S.Home>

            <h1>Fale Comigo!</h1>
            <h2>Entre em contato através do Email, WhatsApp ou me siga nas redes sociais.</h2>

            <S.BoxContactMe>

                <S.BoxSocialNetworks>
                    <a href="mailto:adriguti.adriana@hotmail.com" target="_blank"><img src={Email} alt="Logo do Email" /></a>
                    <a href ="https://wa.me/5511970371923" target="_blank"><img src={Whats} alt="Logo do Whatsapp"/></a>
                    <a href="https://www.linkedin.com/in/drikadev/" target="_blank"><img src={Linkedin} alt="Logo do Linkedin" /></a>
                    <a href="https://www.instagram.com/drika_dev/" target="_blank"><img src={Instagram} alt="Logo do Instagram" /></a>
                    <a href="https://github.com/DrikaDev" target="_blank"><img src={GitHub} alt="Logo do GitHub" /></a>
                </S.BoxSocialNetworks>

                <figure>
                    <img src={MeLiga} alt="Foto Me Liga" />
                </figure>

                <p>Obrigada pela sua visita! 🧡</p>

            </S.BoxContactMe>
        </S.Container>
    )
}