import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    margin: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    gap: 12px;
`;

export const ImgDiv = styled.div`
    position: relative;
    overflow: hidden;
    width: 220px;
    height: 280px;
    border-radius: 16px;
`;

export const MainText = styled.p`
    margin: 0;
`;

export const Img = styled.img`
    width: 100%;
  height: 100%;
  object-fit: cover;
  max-width: 220px;
  max-height: 280px;
`;

export const Button = styled.button`
    font-size: 14px;
    font-weight: 600;
    color: var(--black);
    text-decoration: none;
    width: 100%;
    border: none;
    background-color: transparent;
    text-align: left;
`;

export const Divider = styled.hr`
    display: flex;
    border-top: 1px solid var(--grey);
    margin: 11px auto 24px auto;
`;