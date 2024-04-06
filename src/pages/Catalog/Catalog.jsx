import CatalogItem from "../../components/catalog-item/CatalogItem";
import { Wrapper } from "../../styles/mainStyles";
import { CatalogItems, Container } from "./Catalog.style";

const Catalog = ({
}) => {
    return (
        <Wrapper>
            <Container>
                <h1>Каталог</h1>
            </Container>
            <CatalogItems>
                <CatalogItem />
                <CatalogItem />
                <CatalogItem />
                <CatalogItem />
                <CatalogItem />
                <CatalogItem />
                <CatalogItem />
                <CatalogItem />
                <CatalogItem />
                <CatalogItem />
                <CatalogItem />
                <CatalogItem />
                <CatalogItem />
            </CatalogItems>
        </Wrapper>
    );
}

export default Catalog;