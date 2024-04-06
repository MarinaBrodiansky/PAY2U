import styled from "styled-components";
import { FullCard, Wrapper } from "../../styles/mainStyles";

export const Container = styled(FullCard)`
    padding: 16px;
`;

export const Row = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    column-gap: 12 auto;
`;

export const Image = styled.div`
    border-radius: 16px;
    height: 48px;
    width: 48px;
    background-color: var(--light-grey);
`;

export const BoldText = styled.p`
    font-size: 15px;
    font-weight: 600;
    margin: 0;
`;

export const SubText = styled.p`
    font-size: 12px;
    color: var(--dark-grey);
    margin: 0;
`;

export const Sum = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const GreenLabel = styled.div`
    border-radius: 4px;
    width: 54px;
    height: 20px;
    padding: 6px 8px;
    background: #1A93361F;
`;

export const GreenText = styled.p`
    font-size: 10px;
    text-align: center;
    margin: 0;
    color: var(--success);
`;