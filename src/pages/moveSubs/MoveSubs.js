import MainButton from "../../components/button/MainButton";
import HeaderBack from "../../components/headerBack/HeaderBack";
import { Input, Wrapper } from "../../styles/mainStyles";
import { Container, MainInfo } from "./MoveSubs.style";

const MoveSubs = () => {

    return (
        <Wrapper>
            <HeaderBack />
            <Container>
                <div>
                    <h2>Поиск подключенных сервисов</h2>
                    <MainInfo>Управляйте всеми подписками в одном месте! Данная функция работает как агрегатор данных и позволяет перенести
                        управление подписками в ваше банковское приложение.</MainInfo>
                    <label>Введите номер телефона</label>
                    <Input type="number" />
                </div>
                <MainButton full='full' backgroundColor='active' fontpx='17' text='Найти подписки' link='found' />
            </Container>
        </Wrapper>
    );
}

export default MoveSubs;