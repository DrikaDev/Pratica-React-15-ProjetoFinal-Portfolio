import styled from "styled-components";
import Background from "../../Assets/Background.1.jpg"

export const Home = styled.div`
    height: 3rem;
    padding: 1rem;
    width: 100%;
    
    a{
        color: whitesmoke;
        text-decoration: none;
        font-size: 1.5rem;
        list-style: none;

        &:hover{
            border-bottom: 5px dotted;
            text-shadow: 0px 0px 20px wheat;
        }
    }
    
    @media only screen and (min-width: 360px) and (max-width: 800px){
        text-align: center;
    }
`
export const Container = styled.section`
    background-image: url(${Background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;

    h1{
        color: whitesmoke;
        font-size: 3rem;
        letter-spacing: 1rem;
        text-align: center;
        text-shadow: 0px 0px 20px wheat;
        width: 100%;
        margin-bottom: 1rem;
    }

    h2{
        color: wheat;
        font-size: 2rem;
        text-align: center;
        width: 100%;
        margin-top: 2rem;
        margin-bottom: 4rem;
    }

    p{
        color: wheat;
        font-size: 2rem;
        margin-top: 2rem;
        text-align: center;
        width: 100%;

        white-space: nowrap;
        overflow: hidden;
        animation: typewriter 2s steps(13) infinite alternate, blink 800ms steps(13) infinite normal;
        border-right: 3px solid white;
    }

    @keyframes typewriter {
        from {
            width: 0%;
        }
        to {
            width: 37%;
        }
    }

    @keyframes blink {
        from {
            border-color: white;
        }
        to {
            border-color: transparent;
        }
    }

    @media only screen and (min-width: 360px) and (max-width: 800px){
        flex-direction: column;

        h1{
            margin-top: 1rem;
            font-size: 1.7rem;
        }

        h2{
            font-size: 1.5rem;
        }

        p{
            margin-top: 1rem;
            font-size: 1.5rem;
        }
    }
`
export const BoxContactMe = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        width: 24.5rem;
        transition: 1s all;

        &:hover{
            transform: scale(1.1);
            cursor: pointer;
        }
    }

    @media only screen and (min-width: 360px) and (max-width: 800px){
        img{
            width: 17rem;
        }
    }
`
export const BoxSocialNetworks = styled.section`
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 2rem;

    img{
        width: 3rem;
        transition: 1s all;

        &:hover{
            transform: scale(1.4) rotate(360deg);
            cursor: pointer;
        }
    }

    @media only screen and (min-width: 360px) and (max-width: 800px){
        width: 100%;
    }
`