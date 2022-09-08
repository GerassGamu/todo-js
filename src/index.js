///Importar Modulos
import './styles.css';
////Busca importaciones
import { Todo, TodoList } from './classes'
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

//Agrega todos a html
todoList.todos.forEach(todo => crearTodoHtml(todo));
// todoList.todos.forEach(crearTodoHtml);

const newTodo = new Todo('Aprender JS');
// todoList.nuevoTodo(newTodo);
todoList.todos[0].imprimirClase();
console.log('todos',todoList.todos);
// console.log(todoList.todos);

// const tarea = new Todo('Aprender JS!!!!');

// // todoList.nuevoTodo(tarea);
// todoList.nuevoTodo(tarea);

// console.log(todoList);


// crearTodoHtml(tarea);



//Local Storage, SesionStorage
// Cuando va a Web
//Se muestra en Chrome, apartado App-Local Storage
// localStorage.setItem('mi-key','GERASS');
// sessionStorage.setItem('mi-key','GERASS');
//Tiempo respuesta
// setTimeout(() => {
//     localStorage.removeItem('mi-key');
// }, 1500);

