import styled from "styled-components";
import { Link } from "react-router-dom";
import { Text } from "../../styles/mainStyles";

export const Container = styled.div`
    margin: 16px;

    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const Promo = styled.section`
    display: flex;
    flex-direction: row;
    gap: 8px;
`;

export const CashbackCard = styled.div`
    border-radius: 12px;
    box-shadow: 0px 4px 4px 0px #0000000D;

    background-color: var(--white);

    width: 215px;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const CashbackInfo = styled.div`
    margin: 12px 0 0 12px;
`;

export const Rub = styled.img`
    width: 86px;
    height: 100px;
`;

export const GreyButton = styled.button`
    width: 87px;
    height: 24px;
    padding: 5px 8px 5px 8px;
    gap: 10px;
    border-radius: 6px;
    border: none;
    opacity: 0px;
    background-color: var(--light-grey);
    margin-top: 14px;
    font-size: 11px;

    &:hover {
        background-color: var(--white);
        animation: 0.2s ease-in-out;
    }

    &:active {
        background-color: var(--grey);
        animation: 0.2s ease-in-out;
    }
`;

export const AdditionalCard = styled.div`
    border-radius: 12px;
    box-shadow: 0px 4px 4px 0px #0000000D;

    padding: 8px 0px 8px 12px;

    background: linear-gradient(180deg, #9A75BA 0%, #B59EC9 100%);

    width: 120px;
    height: 100px;
`;

export const CreditHeader = styled(Text)`
    color: white;
`;

export const Header = styled.h2`
    font-size: 21px;
    line-height: 24px;
    margin: 16px 0 12px 0;
`;

export const BankAccount = styled.div`
    border-radius: 12px;
    box-shadow: 0px 4px 4px 0px #0000000D;

    background: var(--white);
    width: 343px;
    height: 152px;
    padding: 16px;
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

export const CardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 343px;
    margin-bottom: 7px;
`;

export const WelcomeCard = styled(Link)`
    border-radius: 12px;
    box-shadow: 0px 4px 4px 0px #0000000D;

    background: var(--white);  

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 343px;
    height: 150px;

    text-decoration: none;
    color: var(--black);
`;

export const TransparentButton = styled.p`
    margin: 30px 0 0 0;
    background-color: transparent;
    border: none;
    color: var(--accent);

    font-size: 17px;
    font-weight: 600;
`;

export const Sub = styled.img`
    width: 116px;
    height: 129px;

    margin-right: 16px;
    margin-bottom: 0;
    margin-top: 20px;
`;

export const SubHeader = styled.h3`
    margin: 0;
`;