import './App.css';
import { useState } from 'react';

import TodoItem from './components/TodoItem/TodoItem';
import AddTodo from './components/AddTodo/AddTodo';

function App() {
  const title = 'Todo App';
  const [todos, setTodos] = useState([
    { id: 1,  task: 'Köp kaffe', done: false },
    { id: 2, task: 'Köp kaka', done: false },
    { id: 3, task: 'Brygg kaffe', done: false },
    { id: 4, task: 'Drick kaffe', done: false },
    { id: 5, task: 'Ät kaka', done: false }
  ]);

  const todoComponents = todos.map((todo) => {
    return <TodoItem task={todo.task} done={todo.done} key={todo.id} />
  });

  function updateTodos(todo) {
    console.log('I updateTodos funktion:', todo);

    todo.id = todos.length + 1;
    const newArray = [...todos]; // Gör en kopia vår todos array
    newArray.push(todo);
    setTodos(newArray);

    // Gör samma som ovan men lite mer komprimerat
    //setTodos([...todos, { id: 6, task: '', done: false } ]);
  }

  console.log(todoComponents);

  return (
    <main className='app'>
      <h1>{ title }</h1>
      <ul className='app__todos'>
        { todoComponents }

        {/* <TodoItem task="Köp kaffe" done={true} />
        <TodoItem task="Köp kaka" done={true} />
        <TodoItem task="Brygg kaffe" done={false} />
        <TodoItem task="Drick kaffe" done={false} /> */}
      </ul>
      <AddTodo updateTodos={ updateTodos } />
    </main>
  )
}

export default App
