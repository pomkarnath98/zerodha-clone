import styled from "styled-components";
export const Flexbox = styled.div`
    display: flex;
    margin-right: 20px;
    margin-left: 50px;
    margin-top: 70px;
    & > * {
        padding-left: 50px;
        padding-right: 10px;
    }
    & > img{
        width: 550px;
    }
`;
