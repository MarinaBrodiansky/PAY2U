import styled from "styled-components";

export const Container = styled.div`
    width: 343px;
    height: ${(props) => props.found ? '169px' : '221px'};

    border-radius: 12px;
    box-shadow: 0px 4px 4px 0px #0000000D;

    background-color: var(--white);
    padding: 16px;
    margin-bottom: 7px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Justify = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const NotActive = styled.div`
    width: 343px;
    height: 140px;

    border-radius: 12px;
    box-shadow: 0px 4px 4px 0px #0000000D;

    background-color: var(--white);
    padding: 16px;
    margin-bottom: 7px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Image = styled.div`
    border-radius: 16px;
    height: 48px;
    width: 48px;
    background-color: var(--light-grey);
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    gap: 12px;
`;

export const JustifyRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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

export const MainText = styled.p`
    font-size: 14px;
    font-weight: 600;
    margin: 0;
`;

export const GreenLabel = styled.div`
    border-radius: 4px;
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

export const Divider = styled.hr`
    display: flex;
    border-top: 1px solid var(--dark-grey);
    width: 311px;
`;

export const Elem = styled.span`
    font-size: 12px;
`;