import { Container, Image, BoldText, SubText, Row, Elem, Label, LabelText } from "./Recommend.style";

const Recommend = () => {

    return (
        <Container>
            <Row>
                <Image />
                <Label>
                    <LabelText>ВЫГОДНО</LabelText>
                </Label>
            </Row>
            <BoldText>Яндекс Плюс</BoldText>
            <SubText>Мульти-подписки</SubText>
            <BoldText>от 499₽/<Elem>мес</Elem></BoldText>
        </Container>
    );
}

export default Recommend;