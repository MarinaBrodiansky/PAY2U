import { Button, Container, Divider, Img, ImgDiv, MainText, Row } from "./activeSubCard.style";
import Manage from "../../components/manage/Manage";
import gift from "../../assets/icons/gift-circle.svg";
import awards from "../../assets/icons/awards-circle.svg";
import stars from "../../assets/icons/stars-circle.svg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import banner from '../../assets/images/image 23017.png';
import { Wrapper } from "../../styles/mainStyles";
import HeaderBack from "../../components/headerBack/HeaderBack";

const ActiveSubCard = () => {

    return (
        <Wrapper>
            <HeaderBack />
            <Container>
                <Manage active='active' newsub='newsub' />
                <h2>О сервисе</h2>
                <MainText>KION — это онлайн-кинотеатр, который всегда с вами. Смотрите любимые телеканалы, сериалы, фильмы и мультфильмы на смартфоне,
                    планшете, компьютере, Smart TV и ТВ-приставках в хорошем качестве по подписке.</MainText>
                <h2>Сервис включает</h2>
                <Row>
                    <img src={awards} alt="awards" />
                    <p>Удобный и безопасный детский профиль</p>
                </Row>
                <Row>
                    <img src={stars} alt="stars" />
                    <p>Индивидуальную систему рекомендаций кино и сериалов </p>
                </Row>
                <Row>
                    <img src={gift} alt="gift" /> 
                    <p>Бонусную программу при покупке фильмов, мультфильмов и сериалов</p>
                </Row>
                <div>
                    <Swiper
                        slidesPerView={1.5}
                        spaceBetween={30}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[FreeMode]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <ImgDiv>
                                <Img src={banner} alt="banner" />
                            </ImgDiv>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ImgDiv>
                                <Img src={banner} alt="banner" />
                            </ImgDiv>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ImgDiv>
                                <Img src={banner} alt="banner" />
                            </ImgDiv>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <h2>Что нужно знать?</h2>
                <div>
                    <Button>Ссылка на сервис</Button>
                    <Divider />
                    <Button>Инструкция по работе с сервисом</Button>
                    <Divider />
                    <Button>Правила получения кэшбэка</Button>
                    <Divider />
                    <Button>Правила оплаты подписки</Button>
                    <Divider />
                    <Button>Как привязать несколько устройств</Button>
                    <Divider />
                </div>
            </Container>
        </Wrapper >
    );
}

export default ActiveSubCard;