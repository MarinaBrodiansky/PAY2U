import styled from "styled-components";

export const Container = styled.div`
    width: 190px;
    height: 120px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, auto);
    border-radius: 12px;
    box-shadow: 0px 4px 4px 0px #0000000D;
    background-color: var(--white);
    padding-left: 12px;
    padding-right: 12px;
    align-items: center;
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

export const RightBold = styled(BoldText)`
    text-align: right;
`;

export const SubText = styled.p`
    font-size: 12px;
    color: var(--grey);
    margin: 0;
`;

export const RightSub = styled(SubText)`
    text-align: right;
`;
