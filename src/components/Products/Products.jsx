import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';

const products = [
    { id:1, name:'Shoes', description:'Running shoes.', price: '100', image: 'https://images.lojanike.com.br/1024x1024/produto/tenis-nike-zoomx-vaporfly-next-2-masculino-DJ5457-100-1-11625230595.jpg'},
    { id:2, name:'macbook', description:'Apple macbook.', price: '100', image: 'https://a-static.mlcdn.com.br/618x463/macbook-air-133-apple-m1-8gb-256gb-ssd-prateado/magazineluiza/227625500/43ed459d5a87a2e62e35e5eb394b0c94.jpg'},
];

const Products = () => {
    return(
        <main>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id}  xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    );
}

export default Products;