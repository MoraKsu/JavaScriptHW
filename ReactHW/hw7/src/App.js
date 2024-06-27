import React from 'react';
import TaskList from './components/TaskList';
import { Container, Typography } from '@mui/material';

const App = () => {
  return (
    <Container>
      <Typography variant="h3" component="h1" gutterBottom>
        Task Manager
      </Typography>
      <TaskList />
    </Container>
  );
};

export default App;
