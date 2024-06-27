import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const HomePage = () => {
  return (
    <div>
      <h1>Главная страница</h1>
      <Button component={Link} to="/about" variant="contained" color="primary">
        О нас
      </Button>
    </div>
  );
};

export default HomePage;
