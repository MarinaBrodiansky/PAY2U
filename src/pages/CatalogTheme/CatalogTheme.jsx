// eslint-disable-next-line no-unused-vars
import CatalogItem from "../../components/catalog-item/CatalogItem";
import { Wrapper } from "../../styles/mainStyles";
import { CatalogItems, Container, SubText } from "./CatalogTheme.style";
import NewSubCard from "../../components/newSubCard/NewSubCard";
import HeaderBack from "../../components/headerBack/HeaderBack";

const CatalogTheme = () => {
    return (
        <Wrapper>
            <HeaderBack />
            <Container>
                <h1>Кино, сериалы</h1>
                <SubText>категория</SubText>
            </Container>
            <CatalogItems>
                <NewSubCard active='active' />
                <NewSubCard />
                <NewSubCard hit='hit' />
                <NewSubCard hit='hit' />
                <NewSubCard />
            </CatalogItems>
        </Wrapper>
    );
}

export default CatalogTheme;