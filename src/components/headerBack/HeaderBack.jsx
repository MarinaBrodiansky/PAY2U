import { Button, Container } from "./HeaderBack.style";
import { useNavigate } from "react-router-dom";

const HeaderBack = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(-1);
      };
    return (
        <Container>
            <Button onClick={handleClick}>← Назад</Button>
        </Container>
    );
}

export default HeaderBack;