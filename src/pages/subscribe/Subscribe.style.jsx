import styled from "styled-components";
import { FullCard } from "../../styles/mainStyles";

export const Container = styled.div`
    margin: 16px;

    display: flex;
    flex-direction: column;
    gap: 24px;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    gap: 12px;
`;

export const Image = styled.div`
    border-radius: 16px;
    height: 48px;
    width: 48px;
    background-color: var(--white);
`;

export const Justify = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const BoldText = styled.p`
    font-size: 16px;
    font-weight: 600;
    margin: 0;
`;

export const SubText = styled.p`
    font-size: 14px;
    margin: 0;
`;

export const MainText = styled.p`
    font-size: 16px;
    font-weight: 400;
    margin: 0;
`;

export const Reminder = styled(FullCard)`
    padding: 16px;
`;

export const JustifyRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;