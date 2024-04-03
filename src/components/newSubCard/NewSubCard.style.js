import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    width: 343px;
    height: 154px;

    border-radius: 12px;
    box-shadow: 0px 4px 4px 0px #0000000D;

    background-color: var(--white);
    padding: 16px 0 16px 16px;
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

export const Image = styled.div`
    border-radius: 16px;
    height: 48px;
    width: 48px;
    background-color: var(--light-grey);
    margin-right: 12px;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    width: 327px;
`;

export const JustifyRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* margin-right: 16px; */
    width: 319px;
`;

export const BoldText = styled.p`
    font-size: 15px;
    font-weight: 600;
    margin: 0;
    width: 100%;
    text-align: right;
    margin-right: 16px;
`;

export const SubText = styled.p`
    font-size: 12px;
    color: var(--dark-grey);
    margin: 0;
    width: 100%;
`;

export const MainText = styled.p`
    font-size: 14px;
    font-weight: 600;
    margin: 0;
`;

export const Label = styled.div`
    border-radius: 4px;
    height: 20px;
    padding: 6px 8px;
    background: ${(props) => props.hit ? '#FFD96659' : '#1A93361F'};
    margin-left: auto;
`;

export const Text = styled.p`
    font-size: 10px;
    text-align: center;
    margin: 0;
    color: ${(props) => props.hit ? '#E3AB00' : 'var(--success)'};
`;

export const Elem = styled.span`
    font-size: 12px;
`;

export const ButtonLink = styled(Link)`
    font-size: 14px;
    background-color: transparent;
    width: 157.5px;
    border: none;
    font-weight: 600;
    color: var(--black);
    text-decoration: none;
    margin: auto;
    text-align: center;
`;