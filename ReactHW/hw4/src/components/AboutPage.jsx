import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const AboutPage = () => {
  return (
    <div>
      <h1>О нас</h1>
      <Button component={Link} to="/" variant="contained" color="primary">
        Главная страница
      </Button>
    </div>
  );
};

export default AboutPage;
