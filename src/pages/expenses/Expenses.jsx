import Expense from "../../components/expense/Expense";
import HeaderBack from "../../components/headerBack/HeaderBack";
import { Wrapper } from "../../styles/mainStyles";
// eslint-disable-next-line no-unused-vars
import { BoldText, Card, Container, MainPart, Row, SubText, Image, Sum, InfoCard, BankInfo, BankCard, MainText, Divider } from "./Expenses.style";
import { useState } from 'react'
// import { BottomSheet } from 'react-spring-bottom-sheet'
import 'react-spring-bottom-sheet/dist/style.css'

const Expenses = () => {
    // eslint-disable-next-line no-unused-vars
    const [open, setOpen] = useState(false)

    // eslint-disable-next-line no-unused-vars
    function onOpen() {
        setOpen(true);
    }

    // eslint-disable-next-line no-unused-vars
    function onDismiss() {
        setOpen(false)
    }
    return (
        <Wrapper>
            <HeaderBack />
            <Container>
                <h1>Мои расходы</h1>
                <Card>
                    <SubText>Расходы в марте</SubText>
                    <BoldText>399 ₽</BoldText>
                </Card>
            </Container>
            <MainPart>
                <h3>История</h3>
                    <SubText>МАРТ</SubText>
                    <Expense />
                    <SubText>ФЕВРАЛЬ</SubText>
                    <Expense />
                    <Expense />
                    <Expense />
                    <Expense />
                    <Expense />
                    <Expense />
            </MainPart>
            {/* <button onClick={onOpen}>Open</button>
            <BottomSheet
                open={open}
                onDismiss={onDismiss}>
                <h2>Платеж за подписку</h2>
                <Row>
                    <Image />
                    <Sum>
                        <BoldText>Amediateka</BoldText>
                        <SubText>Подписка на 1 месяц</SubText>
                    </Sum>
                    <BoldText>399 ₽</BoldText>
                </Row>
                <InfoCard>
                    <>
                        <SubText>Счёт списания</SubText>
                        <BankInfo>
                            <BankCard />
                            <div>
                                <MainText>Classic</MainText>
                                <MainText>•••• 1234</MainText>
                            </div>
                        </BankInfo>
                    </>
                    <>
                        <SubText>Дата и время</SubText>
                        <MainText>02.02.2024</MainText>
                    </>
                    <Divider />
                    <>
                        <SubText>Тип операции</SubText>
                        <MainText>Оплата услуг подписки</MainText>
                    </>
                    <>
                        <SubText>Наименование</SubText>
                        <MainText>Amediateka</MainText>
                    </>
                    <>
                        <SubText>Сумма списания</SubText>
                        <MainText>399 ₽</MainText>
                    </>
                    <>
                        <SubText>Начислено бонусов за покупку</SubText>
                        <MainText>19 ₽</MainText>
                    </>
                </InfoCard>
            </BottomSheet> */}
        </Wrapper>
    );
}

export default Expenses;