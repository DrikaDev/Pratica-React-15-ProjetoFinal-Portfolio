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
`
export const AboutMe = styled.div`
    height: 90vh;
    width: 100%;

    h1{
        color: whitesmoke;
        font-size: 3rem;
        letter-spacing: 1rem;
        margin-bottom: 1rem;
        text-align: center;
        text-shadow: 0px 0px 20px wheat;
        width: 100%;
    }

    @media only screen and (min-width: 360px) and (max-width: 800px){
        h1{
            font-size: 2rem;
            margin-bottom: 1rem;
            margin-top: 1rem;
        }
    }
`
export const Information = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;

    img{
        object-fit: contain;
    }

    div{
        line-height: 3rem;
        padding: 1rem;
        width: 100%;
    }

    p{
        color: wheat;
        font-size: 1.5rem;
    }

    a{
        color: Red;
        text-shadow: 0 0 10px white;
        text-decoration: none;

        &:hover{
            border-bottom: 4px dotted;
            text-shadow: 0px 0px 20px wheat;
        }
    }

    @media only screen and (min-width: 360px) and (max-width: 800px){
        display: block;

        img{
            float: left;
            width: 10rem;
        }

        div{
            line-height: 1.5rem;
        }

        p{
            font-size: 1rem;
        }
    }
`