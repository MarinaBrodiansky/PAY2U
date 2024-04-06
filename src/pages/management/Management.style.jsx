import styled from "styled-components";
import { FullCard } from "../../styles/mainStyles";
import { Link } from "react-router-dom";

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
    margin: auto 0 auto 0;
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
`;

export const Action = styled(Link)`
    display: flex;
    flex-direction: row;
    gap: 12px;
    text-decoration: none;
    color: var(--black);
`;

export const Divider = styled.hr`
    display: flex;
    border-top: 1px solid var(--grey);
    width: 343px;
`;