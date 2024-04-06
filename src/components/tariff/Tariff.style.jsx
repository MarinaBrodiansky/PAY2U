import styled from "styled-components";

export const Container = styled.div`
    width: 311px;
    height: 80px;
    padding: 8px 12px;
    gap: 0px;
    border-radius: 8px;
    border: 1px solid ${(props) => props.selected ? 'var(--active)' : 'var(--grey)'};
    opacity: 0px;

    display: flex;
    flex-direction: column;
    gap: 7px;
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