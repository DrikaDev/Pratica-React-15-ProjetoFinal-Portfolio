import React from "react";
import { Link } from "react-router-dom"
import Astronauta from "../../Assets/Drika_Astronauta.png"
import Unip from "../../Assets/unip.png"
import Uninove from "../../Assets/uninove.png"
import VaiNaWeb from "../../Assets/VaiNaWeb.png"
import Anhanguera from "../../Assets/anhanguera.png"
import * as S from "./style"

export default function AcademicFormation() {
    return (
        <S.Container>
            <S.Home>
                <Link to="/"><img src={Astronauta} alt="Desenho Drika Astronauta"/>Início</Link>
            </S.Home>

            <h1>Formação Acadêmica</h1>

            <S.Box_AcademicFormation>
                <div>
                    <img src={Unip} alt="Logo Unip" />
                    <S.Paragrafo>
                        <p>Gestão de RH</p>
                        <p>2007</p>
                        <p>Concluído</p>
                    </S.Paragrafo>
                </div>

                <div>
                    <img src={Uninove} alt="Logo Uninove" />
                    <S.Paragrafo>
                        <p>Pós em Tradução Português/Inglês</p>
                        <p>2011</p>
                        <p>Concluído</p>
                    </S.Paragrafo>
                </div>

                <div>
                    <img src={Uninove} alt="Logo Uninove" />
                    <S.Paragrafo>
                        <p>Gestão em Secretariado</p>
                        <p>2014</p>
                        <p>Concluído</p>
                    </S.Paragrafo>
                </div>

                <div>
                    <img src={VaiNaWeb} alt="Logo VaiNaWeb" />
                    <S.Paragrafo>
                        <p>Técnico de FrontEnd</p>
                        <p>2022</p>
                        <p>Concluído</p>
                    </S.Paragrafo>
                </div>

                <div>
                    <img src={Anhanguera} alt="Logo Anhanguera" />
                    <S.Paragrafo>
                        <p>Análise e Desenvolvimento de Sistemas</p>
                        <p>2023 - 2024</p>
                        <p>Em andamento</p>
                    </S.Paragrafo>
                </div>
            </S.Box_AcademicFormation>

        </S.Container>
    )
}