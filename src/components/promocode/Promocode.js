import MainButton from "../button/MainButton";
import { Container, Image, BoldText, SubText, Row, MainText } from "./Promocode.style";

const Promocode = () => {

    return (
        <Container>
            <Row>
                <Image />
                <div>
                    <BoldText>ИВИ</BoldText>
                    <SubText>Онлайн-кинотеатр</SubText>
                </div>
            </Row>
            <MainText>50% на подписку 2 месяца </MainText>
            <Row>
                <SubText>ПРОМОКОД</SubText>
                <BoldText>ИВИ1202424</BoldText>
            </Row>
            <MainButton text='Применить промокод' />
        </Container>
    );
}

export default Promocode;