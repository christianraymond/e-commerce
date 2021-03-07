import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './product/Product';
import CircularProgress from './CircularProgress';
import useStyles from './style';

const Products = ({ products, addToCardClick }) => {
	const classes = useStyles();

	const result = products;

	console.log(result.length);

	return (
		<main className={classes.content}>
			<div className={classes.toolbar} />
			{result.length === 0 ? (
				<Grid container justify="center">
					<CircularProgress />
				</Grid>
			) : (
				<Grid container justify="center" spacing={4}>
					{products.map((product) => (
						<Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
							<Product product={product} addToCardClick={addToCardClick} />
						</Grid>
					))}
				</Grid>
			)}
		</main>
	);
};

export default Products;
