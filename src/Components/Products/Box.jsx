import styled from 'styled-components';
export const Box = styled.div`
    display: flex;
    padding-right: 20px;
    margin-top: 90px;
    a{
        text-decoration: none;
        color: #1762c4;
    }
    & > :nth-child(1){
        padding-left: 150px;
        padding-right: 170px;
    }
    & > :nth-child(2){
        padding-right: 100px;
    }
`;
