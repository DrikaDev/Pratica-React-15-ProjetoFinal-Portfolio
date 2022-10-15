import React from "react";
import { Link } from "react-router-dom"
import Harry from "../../Assets/HarryPotter.png"
import Dupla from "../../Assets/DesafioEmDupla.png"
import Lista from "../../Assets/ToDoList.png"
import Movies from "../../Assets/Movies.jpg"
import Noivinhos from "../../Assets/Noivinhos.jpg"
import LOL from "../../Assets/LeagueOfLegends.jpg"
import Convite from "../../Assets/Convite.jpg"
import Decofidicador from "../../Assets/Decodificador.png"
import ODS from "../../Assets/ODS.jpg"
import Carousel from "nuka-carousel/lib/carousel";
import * as S from "./style"

const estiloDoCarrossel = {
    autoplay: true,
    autoplayInterval: 5000,
    // speed: 1000,
    slidesToShow: 2,
    swipeable: true,
    wrapAround: true,
    defaultControlsConfig: {
        nextButtonText: ">",
        prevButtonText: "<",
        pagingDotStyle: {
            fill: "none"
        }
    }
}

export default function MyProjects() {
    return (
        <S.Container>
            <S.Home>
                <Link to="/">Home</Link>
            </S.Home>
            <h1>Meus Projetos</h1>
            <h3>Alguns dos meus projetos realizados ao longo desse ano de 2022:</h3>

            <S.Box_Projects>

                <Carousel {...estiloDoCarrossel}
                    // autoplay={true}
                    // autoplayInterval={2000}
                    // slidesToShow={2}
                    // wrapAround={true}
                    // cellSpacing={200}
                    // defaultControlsConfig={{
                    //     nextButtonText: ">",
                    //     prevButtonText: "<",
                    //     pagingDotsStyle: {fill: "none"} 
                    // }}
                >

                    <div>
                        <h2>Projeto: API Harry Potter</h2>
                        <img src={Harry} alt="Foto desafio Harry Potter"/>
                        <p><a href="https://apidoharrypotter.netlify.app/" target="_blank">Clique aqui para ver o site</a></p>
                        <p><a href="https://github.com/DrikaDev/Pratica-React-13-API-HarryPotter/" target="_blank">Clique aqui para ver o repositório</a></p>
                    </div>

                    <div>
                        <h2>Projeto: 1º Trabalho em dupla</h2>
                        <img src={Dupla} alt="Foto projeto em dupla"/>
                        <p><a href="https://desafiopairprogramming.netlify.app/" target="_blank">Clique aqui para ver o site</a></p>
                        <p><a href="https://github.com/DrikaDev/VaiNaWeb-React-pair-programming/" target="_blank">Clique aqui para ver o repositório</a></p>
                    </div>

                    <div>
                        <h2>Projeto: To Do List</h2>
                        <img src={Lista} alt="Foto desafio todolist"/>
                        <p><a href="https://todolistcomsetstate.netlify.app" target="_blank">Clique aqui para ver o site</a></p>
                        <p><a href="https://github.com/DrikaDev/Pratica-React-11-ToDoList-com-useState/" target="_blank">Clique aqui para ver o repositório</a></p>
                    </div>

                    <div>
                        <h2>Projeto: API de Filmes</h2>
                        <img src={Movies} alt="Foto desafio Filmes"/>
                        <p><a href="https://drikasmovies.netlify.app/" target="_blank">Clique aqui para ver o site</a></p>
                        <p><a href="https://github.com/DrikaDev/Desafio-10-Drikas-Movies-APIs/" target="_blank">Clique aqui para ver o repositório</a></p>
                    </div>

                    <div>
                        <h2>Projeto: 1º Trabalho Freelancer</h2>
                        <img src={Noivinhos} alt="Foto Noivinhos da Carminha"/>
                        <p><a href="https://drikadev.github.io/E-commerce-Noivinhos-da-Carminha/" target="_blank">Clique aqui para ver o site</a></p>
                        <p><a href="https://github.com/DrikaDev/E-commerce-Noivinhos-da-Carminha/" target="_blank">Clique aqui para ver o repositório</a></p>
                    </div>

                    <div>
                        <h2>Projeto: Legue Of Legends</h2>
                        <img src={LOL} alt="Foto Landing Page League Of Legends"/>
                        <p><a href="https://drikadev.github.io/Desafio-Login-League-of-Legends/" target="_blank">Clique aqui para ver o site</a></p>
                        <p><a href="https://github.com/DrikaDev/Desafio-Login-League-of-Legends/" target="_blank">Clique aqui para ver o repositório</a></p>
                    </div>

                    <div>
                        <h2>Projeto: Convite de Aniversário</h2>
                        <img src={Convite} alt="Foto do Convite"/>
                        <p><a href="https://drikadev.github.io/Convite.aniversario/" target="_blank">Clique aqui para ver o site</a></p>
                        <p><a href="https://github.com/DrikaDev/Convite.aniversario/" target="_blank">Clique aqui para ver o repositório</a></p>
                    </div>

                    <div>
                        <h2>Projeto: Decodificador Alura</h2>
                        <img src={Decofidicador} alt="Foto do Decodificador Alura"/>
                        <p><a href="https://drikadev.github.io/ChallengeDecodificador2/" target="_blank">Clique aqui para ver o site</a></p>
                        <p><a href="https://github.com/DrikaDev/ChallengeDecodificador2/" target="_blank">Clique aqui para ver o repositório</a></p>
                    </div>

                    <div>
                        <h2>Projeto: Desafio ODS Jaçanã</h2>
                        <img src={ODS} alt="Foto do ODS Jaçanã"/>
                        <p><a href="https://odsnojacana.netlify.app/" target="_blank">Clique aqui para ver o site</a></p>
                        <p><a href="https://github.com/DrikaDev/Pratica-React-15-ODS-Jacana/" target="_blank">Clique aqui para ver o repositório</a></p>
                    </div>

                </Carousel>

            </S.Box_Projects>
        </S.Container>
    )
}