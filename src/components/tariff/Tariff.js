import { BoldText, Container, MainText, SubText } from "./Tariff.style";


const Tariff = ({
    selected = false,
    ...props
}) => {
    return (
        <Container selected={selected} >
            <MainText>1 год</MainText>
            <BoldText>349 ₽/мес</BoldText>
            <SubText>Полная стоимость 2 990₽</SubText>
        </Container>
    );
}

export default Tariff;