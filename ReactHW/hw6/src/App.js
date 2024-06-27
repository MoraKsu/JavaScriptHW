import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Product Catalog</h1>
        <AddProduct />
        <ProductList />
      </div>
    </Provider>
  );
};

export default App;
