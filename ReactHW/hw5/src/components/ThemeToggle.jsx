import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../actions';
import { Button } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme.theme);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div style={{
      background: theme === 'light' ? '#fff' : '#333',
      color: theme === 'light' ? '#000' : '#fff',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Button 
        onClick={handleToggle} 
        variant="contained" 
        color="primary" 
        startIcon={theme === 'light' ? <Brightness7Icon /> : <Brightness4Icon />}
      >
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </Button>
    </div>
  );
};

export default ThemeToggle;
