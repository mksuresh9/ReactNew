 import React from 'react';
import './App.css';
import Todo from './components/function';
import todoData from './components/todoData';
import ParentComp from './components/parentComp';
/*import Table from './components/table';*/
import Form from './components/form';
import Inc from './components/Inc_Dec';
import Joke1 from './components/joke1';
import Condi from './components/condi_Rend';

function App() {
  const todo = todoData.map(item => <Todo item = {item} />)
  return (
    <div className="App">
     <h1> hi this is chetan </h1>
     <ParentComp />
    {/* <Table />*/}
     <Form />
     <Inc />
     <Joke1 />
     {todo}
    <Condi />      
    </div>
  );
}

export default App;
