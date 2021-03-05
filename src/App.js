import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { commerce } from './lib/commerce';
import { Products, Navbar, Cart } from './components';

export const App = () => {
	const [ products, setProducts ] = useState([]);
	const [ cart, setCart ] = useState({});

	const fetchProducts = async () => {
		const { data } = await commerce.products.list();
		setProducts(data);
	};

	const fetchCart = async () => {
		setCart(await commerce.cart.retrieve());
	};

	const handleAddToCart = async (productId, quantity) => {
		const addedItem = await commerce.cart.add(productId, quantity);

		setCart(addedItem.cart);
	};

	useEffect(() => {
		fetchProducts();
		fetchCart();
	}, []);

	return (
		<Router>
			<div>
				<Navbar totalItems={cart.total_items} />
				<Switch>
                    <Route exact path="/">
                        <Products products={products} addToCardClick={handleAddToCart} />
                    </Route>
                    <Route exact path="/cart">
                        <Cart cart={cart} />
                    </Route>
				</Switch>
			</div>
		</Router>
	);
};

export default App;
