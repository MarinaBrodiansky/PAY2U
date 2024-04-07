import MainButton from "../button/MainButton";
import { BoldText, Label, Text, MainText, SubText, Container, Row, Image, Elem, Justify, ButtonLink, JustifyRow } from "./NewSubCard.style";

// eslint-disable-next-line react/prop-types, no-unused-vars
const NewSubCard = ({active, hit, ...props}) => {

    return (
        <>
            <Container>
                <Row>
                    <Image />
                    <JustifyRow>
                        <Justify>
                            <BoldText>KION</BoldText>
                            <MainText>Подписка на 1 месяц</MainText>
                        </Justify>
                        <Justify>
                            <Label>
                                <Text>Кэшбек 10%</Text>
                            </Label>
                            {hit &&
                                <Label hit={hit}>
                                    <Text hit={hit}>ХИТ</Text>
                                </Label>}
                        </Justify>
                    </JustifyRow>
                </Row>
                <JustifyRow>
                    {active && <SubText>Подписка на 1 месяц</SubText>}
                    <BoldText>349 ₽/<Elem>мес</Elem></BoldText>
                </JustifyRow>
                <JustifyRow>
                    {active && <MainButton text='Управлять' />}
                    {!active && <MainButton text='Подписаться' />}
                    <ButtonLink to='details'>Подробнее</ButtonLink>
                </JustifyRow>
            </Container>
        </>
    );
}

export default NewSubCard;