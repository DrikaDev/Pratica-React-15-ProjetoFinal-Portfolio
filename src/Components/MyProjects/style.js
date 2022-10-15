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
    }

    h3{
        color: wheat;
        font-size: 1.7rem;
        margin-top: 1rem;
        text-align: center;
        width: 100%;
    }

    @media only screen and (min-width: 360px) and (max-width: 800px){
        flex-direction: column;

        h1{
            margin-top: 1rem;
            font-size: 2rem;
        }

        h3{
            font-size: 1.2rem;
        }
    }
`
export const Box_Projects = styled.section` 

    img{
        height: 20rem;
        margin-bottom: 1rem;
        object-fit: contain;
        width: 40rem;
    }

    h2{
        color: wheat;
        font-size: 1.5rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        text-align: center;
        text-shadow: 0px 0px 10px wheat;
        width: 40rem;
    }

    p{
        font-size: 1.2rem;
        line-height: 2rem;
        text-align: center;
        width: 40rem;
    } 
    
    a{
        color: wheat;
    }

    @media only screen and (min-width: 360px) and (max-width: 800px){
        margin: 0 auto;
        
        img{
            height: 15rem;
            width: 24rem;
        }

        h2{
            font-size: 1.4rem;
            width: 24rem;
        }

        p{
            font-size: 1.2rem;
            width: 24rem;
        }
    }
`
