import styled from "styled-components";
import Background from "../../Assets/Background.1.jpg"

export const Container = styled.section`
    background-image: url(${Background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const Home = styled.div`
    height: 3rem;
    width: 100%;

    img{
        object-fit: contain;
        width: 3rem;
    }
    
    a{
        align-items: center;
        color: whitesmoke;
        display: flex;
        flex-direction: row;
        font-size: 1.5rem;
        height: 4rem;
        list-style: none;
        text-decoration: none;
        width: 10rem;

        &:hover{
            text-shadow: 0px 0px 20px wheat, 0px 0px 30px wheat, 0px 0px 40px wheat;
        }
    }
    
    @media only screen and (min-width: 360px) and (max-width: 800px){
        a{
            margin: 0 auto;
        }
    }
`
export const Box = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100%;

    h1{
        color: whitesmoke;
        font-size: 3rem;
        letter-spacing: 1rem;
        text-align: center;
        text-shadow: 0px 0px 20px wheat;
        width: 100%;
    }

    @media only screen and (min-width: 360px) and (max-width: 800px){
        flex-direction: column;

        h1{
            margin-top: 1rem;
            font-size: 2rem;
        }
    }
`

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    

    div{
        margin: 0 auto;
    }

    img{
        width: 15rem;
    }

    p{
        color: wheat;
        font-size: 1.5rem;
        margin-top: 1rem;
        text-align: center;
        width: 100%;
    }

    @media only screen and (min-width: 360px) and (max-width: 800px){
        div{
            margin-bottom: 1rem;
        }

        img{
            width: 10rem;
        }

        p{
            font-size: 1.3rem;
        }
}
`
export const Tecnologies = styled.div`
    width: 100%;
    height: 40vh;
    display: flex;
    flex-direction: row;
    align-items: center;

    figure{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        width: 100%;
    }

    img{
        width: 7rem;
        object-fit: cover;
        margin: 3rem;
        animation: move 1.5s infinite alternate ease-in-out;

        &:nth-child(1){
            animation-duration: 1s;
        }

        &:nth-child(2){
            animation-duration: 1.1s;
        }

        &:nth-child(3){
            animation-duration: 1.2s;
        }

        &:nth-child(4){
            animation-duration: 1.1s;
        }

        &:nth-child(5){
            animation-duration: 1s;
            object-fit: contain;
        }
    }

    @keyframes move {
        0% {
            transform: scale(0.8);
        }
        100% {
            transform: scale(1);
        }
    }

    @media only screen and (min-width: 360px) and (max-width: 800px){

        img{
            width: 4.5rem;
            margin: 1rem;
        }
    }
`
