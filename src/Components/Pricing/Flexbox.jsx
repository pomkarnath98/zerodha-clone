import styled from "styled-components";
export const Flexbox = styled.div`
    display: flex;
    padding-left: 120px;
    padding-right: 150px;
    & > * {
        padding-right: 30px;
        width: 335px;
    }
    & img{
        width: 250px;
    }
    & * {
        text-align: center;
    }
`;
