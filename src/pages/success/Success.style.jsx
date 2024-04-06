import styled from "styled-components";

export const Container = styled.div`
    /* height: 248px; */
    margin-top: 113px;

    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;

`;

export const Together = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 343px;
`;

export const Image = styled.img`
    width: 208px;
    height: auto;
`;

export const BoldText = styled.h2`
    text-align: center;
    margin: 0 0 16px 0;
`;

export const RecText = styled(BoldText)`
    text-align: left;
`;

export const SubText = styled.p`
    margin: 0;
    text-align: center;
    font-size: 16px;
    line-height: 24px;
`;

export const Rec = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 24px 16px;
`;