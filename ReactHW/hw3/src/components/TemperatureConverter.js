import React, { useState } from 'react';
import { TextField, Container, Grid, Typography, Button, Box } from '@mui/material';

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const convertCelsiusToFahrenheit = () => {
    if (celsius === '') {
      setFahrenheit('');
    } else {
      const fahrenheitValue = (celsius * 9/5) + 32;
      setFahrenheit(fahrenheitValue.toFixed(2));
    }
  };

  const convertFahrenheitToCelsius = () => {
    if (fahrenheit === '') {
      setCelsius('');
    } else {
      const celsiusValue = (fahrenheit - 32) * 5/9;
      setCelsius(celsiusValue.toFixed(2));
    }
  };

  const handleCelsiusChange = (event) => {
    setCelsius(event.target.value);
  };

  const handleFahrenheitChange = (event) => {
    setFahrenheit(event.target.value);
  };

  return (
    <Container>
      <Box textAlign="center" mt={4} mb={4}>
        <Typography variant="h4" gutterBottom>
          Temperature Converter
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            label="Celsius"
            value={celsius}
            onChange={handleCelsiusChange}
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Fahrenheit"
            value={fahrenheit}
            onChange={handleFahrenheitChange}
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" color="primary" onClick={convertCelsiusToFahrenheit} fullWidth>
            Convert to Fahrenheit
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" color="secondary" onClick={convertFahrenheitToCelsius} fullWidth>
            Convert to Celsius
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TemperatureConverter;


