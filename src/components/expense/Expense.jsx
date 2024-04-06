import { BoldText, Container, GreenLabel, GreenText, Row, SubText, Image, Sum } from "./Expense.style";

const Expense = () => {
    return (
        <Container>
            <SubText>02.03.2024</SubText>
            <Row>
                <Image />
                <Sum>
                    <BoldText>Amediateka</BoldText>
                    <SubText>Подписка на 1 месяц</SubText>
                </Sum>
                <Sum>
                    <BoldText>- 399 ₽</BoldText>
                    <GreenLabel>
                        <GreenText>+ 19 ₽</GreenText>
                    </GreenLabel>
                </Sum>
            </Row>
        </Container>
    );
}

export default Expense;