import CatalogItem from "../../components/catalog-item/CatalogItem";
import { Wrapper } from "../../styles/mainStyles";
import { CatalogItems, Container } from "./Catalog.style";
import { useEffect, useState } from 'react'
import api from '../../utils/Api'

const Catalog = () => {
    const [categories, setCategroies] = useState([]);
    useEffect(() => {
       api.getCategories().then((cat) => {
        for (let c of cat) {
            api.getCategoryContent(c.slug).then((category) => {
                setCategroies([...categories, category])
            }).catch(console.error)
        }
       }).catch(console.error) 
    },[])

    return (
        <Wrapper id='catalogue'>
            <Container>
                <h1>Каталог</h1>
            </Container>
            <CatalogItems>
            {categories.map(c => (
                <CatalogItem key={c.id} name={c.name} icon={c.icon} />
            ))}
            </CatalogItems>
        </Wrapper>
    );
}

export default Catalog;