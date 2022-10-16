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
            font-size: 1.5rem;
            margin-top: 1rem;
            margin-bottom: 0;
        }
    }
`
export const Box_Hobbies = styled.section`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    div{
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 25rem;
        width: 15rem;
    }

    img{
        margin-bottom: 1rem;
        width: 12rem;
        animation: hobbies 1.5s infinite alternate ease-in-out;
    }

    @keyframes hobbies {
        0% {
            border-radius: 5px;
        }
        100% {
            border-radius: 50%;
            box-shadow: 0 0 20px wheat;
            scale: calc(1.1);
        }
    }

    p{
        color: wheat;
        font-size: 1.3rem;
        text-align: center;
        margin-top: 1rem;
        width: 100%;
    }

    @media only screen and (min-width: 360px) and (max-width: 800px){
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        
        div{
            margin-top: 0;
            flex-direction: row;
            width: 24rem;
            height: 5rem;
        }

        img{
            width: 6rem;
        }

        p{
            display: flex;
            align-items: center;
            margin: 0 auto;
            font-size: 1rem;
            height: 5rem;
        }
    }
`
