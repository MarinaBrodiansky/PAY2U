import styled from "styled-components";
import { FullCard } from "../../styles/mainStyles";

export const Container = styled.div`
    margin: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 16px;
`;

export const Card = styled(FullCard)`
    height: 80px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px;
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

export const MainPart = styled.div`
    background-color: var(--grey);
    width: 375px;
    padding: 16px;
    border-radius: 16px 16px 0px 0px;
    opacity: 0px;

    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const Image = styled.div`
    border-radius: 16px;
    height: 48px;
    width: 48px;
    background-color: var(--light-grey);
`;

export const Sum = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const InfoCard = styled(FullCard)`
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const BankInfo = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
`;

export const Divider = styled.hr`
    display: flex;
    border-top: 1px solid var(--dark-grey);
    margin: 16px auto;
`;

export const BankCard = styled.div`
    width: 72px;
    height: 44px;
    background-color: brown;
    border-radius: 12px;
`;

export const MainText = styled.p`
    margin: 0;
    font-size: 15px;
`;