import React from 'react';
import { Typography, Card, Button, CardActions, CardMedia, CardContent } from '@material-ui/core';


import useStyles from './styles';

const CartItem = ( {lineItem, onHandleCartQty, onHandleRemoveFromCart} ) => {

    const classes = useStyles();

    return (
       <Card>
           <CardMedia image={lineItem.media.source} alt={lineItem.name} className={classes.media}/>
           <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h4" gutterBottom>
                      {lineItem.name}
                    </Typography>
                    <Typography variant="h5">
                      {lineItem.price.formatted_with_symbol}
                    </Typography>
                </div>
                <CardActions className={classes.cardActions}>
                <div className={classes.buttons}>
                    <Button type="button" size="small" onClick={() => onHandleCartQty(lineItem.id, lineItem.quantity - 1)}>-</Button>
                    <Typography>{lineItem.quantity}</Typography>
                    <Button type="button" size="small" onClick={() => onHandleCartQty(lineItem.id, lineItem.quantity + 1)}>+</Button>
                 </div>
                 <Button variant="contained" type="button" color="secondary" onClick={() => onHandleRemoveFromCart(lineItem.id)}>Remove</Button>
                </CardActions>
            </CardContent>
       </Card>
    )
}

export default CartItem
