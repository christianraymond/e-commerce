import React from 'react';
import { Container, Typography, Button, Grid, CardContent } from '@material-ui/core';
import { Link } from 'react-router-dom';

import useStyle from './styles';

import CartItem from './cartItem/CartItem';

const Carts = ({ cart, handleCartQty, handleRemoveFromCart, handleEmptyCart }) => {

    const classes = useStyle();
    
    console.log(cart.line_items);
    const isEmpty = !cart.line_items.length;

      const EmptyCart = () => ( 
        <Typography variant="subtitle1">You have no items in your shopping cart,
        <Link to="/" className={classes.link}> start adding some</Link>!
        </Typography>
      )
  
      const FilledCart = () => ( 
        <>
        <Grid container spacing={3}>
          {cart.line_items.map((lineItem) => (
            <Grid item xs={12} sm={4} key={lineItem.id}>
              <CartItem lineItem={lineItem} onHandleCartQty={handleCartQty} onHandleRemoveFromCart={handleRemoveFromCart}/>
            </Grid>
          ))}
        </Grid>
        <div className={classes.cardDetails}>
          <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
          <div>
            <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty cart</Button>
            <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
          </div>
        </div>
      </>
      )
    if(!cart.line_items) return 'Loading...'
    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h6" gutterBottom>Your Shopping Cart</Typography>
            {isEmpty ? <EmptyCart/> : <FilledCart/>}
        </Container>
    )
}

export default Carts
