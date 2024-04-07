import { Container, Img, Title } from './CatalogItem.style';

// eslint-disable-next-line react/prop-types
const CatalogItem = ({ name, icon }) => {
    return (
        <Container to='theme'>
            <Title>{name}</Title>
            <Img src={icon} alt='pop' />
        </Container>
    );
}

export default CatalogItem;