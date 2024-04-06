import styled from "styled-components";

export const Container = styled.div`
    margin: 16px;
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

export const SubText = styled.p`
    margin: 0;
    font-weight: 600;
    font-size: 15px;
    color: var(--dark-grey);
`;

export const CatalogItems = styled.div`
    background-color: var(--grey);
    width: 375px;
    padding: 16px;
    gap: 16px;
    border-radius: 16px 16px 0px 0px;

    display: flex;
    flex-direction: column;
    gap: 8px;
`;