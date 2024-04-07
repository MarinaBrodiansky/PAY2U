import { Wrapper } from "../../styles/mainStyles";
import { Container, Header, Img, MainText, Skip, BoldText } from "./Onboarding.style";
import pay2u from "../../assets/images/image 23021.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/pagination';
// import React from 'react';
import { useNavigate } from 'react-router-dom';

import chart from "../../assets/images/3d-casual-life-money-and-pie-chart.png";
import mang from "../../assets/images/3d-casual-life-time-management.png";
import schield from "../../assets/images/3d-casual-life-yellow-security-shield-button.png";
import money from "../../assets/images/3d-casual-life-money-and-phone-1.png";

const Onboarding = () => {
    
    const navigate = useNavigate();

    const handleSkipClick = () => {
      navigate(-1);
    }
    return (
        <Wrapper>
            <Header>
                <img src={pay2u} alt="pay2you" />
                <Skip onClick={handleSkipClick}>Пропустить</Skip>
            </Header>
            <Swiper
                grabCursor={true}
                // pagination={{ el: '.swiper-pagination', clickable: true }}
                modules={[Pagination]}
                className="swiper_container">
                <SwiperSlide>
                    <Container>
                        <Img src={mang} alt="man" />
                        <div>
                            <BoldText>Централизованное управление подписками</BoldText>
                            <MainText>Контроль подписками экономит ваше время</MainText>
                        </div>
                    </Container>
                </SwiperSlide>
                <SwiperSlide>
                    <Container>
                        <Img src={schield} alt="schield" />
                        <div>
                            <BoldText>Безопасность <br/>и конфиденциальность</BoldText>
                            <MainText>Мобильное приложение банка гарантирует безопасность данных</MainText>
                        </div>
                    </Container>
                </SwiperSlide>
                <SwiperSlide>
                    <Container>
                        <Img src={money} alt="money" />
                        <div>
                            <BoldText>Персонализированные рекомендации</BoldText>
                            <MainText>PAI2YOU дает рекомендации для экономии и планирования</MainText>
                        </div>
                    </Container>
                </SwiperSlide>
                <SwiperSlide>
                    <Container>
                        <Img src={chart} alt="chart" />
                        <div>
                            <BoldText>Аналитика и отчетность</BoldText>
                            <MainText>Отчеты расходов помогают понять финансовые потребности</MainText>
                        </div>
                    </Container>
                </SwiperSlide>
                <div className="slider-controler">
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
        </Wrapper>
    );
}

export default Onboarding;