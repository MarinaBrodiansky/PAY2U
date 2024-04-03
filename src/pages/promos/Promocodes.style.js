import styled from "styled-components";
import { Wrapper } from "../../styles/mainStyles";

export const Container = styled(Wrapper)`
    margin-left: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const SubText = styled.p`
    font-size: 14px;
    color: var(--dark-grey);
    margin: 0;
`;