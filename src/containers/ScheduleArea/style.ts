import styled from "styled-components";

export const ScheduleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top:80px; 
    padding: 24px 40px;
    background-color: #d9d9d97d;
    border-radius: 24px;
`

export const DateContainer = styled.div`
    display: flex;
    padding: 32px 16px;
    border-radius: 16px;
    border: 2px solid #021756;
    width: 100%;
    font-size: 28px;
    color: #021756;
    text-align: center;
    background-color: transparent;

    > img{
        cursor: pointer;
    }
`

export const Date = styled.p`
    flex-grow: 1
`