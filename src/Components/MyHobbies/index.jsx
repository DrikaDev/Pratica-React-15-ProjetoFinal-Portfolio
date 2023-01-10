import React from "react";
import { Link } from "react-router-dom"
import Astronauta from "../../Assets/Drika_Astronauta.png"
import Croche from "../../Assets/crochê.png"
import Academia from "../../Assets/musculação.png"
import TV from "../../Assets/Filme.png"
import Estudar from "../../Assets/estudar.png"
import Costurar from "../../Assets/Costurar.png"
import * as S from "../MyHobbies/style"

export default function MyHobbies() {
    return (
        <S.Container>
            <S.Home>
                <Link to="/"><img src={Astronauta} alt="Desenho Drika Astronauta"/>Início</Link>
            </S.Home>

            <h1>Meus Hobbies</h1>

            <S.Box_Hobbies>
                <div>
                    <img class="move" src={Croche} alt="Desenho de crochê de coração" />
                    <p>Gosto de fazer crochê de fio de malha para presentear família, amigos e para decorar minha casa.</p>
                </div>

                <div>
                    <img class="move" src={Academia} alt="Desenho fazendo musculação" />
                    <p>Gosto de fazer atividades físicas. Curto fazer aulas de bike e musculação.</p>
                </div>

                <div>
                    <img class="move" src={TV} alt="Desenho comendo pipoca" />
                    <p>Gosto de maratonar filmes e séries quando sobra um tempinho pra mim.</p>

                </div>

                <div>
                    <img class="move" src={Estudar} alt="Desenho com livros" />
                    <p>Gosto de estudar programação. Se deixar, passo horas na frente do computador!</p>
                </div>

                <div>
                    <img class="move" src={Costurar} alt="Desenho costurando" />
                    <p>Gosto de costurar para decorar minha casa, customizar peças de roupas, 
                        e fazer itens para meu filho como brinquedos de pano ou etc.</p>
                </div>
                
            </S.Box_Hobbies>
        </S.Container>
    )
}