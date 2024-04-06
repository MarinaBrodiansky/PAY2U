import { Action, BoldText, Container, Divider, SubText } from "./Management.style";
import newsub from '../../assets/icons/new.svg';
import move from '../../assets/icons/move.svg';
import Manage from "../../components/manage/Manage";
import { Wrapper } from "../../styles/mainStyles";
import HeaderBack from "../../components/headerBack/HeaderBack";

const Management = () => {

    return (
        <Wrapper>
            <HeaderBack />
            <Container>
                <h1>Мои подписки</h1>
                <h3>Управление подписками</h3>
                <SubText>Изменить тариф, отключить, перенести существующие подписки</SubText>
                <Action to='movesubs'>
                    <img src={move} alt="move" />
                    <BoldText>Перенести мои подписки</BoldText>
                </Action>
                <Divider />
                <Action>
                    <img src={newsub} alt="new" />
                    <BoldText>Подключить новый сервис</BoldText>
                </Action>
                <Manage active='active' />
                <Manage active='active' />
                <Manage active='active' />
                <Manage active='active' />
                <BoldText>Неаквтиные</BoldText>
                <Manage />
            </Container>
        </Wrapper>
    );
}

export default Management;