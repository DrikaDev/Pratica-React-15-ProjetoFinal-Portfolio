import React from "react";
import { Link } from "react-router-dom"
import Astronauta from "../../Assets/Drika_Astronauta.png"
import DesenhoDrikaTec from "../../Assets/Eunomicro.png"
import Html from "../../Assets/html.png"
import CSS from "../../Assets/css.png"
import JS from "../../Assets/javascript.png"
import FotoReact from "../../Assets/react.png"
import Git from "../../Assets/git.png"
import * as S from "../MyTecnologies/style"


export default function MySkills() {
    return (
        <S.Container>

            <S.Home>
                <Link to="/"><img src={Astronauta} alt="Desenho Drika Astronauta" />Início</Link>
            </S.Home>

            <S.Box>
                <h1>Minhas Tecnologias</h1>

                <S.Section>

                    <div>
                        <figure>
                            <img src={DesenhoDrikaTec} alt="Desenho Drika no Computador" />
                        </figure>
                    </div>

                    <p>O que aprendi ao longo desse ano de 2022:</p>

                    <S.Tecnologies>
                        <figure>
                            <img src={Html} alt="Logo Html" />
                            <img src={CSS} alt="Logo CSS" />
                            <img src={JS} alt="Logo JavaScript" />
                            <img src={FotoReact} alt="Logo React" />
                            <img src={Git} alt="Logo Git" />
                        </figure>

                    </S.Tecnologies>

                </S.Section>

            </S.Box>

        </S.Container>
    )
}