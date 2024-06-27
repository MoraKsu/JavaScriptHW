import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeProduct, toggleAvailability } from '../reducers/productsSlice';
import { List, ListItem, ListItemText, IconButton, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import EditProduct from './EditProduct';

const ProductList = () => {
  const products = useSelector(state => state.products.products);
  const dispatch = useDispatch();
  const [editingProductId, setEditingProductId] = useState(null);

  const handleRemove = (id) => {
    dispatch(removeProduct(id));
  };

  const handleToggle = (id) => {
    dispatch(toggleAvailability(id));
  };

  const handleEdit = (id) => {
    setEditingProductId(id);
  };

  return (
    <div>
      <List>
        {products.map(product => (
          <ListItem key={product.id}>
            <ListItemText
              primary={`${product.name} - $${product.price}`}
              secondary={product.description}
            />
            <Button onClick={() => handleToggle(product.id)}>
              {product.available ? 'Mark as Unavailable' : 'Mark as Available'}
            </Button>
            <IconButton onClick={() => handleEdit(product.id)}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => handleRemove(product.id)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
      {editingProductId && <EditProduct productId={editingProductId} onClose={() => setEditingProductId(null)} />}
    </div>
  );
};

export default ProductList;
