const todos = [
    { task: 'Köp kaffe', done: false },
    { task: 'Brygg kaffe', done: false },
    { task: 'Drick kaffe', done: false }
]

const todoTasks = todos.map((todo) => {
   return todo.task;
});

// Samma sak fast med en for-loop
// for(let i = 0; i < todos.length; i++) {
//     console.log(todos[i]);
// }

// Map-metoden använder sig av en callback (alltså en funktion som skickas med i en annan funktion)
// document.querySelector('button').addEventListener('click', () => {

// })

console.log('Todos array:', todos);
console.log('TodoTasks array:', todoTasks);


let persons = [
    { name: 'Ada', age: 28 },
    { name: 'Alice', age: 14 },
    { name: 'Christopher Robin', age: 12 },
    { name: 'Glenn', age: 47 }
]

const filteredPersons = persons.filter((person) => {
    if (person.age > 20) return person;
});

console.log(filteredPersons);