import { Header, ShortDescription, SubInfo, CardForm, Img } from "./ActionCard.style";
import creditcard from "../../assets/icons/credit-card.svg";
import credit from "../../assets/icons/credit.svg";
import debitcard from "../../assets/icons/debit-card.svg";
import invest from "../../assets/icons/investments.svg";
import safe from "../../assets/icons/safe.svg";

const ActionCard = ({
    text,
    icon,
    shortDescription,
    ...props
}) => {
    var image;
    switch (icon) {
        case 'credit-card':
            image = creditcard;
            break;

        case 'credit':
            image = credit;
            break;

        case 'debit-card':
            image = debitcard;
            break;

        case 'investments':
            image = invest;
            break;

        case 'safe':
            image = safe;
            break;
        
        default:
            break;
    }
    return (
        <CardForm wide={shortDescription}>
            <Header>{text}</Header>
            <SubInfo>
                {shortDescription &&
                    <ShortDescription>{shortDescription}</ShortDescription>
                }
                <Img src={image} alt={icon} />
            </SubInfo>
        </CardForm>
    );
}

export default ActionCard;