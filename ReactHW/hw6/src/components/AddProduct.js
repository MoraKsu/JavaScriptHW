import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../reducers/productsSlice';
import { TextField, Button, Checkbox, FormControlLabel } from '@mui/material';

const AddProduct = () => {
  const [product, setProduct] = useState({ id: '', name: '', description: '', price: '', available: false });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prevProduct => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    setProduct(prevProduct => ({
      ...prevProduct,
      available: e.target.checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(product));
    setProduct({ id: '', name: '', description: '', price: '', available: false });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField label="ID" name="id" value={product.id} onChange={handleChange} required />
      <TextField label="Name" name="name" value={product.name} onChange={handleChange} required />
      <TextField label="Description" name="description" value={product.description} onChange={handleChange} required />
      <TextField label="Price" name="price" value={product.price} onChange={handleChange} required type="number" />
      <FormControlLabel
        control={<Checkbox checked={product.available} onChange={handleCheckboxChange} />}
        label="Available"
      />
      <Button type="submit" variant="contained" color="primary">Add Product</Button>
    </form>
  );
};

export default AddProduct;
