import React from "react";
import { Link } from "react-router-dom"
import Astronauta from "../../Assets/Drika_Astronauta.png"
import Erro from "../../Assets/Erro.png"
import * as S from "./style"

export default function ErroPage() {
    return (
        <S.Container>

            <S.Home>
                <Link to="/"><img src={Astronauta} alt="Desenho Drika Astronauta" />Início</Link>
            </S.Home>

            <h1>Página não encontrada</h1>

            <S.Erro>
                <img src={Erro} alt="Foto desenho erro página não encontrada" />
            </S.Erro>

        </S.Container>
    )
}
