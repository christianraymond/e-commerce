import React from 'react';

import { commerce } from './lib/commerce';
import { Products, Navbar } from './components'

export const App = () => {
    return (
        <div>
            <Navbar/>
            <Products/>
        </div>
    )
}

export default App;