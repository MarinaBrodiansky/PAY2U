import popcorn from '../../assets/images/3d-casual-life-film-clapper-popcorn-and-movie-tickets-1.png';
import { Container, Img, Title } from './CatalogItem.style';

const CatalogItem = ({}) => {
    return (
        <Container to='theme'>
            <Title>Кино, сериалы</Title>
            <Img src={popcorn} alt='pop' />
        </Container>
    );
}

export default CatalogItem;