import styled from "styled-components";

export const ButtonActive = styled.button`
    text-decoration: none;
    color: var(--white);
    font-weight: 600;

    border-color: var(--accent);
    border-radius: 12px;
    border-width: 1px;
    border-style: solid;

    height: auto;
    width: ${(props) => props.full ? '100%' : 'auto'};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 24px 8px 24px;

    background-color: var(--accent);

    cursor: pointer;

    gap: 8px;
    opacity: 0px;

    &:hover {
        background-color: var(--hover);
        animation: 0.2s ease-in-out;
    }

    &:active {
        background-color: var(--press);
        animation: 0.2s ease-in-out;
    }
`;

export const ButtonGrey = styled.button`
    text-decoration: none;
    color: var(--black);

    border-color: var(--accent);
    border-radius: 12px;
    border-width: 1px;
    border-style: solid;

    height: auto;
    width: ${(props) => props.full ? '100%' : 'auto'};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 24px 8px 24px;

    background-color: transparent;

    cursor: pointer;

    gap: 8px;
    opacity: 0px;

    &:hover {
        background-color: var(--light-grey);
        animation: 0.2s ease-in-out;
    }

    &:active {
        background-color: var(--dark-grey);
        animation: 0.2s ease-in-out;
    }
    font-weight: 600;
`;

export const Info = styled.span`
    font-size: ${(props) => `${props.size}px` || '12px'}
`;
