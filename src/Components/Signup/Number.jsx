import styled from "styled-components";
export const Number = styled.div`
    display: flex;
    & > * {
        border: 1px solid #666;
        padding: 10px;
    }
    & > input{
        width: 300px;
        font-size: 20px;
    }
`;
