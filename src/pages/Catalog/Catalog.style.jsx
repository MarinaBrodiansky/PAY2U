import styled from "styled-components";

export const Container = styled.div`
    margin: 16px;
`;

export const CatalogItems = styled.div`
    background-color: var(--grey);
    width: 375px;
    padding: 16px;
    gap: 16px;
    border-radius: 16px 16px 0px 0px;

    display: grid;
    grid-template-columns: auto auto auto;
    gap: 16px 9.5px;
`;