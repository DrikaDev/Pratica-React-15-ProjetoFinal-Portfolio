import styled from "styled-components";
import Lua from "../../Assets/Eunalua.1.jpg"

export const Container = styled.body`
    background-image: url(${Lua});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;

    h5{
        text-shadow: 0 0 5px white;
        font-size: 1rem;
        height: 2rem;
        padding-left: 13rem;
        width: 100%;
    }

    @media only screen and (min-width: 360px) and (max-width: 800px){
        background-position: 33%;
        height: 110vh;

        h5{
            height: 4rem;
            margin: 0 auto;
            padding-left: 0;
            text-align: center;
            width: 90%;
        }
    }
`

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    
    ul{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        margin-top: 1rem;
        width: 100%;
    }

    li{
        font-weight: bolder;
        font-size: 1.5rem;
        list-style: none;
    }

    a{
        color: whitesmoke;
        text-decoration: none;

        &:hover{
            border-bottom: 5px dotted;
            text-shadow: 0px 0px 20px wheat;
        }
    }

    @media only screen and (min-width: 360px) and (max-width: 800px){
        flex-direction: column-reverse;

        ul{
            align-items: flex-end;
            flex-direction: column;
            margin-bottom: 1rem;
            padding-right: 1rem;
        }

        li{
            line-height: 2.5rem;
            font-size: 1.5rem;
        }

        a{
            color: black;
        }
    }
`

export const Title = styled.div`
    margin-top: 5rem;
    margin-left: 30rem;
    width: 40rem;

    p{
        width: 40rem;
        color: white;
        font-size: 2rem;
        text-align: center;
        animation-name: shine;
        animation: shine 1.5s infinite alternate ease-in-out;
    }

    @keyframes shine {
        0% {
            text-shadow: 0 0 0px white, 0 0 0px wheat, 0 0 0px yellow;
        }
        100% {
            text-shadow: 0 0 20px white, 0 0 30px wheat, 0 0 40px yellow;
        }
    }

    @media only screen and (min-width: 360px) and (max-width: 800px){
        width: 100%;
        margin-bottom: 10rem;
        margin-left: 0;
        
        p{
            width: 100%;
            font-size: 1.5rem;
            line-height: 2.8rem;
        }
    }
`

