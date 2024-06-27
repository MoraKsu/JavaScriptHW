import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProduct } from '../reducers/productsSlice';
import { TextField, Button, Checkbox, FormControlLabel } from '@mui/material';

const EditProduct = ({ productId, onClose }) => {
  const product = useSelector(state => state.products.products.find(p => p.id === productId));
  const [updatedProduct, setUpdatedProduct] = useState({ ...product });
  const dispatch = useDispatch();

  useEffect(() => {
    setUpdatedProduct({ ...product });
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct(prevProduct => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    setUpdatedProduct(prevProduct => ({
      ...prevProduct,
      available: e.target.checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct(updatedProduct));
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField label="Name" name="name" value={updatedProduct.name} onChange={handleChange} required />
      <TextField label="Description" name="description" value={updatedProduct.description} onChange={handleChange} required />
      <TextField label="Price" name="price" value={updatedProduct.price} onChange={handleChange} required type="number" />
      <FormControlLabel
        control={<Checkbox checked={updatedProduct.available} onChange={handleCheckboxChange} />}
        label="Available"
      />
      <Button type="submit" variant="contained" color="primary">Update Product</Button>
      <Button variant="contained" color="secondary" onClick={onClose}>Cancel</Button>
    </form>
  );
};

export default EditProduct;
