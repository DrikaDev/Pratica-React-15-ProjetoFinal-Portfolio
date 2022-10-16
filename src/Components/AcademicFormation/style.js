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

    h1{
        color: whitesmoke;
        font-size: 3rem;
        letter-spacing: 1rem;
        text-align: center;
        text-shadow: 0px 0px 20px wheat;
        width: 100%;
        margin-bottom: 2rem;
    }

    @media only screen and (min-width: 360px) and (max-width: 800px){
        flex-direction: column;

        h1{
            font-size: 2rem;
            margin-bottom: 0;
            margin-top: 1rem;
        }
    }
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
export const Box_AcademicFormation = styled.section`
    display: flex;
    flex-direction: row;
    height: 39rem;
    justify-content: space-around;
    margin-top: 1rem;
    padding: 1rem;
    width: 100%;

    div{
        border-radius: 10px;
        box-shadow: 0px 0px 20px white;
        width: 15rem;
        height: 15rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem;
        transition: 1s all;

        &:hover{
            transform: scale(1.1);
        }
    }

    img{
        width: 10rem;
    }

    @media only screen and (min-width: 360px) and (max-width: 800px){
        flex-wrap: wrap;

        div{
            height: 6rem;
            flex-direction: row;
            width: 21rem;
        }

        img{
            width: 7rem;
            margin-right: 1rem;
        }
    }
`
export const Paragrafo = styled.p`
    width: 100%;
    height: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    p{
        color: wheat;
        font-size: 1.3rem;
        text-align: center;
        margin-top: 0.5rem;
        width: 100%;
    }

    @media only screen and (min-width: 360px) and (max-width: 800px){
        height: 5rem;

        p{
            display: flex;
            justify-content: center;
            margin-top: 0;
            font-size: 1rem;
        }
    }         
`
    