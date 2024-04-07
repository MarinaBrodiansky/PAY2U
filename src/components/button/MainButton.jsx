import { ButtonActive, ButtonGrey, Info } from "./MainButton.style";
import coupon from "../../assets/icons/coupon.svg"
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types, no-unused-vars
const MainButton = ({backgroundColor, text, fontpx, full, link, ...props}) => {
    var image;
    switch (text) {
        case 'coupon':
            image = coupon;
            break;
        default:
            break;
    }
    const navigate = useNavigate();

    const handleClick = () => {
        if (link)
            navigate(`${link}`);
    }
    return (
        <>
            {backgroundColor ?
                <ButtonActive onClick={handleClick}
                    full={full} >
                    {image ?
                        <img src={image} alt="img" /> :
                        <Info size={fontpx}>{text}</Info>}
                </ButtonActive> :
                <ButtonGrey onClick={handleClick}
                    full={full} >
                    {image ?
                        <img src={image} alt="img" /> :
                        <Info size={fontpx}>{text}</Info>}
                </ButtonGrey>
            }

        </>
    );
}

export default MainButton;