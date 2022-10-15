import React from "react";
import { Link } from "react-router-dom"
import Erro from "../../Assets/Erro.png"
import * as S from "./style"

export default function ErroPage() {
    return (
        <S.Container>
            <S.Home>
                <Link to="/">Home</Link>
            </S.Home>
            <h1>Página não encontrada</h1>
            <img src={Erro} alt="Foto desenho erro página não encontrada" />
        </S.Container>
    )
}
