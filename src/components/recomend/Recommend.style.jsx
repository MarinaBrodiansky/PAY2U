import styled from "styled-components";

export const Container = styled.div`
    width: 190px;
    height: 148px;

    border-radius: 12px;
    box-shadow: 0px 4px 4px 0px #0000000D;

    background-color: var(--white);
    padding: 16px 0 16px 16px;
    margin-bottom: 7px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
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

export const Elem = styled.span`
    font-size: 12px;
`;

export const Label = styled.div`
    background-color: #FFD96659;
    border-radius: 4px;
    padding: 6px 8px 6px 16px;
    height: 20px;
`;

export const LabelText = styled.p`
    font-size: 10px;
    color: #E3AB00;
    text-align: center;
    margin: 0;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;