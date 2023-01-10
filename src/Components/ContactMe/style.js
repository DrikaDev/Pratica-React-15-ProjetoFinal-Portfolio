import styled from "styled-components";
import Background from "../../Assets/Background.1.jpg"

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
        font-size: 2.5rem;
        letter-spacing: 1rem;
        text-align: center;
        text-shadow: 0px 0px 20px wheat;
        width: 100%;
    }

    h2{
        color: wheat;
        font-size: 1.5rem;
        text-align: center;
        width: 100%;
        margin-top: 2rem;
        margin-bottom: 2rem;
    }

    p{
        color: wheat;
        font-size: 2rem;
        margin-top: 1rem;
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
            width: 45%;
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
            line-height: 2.5rem;
            font-size: 1.3rem
        }

        p{
            margin-top: 1.5rem;
            font-size: 1.3rem;
        }

        @keyframes typewriter {
            from {
                width: 0%;
            }
            to {
                width: 90%;
            }
        }
    }
`
export const BoxContactMe = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        width: 20rem;
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