import React from 'react';
import { Grid } from '@material-ui/core';


import Product from './product/Product';
import useStyles from './style';

const products = [
    {id: 1, name: 'Shoe', description: 'Running shoe', price: 'R239', image: 'https://images.pexels.com/photos/4348638/pexels-photo-4348638.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
    {id: 2, name: 'Macbook', description: 'Best laptop for developer', price: 'R983', image: 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}
]
const Products = () => {
  const classes = useStyles();
   return(
    <main className={classes.content}>
    <div className={classes.toolbar}/>  
    <Grid container justify="center" spacing={4}>
     {products.map((product) => (
         <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
           <Product product={product}/>
         </Grid>
     ))}
    </Grid>
   </main>
  )
}

export default Products;