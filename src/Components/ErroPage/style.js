import styled from "styled-components";
import Background from "../../Assets/Background.1.jpg"

export const Home = styled.div`
    height: 3rem;
    width: 100%;

    img{
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
    
    @media screen and (min-width: 360px) and (max-width: 900px){
        //mobile
        img{
            width: 3rem;
        }

        a{
            margin: 0 auto;
        }
    }

    @media screen and (min-width: 820px) and (max-width: 1180px){
        //tablet
    }

    @media screen and (min-width: 1080px) and (max-width: 1980px){
        //desktop
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
    align-items: center;

    h1{
        color: whitesmoke;
        font-size: 3rem;
        letter-spacing: 1rem;
        margin-bottom: 3rem;
        margin-top: 2rem;
        text-align: center;
        text-shadow: 0px 0px 20px wheat;
        width: 100%;
    }

    @media only screen and (min-width: 360px) and (max-width: 800px){
        h1{
            font-size: 2rem;
            margin-top: 2rem;
            margin-bottom: 2rem;
        }
    }
`
export const Erro = styled.div`
    width: 20rem;

    img{
        width: 22rem;
    }
`
