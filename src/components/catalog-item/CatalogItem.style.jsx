import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
    border-radius: 12px;
    box-shadow: 0px 4px 4px 0px #0000000D;

    background-color: var(--white);
    width: 108px;
    height: 136px;

    padding: 11px 0 0 9px;
    color: var(--black);
    text-decoration: none;
`;

export const Title = styled.p`
    width: 80px;
    height: 32px;

    text-align: left;
    font-size: 14px;
    font-weight: 400;
    margin: 0;
`;

export const Img = styled.img`
    width: 80px;
    height: 80px;
    margin-top: 16px;
    float: right;
`;