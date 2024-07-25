import styled from "styled-components";

export const ContainerHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    > img{
        width: 80% 
    }
        
    > h1{
        letter-spacing: 8px;
        font-size: 36px;
        padding-bottom: 14px;
        }
    > h1, > h2{
        font-weight: 300;
    }

    @media(min-width: 768px){
        > h1{
            letter-spacing: 12px;
            font-size: 50px;
        }
    }
        
`