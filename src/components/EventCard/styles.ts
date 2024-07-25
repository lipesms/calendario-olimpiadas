import styled from "styled-components";

type Props = {
    isLast: boolean
}

export const EventCardContainer = styled.div<Props>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 24px;
    font-size: 30px;
    padding-bottom: 16px;
    border-bottom: ${props => props.isLast ? '0' : '1px solid #312f39'};
    
    > p{
        text-align: center;
        font-weight: bold;
    }
        
        h3 {
            font-size: 22px;
            font-weight: 300;      
            max-width:88px;
            text-align: center;

            @media(min-width: 768px){
                font-size: 26px; 
                max-width:fit-content;
            }
        }

    @media(min-width: 768px){
        padding: 0 24px 16px;
    }
`

export const Discipline = styled.div`
    display: flex;
    align-items: center;
    gap: 8px; 
    flex-grow: 999;
    justify-content: center;
`

export const DisciplineImg = styled.img`
    height: 3rem
`

export const EventUnitName = styled.div`
    display: flex;
    align-items: center;
    gap: 8px; 
    flex-grow: 1;
    justify-content: end ;

    > p{
        font-size: 16px; 
        text-align: center;
        @media(min-width: 768px){
           font-size: 14px; 
        }
    }

    > div {
        display: flex;
        align-items: center;
        gap: 8px;

        > p {
            font-size: 14px; 
        }
    }

    .results{
        display: flex;
        flex-direction: column;
        align-items: center;

        > p{
            font-size: 16px; 
        }
    }

    .hidden{
        display: none;
    }

    > div img{
        width: 1.875rem;
        height: 1.25rem; 
    }
`