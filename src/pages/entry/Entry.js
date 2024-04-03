import ActionCard from "../../components/actionCard/ActionCard";
import { Wrapper } from "../../styles/mainStyles";
import {
    AdditionalCard, CashbackCard, CashbackInfo, GreyButton, CardsContainer, Header, Promo, WelcomeCard,
    TransparentButton, Sub, SubHeader, Rub, CreditHeader, BankAccount, BankCard, Divider, BankInfo, Container, SubContainer
} from "./Entry.style";
import rub from "../../assets/images/rub.png";
import subs from "../../assets/images/subs.png";
import credit from "../../assets/images/credit-card.png";
import icon from "../../assets/icons/icon.svg";
import { Text } from "../../styles/mainStyles";

const Entry = ({ }) => {
    const data = ['Открыть вклад или счёт',
        'Оформить кредит',
        'Оформить кредитную карту',
        ['Инвестировать средства', ' Готовые решения'],
        ['Оформить дебетовую карту', 'Кэшбэк 6% рублями']]
    return (
        <Wrapper>
            <Container>
                <Promo>
                    <img src={icon} width={38} />
                    <p style={{fontSize: 17}}>Сергей</p>
                </Promo>
                <Promo>
                    <CashbackCard>
                        <CashbackInfo>
                            <Text>Ваш кэшбэк</Text>
                            <SubHeader>352 ₽</SubHeader>
                            <GreyButton>Подробнее</GreyButton>
                        </CashbackInfo>
                        <Rub src={rub} alt="rub" />
                    </CashbackCard>
                    <AdditionalCard>
                        <CreditHeader>Кредитная <br />карта</CreditHeader>
                    </AdditionalCard>
                </Promo>
                <SubContainer>
                    <Header>Счета и карты</Header>
                    <BankAccount>
                        <BankInfo>
                            <BankCard />
                            <div>
                                <SubHeader>437 092.10 ₽</SubHeader>
                                <Text>Зарплатный счёт</Text>
                            </div>
                        </BankInfo>
                        <Divider />
                        <BankInfo>
                            <BankCard />
                            <div>
                                <SubHeader>437 092.10 ₽</SubHeader>
                                <Text>Счёт кредитной карты</Text>
                            </div>
                        </BankInfo>
                    </BankAccount>
                </SubContainer>
                <SubContainer>
                    <Header>Оформление продуктов</Header>
                    <CardsContainer>
                        <ActionCard text={data[0]} icon='safe' />
                        <ActionCard text={data[1]} icon='credit' />
                        <ActionCard text={data[2]} icon='credit-card' />
                    </CardsContainer>
                    <CardsContainer>
                        <ActionCard text={data[3][0]} shortDescription={data[3][1]} icon='investments' />
                        <ActionCard text={data[4][0]} shortDescription={data[4][0]} icon='debit-card' />
                    </CardsContainer>
                </SubContainer>
                <SubContainer>
                    <Header>Предложения партнеров</Header>
                    <WelcomeCard to='activesubscriptions'>
                        <CashbackInfo>
                            <SubHeader>Подписки здесь</SubHeader>
                            <Text>Возьмите свои подписки под контроль и получайте выгоду!</Text>
                            <TransparentButton>Подробнее</TransparentButton>
                        </CashbackInfo>
                        <Sub src={subs} alt="subs" />
                    </WelcomeCard>
                </SubContainer>
            </Container>
        </Wrapper>
    );
}

export default Entry;