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
            text-shadow: 5px 5px 20px wheat;
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
        margin-bottom: 3rem;
        margin-top: 2rem;
        text-align: center;
        text-shadow: 0px 0px 20px wheat;
        width: 100%;
    }

    img{
        margin: 0 auto;
        width: 25rem;
    }
    

    @media only screen and (min-width: 360px) and (max-width: 800px){
        h1{
            font-size: 2.3rem;
            margin-top: 2rem;
            margin-bottom: 2rem;
        }

        img{
            width: 22rem;
        }
    }
`