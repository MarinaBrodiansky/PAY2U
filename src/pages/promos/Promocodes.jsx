import HeaderBack from "../../components/headerBack/HeaderBack";
import Promocode from "../../components/promocode/Promocode";
import { Wrapper } from "../../styles/mainStyles";
import { Container, SubText } from "./Promocodes.style";


const Promocodes = ({ }) => {
    return (
        <Wrapper>
            <HeaderBack />
            <Container>
                <h2>Мои промокоды</h2>
                <SubText>Март 2024</SubText>
                <Promocode />
                <Promocode />
                <Promocode />
                <Promocode />
                <Promocode />
            </Container>
        </Wrapper>
    );
}

export default Promocodes;