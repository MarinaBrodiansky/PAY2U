import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 16px;
`;

export const Skip = styled.button`
    border: none;
    background-color: transparent;
    text-decoration: none;

    font-size: 14px;
    font-weight: 600;
`;

export const Container = styled.div`
    align-items: center;
    height: 444px;
    margin-top: 67px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Img = styled.img`
    width: 208px;
    height: auto;
`;

export const BoldText = styled.h2`
    text-align: center;
    margin: 0 0 16px 0;
`;

export const MainText = styled.p`
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    padding: 0 30px;
`;