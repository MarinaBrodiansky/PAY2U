import { BoldText, SubText, Container, Image, RightBold, RightSub } from "./Subscription.style";

const Subscription = ({
    text,
    ...props
}) => {
    return (
        <Container>
            <Image />
            <div>
                <RightBold>349 ₽</RightBold>
                <RightSub>за 1 месяц</RightSub>
            </div>
            <BoldText>ИВИ</BoldText>
            <div></div>
                <SubText>Списание:</SubText>
                <RightSub>30 марта</RightSub>
        </Container>
    );
}

export default Subscription;