import './App.css';

import TodoItem from './components/TodoItem/TodoItem';
import AddTodo from './components/AddTodo/AddTodo';

function App() {
  const title = 'Todo App';
  const todos = [
    { id: 1,  task: 'Köp kaffe', done: false },
    { id: 2, task: 'Köp kaka', done: false },
    { id: 3, task: 'Brygg kaffe', done: false },
    { id: 4, task: 'Drick kaffe', done: false },
    { id: 5, task: 'Ät kaka', done: false }
  ]

  const todoComponents = todos.map((todo) => {
    return <TodoItem task={todo.task} done={todo.done} key={todo.id} />
  });

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
      <AddTodo />
    </main>
  )
}

export default App
