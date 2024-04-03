import { Wrapper } from "../../styles/mainStyles";
import dart from '../../assets/images/casual-life-3d-target-and-dart.png';
import alarm from '../../assets/images/casual-life-3d-alarm-sign 1.png';
import folders from '../../assets/images/3d-plastic-people-office-drawer-with-sheets-of-paper-and-folders.png'
import { BoldText, Together, Container, Image, SubText, Rec, RecText } from "./Success.style";
import MainButton from "../../components/button/MainButton";
import Recommend from "../../components/recomend/Recommend";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';

const Success = ({
    theme,
    error,
    ...props
}) => {
    return (
        <Wrapper>
            <Container>
                {!error && <Image src={dart} alt="success" />}
                {(error && theme !== 'notfound') && <Image src={alarm} alt="alarm" />}
                {(error && theme === 'notfound') && <Image src={folders} alt="alarm" />}
                {theme === 'subs' && <BoldText>Ваши подписки успешно перенесены!</BoldText>}
                {theme === 'prolong' && <BoldText>Автопродление успешно отключено</BoldText>}
                {theme === 'tarif' && (
                    <Together>
                        <BoldText>Тариф успешно изменен</BoldText>
                        <SubText>Новый тариф будет активирован 31.02.2024</SubText>
                    </Together>
                )}
                {theme === 'newsub' && (
                    <Together>
                        <BoldText>Подписка успешно оформлена</BoldText>
                        <SubText>Логин и пароль для входа в сервис отправили Вам в СМС</SubText>
                    </Together>
                )}
                {theme === 'notenoughmoney' && (
                    <Together>
                        <BoldText>Операция прервана</BoldText>
                        <SubText>Недостаточно средств на карте</SubText>
                    </Together>
                )}
                {theme === 'notfound' && (
                    <Together>
                        <BoldText>Подписки на сервисы не найдены.</BoldText>
                        <SubText>Но вы можете их подключить!</SubText>
                    </Together>
                )}
                <Together>
                    {theme != 'notenoughmoney' && <MainButton full='full' backgroundColor='active' text='Мои подписки' fontpx='17' />}
                    {theme === 'notenoughmoney' && <MainButton full='full' backgroundColor='active' text='К оформлению' fontpx='17' />}
                    <MainButton full='full' text='На главную' fontpx='17' />
                </Together>
            </Container>
            {theme === 'notfound' &&
                <Rec>
                    <RecText>Рекомендуемое</RecText>
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
                </Rec>}
        </Wrapper>
    );
}

export default Success;