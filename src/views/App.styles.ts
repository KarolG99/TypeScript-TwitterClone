import styled from "styled-components";

export const MainWrapper = styled.main`
    background-color: ${({ theme }) => theme.colors.navy};
    /* max-width: 768px; */
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;