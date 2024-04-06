import { Wrapper } from "../../styles/mainStyles";
import MainButton from "../../components/button/MainButton";
import lifephone from "../../assets/images/3d-casual-life-phone-and-creditcard 1.png";
import {
    ActiveSubsContainer, GreenLabel, GreenText, HeaderInfo, Money, MoreInfo, Row, SubInfo,
    SubMoney, SubText, SuccessText, Image, Container, JustifyRow, Catalog, CatalogText
} from "./ActiveSubs.style";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import Subscription from "../../components/subs/Subscription";
import Recommend from "../../components/recomend/Recommend";
import movie from "../../assets/icons/movie.svg";
import music from "../../assets/icons/music.svg";
import book from "../../assets/icons/book.svg";
import sport from "../../assets/icons/sport.svg";
import Expenses from "../expenses/Expenses";
import HeaderBack from "../../components/headerBack/HeaderBack";

const ActiveSubs = ({ }) => {
    return (
        <Wrapper>
            <HeaderBack />
            <Container>
                <MoreInfo to='onboarding'>
                    <div>
                        <HeaderInfo>Узнайте больше о сервисе управления подписками</HeaderInfo>
                        <MainButton backgroundColor='active' text='Подробнее' to='onboarding' />
                    </div>
                    <img src={lifephone} alt="lifephone" width={85}/>
                </MoreInfo>
                <SubMoney to='expenses'>
                    <Money>Финансы</Money>
                    <div>
                        <SubInfo>
                            <SubText>За подписки в марте</SubText>
                            <Money>399 ₽</Money>
                        </SubInfo>
                        <SubInfo>
                            <SubText>Начислим</SubText>
                            <SuccessText>19 ₽</SuccessText>
                        </SubInfo>
                    </div>
                </SubMoney>
                <Row>
                    <MainButton backgroundColor='true' text='Каталог подписок' fontpx={17} full='full' />
                    <MainButton text='coupon' link='promos' />
                </Row>
            </Container>
            <ActiveSubsContainer>
                <h3>Активные подписки</h3>
                <div>
                <Swiper
                    slidesPerView={1.8}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <Subscription />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Subscription />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Subscription />
                    </SwiperSlide>
                </Swiper>
                </div>
                <MainButton text="Все подписки" backgroundColor={false} full='full' fontpx='17' link='submanagement' />
            </ActiveSubsContainer>
            <Container>
                <Money>Каталог</Money>
                <JustifyRow>
                    <Catalog>
                        <img src={movie} alt="movie" />
                        <CatalogText>Кино</CatalogText>
                    </Catalog>
                    <Catalog>
                        <img src={music} alt="music" />
                        <CatalogText>Музыка</CatalogText>
                    </Catalog>
                    <Catalog>
                        <img src={book} alt="book" />
                        <CatalogText>Книги</CatalogText>
                    </Catalog>
                    <Catalog>
                        <img src={sport} alt="sport" />
                        <CatalogText>Спорт</CatalogText>
                    </Catalog>
                </JustifyRow>
                <MainButton link='/catalog' full='full' text='Перейти в каталог' fontpx='17' />
                <Money>Рекомендуемое</Money>
                <div>
                <Swiper
                    slidesPerView={1.8}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <Recommend />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Recommend />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Recommend />
                    </SwiperSlide>
                </Swiper>
                </div>
                <Money>Лучший кэшбэк от партнеров</Money>
                <JustifyRow>
                    <div>
                        <Image />
                        <GreenLabel>
                            <GreenText>до 15%</GreenText>
                        </GreenLabel>
                    </div>
                    <div>
                        <Image />
                        <GreenLabel>
                            <GreenText>до 15%</GreenText>
                        </GreenLabel>
                    </div>
                    <div>
                        <Image />
                        <GreenLabel>
                            <GreenText>до 15%</GreenText>
                        </GreenLabel>
                    </div>
                    <div>
                        <Image />
                        <GreenLabel>
                            <GreenText>до 15%</GreenText>
                        </GreenLabel>
                    </div>
                    <div>
                        <Image />
                        <GreenLabel>
                            <GreenText>до 15%</GreenText>
                        </GreenLabel>
                    </div>
                </JustifyRow>
            </Container>
        </Wrapper >
    );
}

export default ActiveSubs;