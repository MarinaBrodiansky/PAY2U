import { BoldText, Container, GreenLabel, GreenText, MainText, Row, Image } from "./Tariffs.style";
import Tariff from "../../components/tariff/Tariff";
import MainButton from "../../components/button/MainButton";
import { Wrapper } from "../../styles/mainStyles";
import HeaderBack from "../../components/headerBack/HeaderBack";

const Tariffs = ({
    newsub,
    ...props
}) => {
    return (
        <Wrapper>
            <HeaderBack />
            <Container>
                <Row>
                    <Image />
                    <GreenLabel>
                        <GreenText>КЭШБЭК 10%</GreenText>
                    </GreenLabel>
                </Row>
                <div>
                    <BoldText>KION</BoldText>
                    <MainText>Фильмы и сериалы в отличном качестве</MainText>
                </div>
                <Tariff />
                <Tariff />
                <Tariff />
                <Tariff />
                {!newsub && <MainButton full='full' backgroundColor='active' fontpx='17' text='Изменить тариф' />}
                {newsub && <MainButton full='full' backgroundColor='active' fontpx='17' text='Оформить подписку' link='subscribe' />}
            </Container>
        </Wrapper>
    );
}

export default Tariffs;