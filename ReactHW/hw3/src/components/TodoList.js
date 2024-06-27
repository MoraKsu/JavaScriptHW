import React, { useState, useEffect } from 'react';
import { TextField, Button, List, ListItem, ListItemText, IconButton, Container, Typography, Card, CardContent } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoList = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom textAlign="center" mt={4} mb={4}>
        Todo List
      </Typography>
      <TextField
        label="New Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        fullWidth
        variant="outlined"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddTask}
        fullWidth
        style={{ marginTop: '16px' }}
      >
        Add Task
      </Button>
      <List style={{ marginTop: '16px' }}>
        {tasks.map((task, index) => (
          <Card key={index} style={{ marginBottom: '8px' }}>
            <CardContent>
              <ListItem
                secondaryAction={
                  <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteTask(index)}>
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemText primary={task} />
              </ListItem>
            </CardContent>
          </Card>
        ))}
      </List>
    </Container>
  );
};

export default TodoList;


