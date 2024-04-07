import { Container, Main, Row } from "./Found.style";
import MainButton from "../../components/button/MainButton";
import Manage from "../../components/manage/Manage";
import { Wrapper } from "../../styles/mainStyles";
import HeaderBack from "../../components/headerBack/HeaderBack";

const Found = () => {

    return (
        <Wrapper>
            <HeaderBack />
            <Container>
                <Main>
                    <h2>Найденные подписки</h2>
                    <Manage active='active' found='found' />
                    <Row>
                        <input type="checkbox" />
                        <label>С правилами сервиса ознакомлен</label>
                    </Row>
                </Main>
                <MainButton full='full' backgroundColor='active' fontpx='17' text='Синхронизировать подписки' link='/pay2u/successmove' />
            </Container>
        </Wrapper>
    );
}

export default Found;