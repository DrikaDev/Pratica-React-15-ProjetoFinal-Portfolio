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

    h3{
        color: wheat;
        font-size: 1.5rem;
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
            line-height: 2rem;
        }
    }
`
export const Box_Projects = styled.section` 

    img{
        height: 20rem;
        object-fit: contain;
        width: 35rem;
    }

    h2{
        color: wheat;
        font-size: 1.3rem;
        margin-top: 1.5rem;
        margin-bottom: 1rem;
        text-align: center;
        text-shadow: 0px 0px 10px wheat;
        width: 35rem;
    }

    p{
        font-size: 1rem;
        line-height: 2rem;
        text-align: center;
        width: 35rem;
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
