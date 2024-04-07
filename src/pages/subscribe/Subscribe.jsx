import MainButton from "../../components/button/MainButton";
import HeaderBack from "../../components/headerBack/HeaderBack";
import { Input, Wrapper } from "../../styles/mainStyles";
import { BoldText, Container, Image, Justify, JustifyRow, MainText, Reminder, Row, SubText } from "./Subscribe.style";

const Subscribe = () => {
    return (
        <Wrapper>
            <HeaderBack />
            <Container>
                <h2>Вы подключаете</h2>
                <Row>
                    <Image />
                    <Justify>
                        <BoldText>Иви</BoldText>
                        <SubText>Подписка на 1 месяц</SubText>
                    </Justify>
                </Row>
                <div>
                    <label>Введите номер телефона</label>
                    <Input type="text" />
                </div>
                <Reminder>
                    <SubText>Следующее списание 299 ₽ — 30 апреля. Мы напомним об этом за 3 дня, никаких неожиданностей.</SubText>
                </Reminder>
                <Row>
                    <input type="checkbox" />
                    <MainText>С условиями обработки первональных данных ознакомлен и согласен</MainText>
                </Row>
                <Row>
                    <input type="checkbox" />
                    <MainText>С правилами платформы ознакомлен</MainText>
                </Row>
                <JustifyRow>
                    <h3>К оплате:</h3>
                    <h3>299 ₽</h3>
                </JustifyRow>
                <MainButton full='full' fontpx='17' text='Оплатить' backgroundColor='active' link='pay2u/errornotenough' />
            </Container>
        </Wrapper>
    );
}

export default Subscribe;