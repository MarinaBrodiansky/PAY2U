import styled from "styled-components";

export const CardForm = styled.div`
    border-radius: 12px;
    box-shadow: 0px 4px 4px 0px #0000000D;

    background-color: var(--white);
    width: ${(props) => props.wide ? '168px' : '109px'};
    height: 128px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 12px;
`;

export const Header = styled.p`
    font-weight: 600;
    font-size: 15px;

    text-align: left;
    margin: 0;
`;

export const SubInfo = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 143px;
    position: relative;
`;

export const ShortDescription = styled.p`
    font-size: 13px;
    line-height: 16px;
    font-weight: 400;
    color: var(--dark-grey);
    text-align: left;
    margin: 0;
`;

export const Img = styled.img`
    align-self: flex-end;
`;