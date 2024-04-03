import styled from "styled-components";
import { Link } from "react-router-dom";

export const MoreInfo = styled(Link)`
    padding: 16px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    height: 117px;

    width: 343px;
    border-radius: 12px;
    box-shadow: 0px 4px 4px 0px #0000000D;

    background-color: var(--white);

    text-decoration: none;
    color: var(--black);
`;

export const HeaderInfo = styled.p`
    font-weight: 600;
    font-size: 14px;
    margin: 0 0 15px 0;
`;

export const SubMoney = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 112px;
    padding: 16px;
    width: 343px;
    border-radius: 12px;
    box-shadow: 0px 4px 4px 0px #0000000D;

    background-color: var(--white);

    text-decoration: none;
    color: var(--black);
`;

export const SubInfo = styled.div`
    width: 311px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const SubText = styled.p`
    font-size: 12px;
    color: var(--dark-grey);
    margin: 0;
`;

export const Money = styled.h3`
    margin: 0;
`;

export const SuccessText = styled(SubText)`
    color: var(--success);
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    gap: 9px;
    width: 343px;
`;

export const JustifyRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 343px;
`;

export const ActiveSubsContainer = styled.div`
    background-color: var(--grey);
    width: 375px;
    height: 258px;
    padding: 16px;
    border-radius: 16px 16px 0px 0px;
    opacity: 0px;

    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const Catalog = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    justify-content: center;
    margin: 16px 0;
`;

export const CatalogText = styled.p`
    text-align: center;
    font-size: 12px;
    margin: 0;
`;

export const Image = styled.div`
    border-radius: 16px;
    height: 48px;
    width: 48px;
    background-color: var(--grey);
    margin: 16px 0 8px 0;
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

export const Container = styled.div`
    margin: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;