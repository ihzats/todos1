// src/App.jsx
import React from 'react';
import Todos from './components/Todos';

function App() {
  const todos = [
    { id: 1, title: 'Learn React' },
    { id: 2, title: 'Build a Todo App' },
  ];

  return (
        <div style={styles.container}>
        <h1 style={styles.title}>My Todo List</h1>
        <Todos todos={todos} />
      </div>
    )
  }
  
  const styles = {
    container: {
      textAlign: 'center',
      padding: '12px',
    },
    title: {
      fontSize: '36px',
    },
  }
  
  export default App