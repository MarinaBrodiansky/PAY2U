import styled from "styled-components";

export const Wrapper = styled.div`
    width: 375px;
`;

export const Text = styled.p`
    font-size: 12px;
    margin: 0;
`;

export const FullCard = styled.div`
    width: 343px;
    border-radius: 12px;
    box-shadow: 0px 4px 4px 0px #0000000D;

    background-color: var(--white);
`;

export const Input = styled.input.attrs({ type: 'text' })`
    width: 100%;
    border: 1px solid var(--dark-grey);
    border-radius: 16px;
    background-color: var(--white);

    font-size: 14px;
    padding: 12px;
    margin-top: 8px;
`;
