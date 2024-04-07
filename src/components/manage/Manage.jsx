import MainButton from "../button/MainButton";
import { BoldText, Divider, GreenLabel, GreenText, MainText, SubText, NotActive, Container, Row, Image, Elem, Justify, JustifyRow } from "./Manage.style";


// eslint-disable-next-line react/prop-types, no-unused-vars
const Manage = ({active, found, newsub, ...props}) => {

    return (
        <>
            {active ?
                <Container found={found}>
                    <Row>
                        <Image />
                        <Justify>
                            <BoldText>KION</BoldText>
                            <MainText>Подписка на 1 месяц</MainText>
                        </Justify>
                        <GreenLabel>
                            <GreenText>Кэшбек 10%</GreenText>
                        </GreenLabel>
                    </Row>
                    <Divider />
                    <JustifyRow>
                        {!found && <SubText>Следующее списание:</SubText>}
                        {found && <SubText>Срок действия до::</SubText>}
                        <SubText>30 марта</SubText>
                    </JustifyRow>
                    <BoldText>349 ₽/<Elem>мес</Elem></BoldText>
                    {(!found && !newsub) && <MainButton full='full' text='Управлять подпиской' />}
                    {(newsub && !found) && <MainButton full='full' text='Посмотреть тарифы' backgroundColor='active' link='/pay2u/tariffs' />}
                </Container>
                :
                <NotActive>
                    <Row>
                        <Image />
                        <div>
                            <BoldText>ИВИ</BoldText>
                            <SubText style={{position: 'absolute'}}>Срок действия истек: 14.12.2023</SubText>
                        </div>
                        <GreenLabel>
                            <GreenText>Кэшбек 10%</GreenText>
                        </GreenLabel>
                    </Row>
                    <MainButton full='full' text='Возобновить подписку' />
                </NotActive>}

        </>
    );
}

export default Manage;