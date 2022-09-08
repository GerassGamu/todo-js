//se dede agregar export a la funcionnque se va a mandar a llamar para que no genereverror

import { Todo } from "../classes";

import { todoList } from '../index'

//Referencia html
const divTodoList = document.querySelector('.todo-list');

///Referencia input html ára agregar tarea
const txtInput = document.querySelector('.new-todo');
//Referencia html boton eliminar Completados
const btnBorrar = document.querySelector('.clear-completed');
///Referencia filters html
const ulFiltors = document.querySelector('.filters');
///Referencia a
const anchorFiltors = document.querySelectorAll('.filtro');

export const crearTodoHtml = (todo) => {

    const htmlTodo = `
    <li class="${(todo.completado) ? 'completed' : ''}" data-id="${todo.id}">
    		<div class="view">
    			<input class="toggle" type="checkbox" ${(todo.completado) ? 'checked' : ''}>
    			<label>${todo.tarea}</label>
    			<button class="destroy"></button>
    		</div>
			    <input class="edit" value="Create a TodoMVC template">
		</li>`;

    ///todoList

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;


    divTodoList.append(div.firstElementChild);

    return div.firstElementChild;
}

///Eventos
txtInput.addEventListener('keyup', (event) => {

    // console.log(txtInput.value);

    //Condicion detectar enter y cuando este vacio
    if (event.keyCode === 13 && txtInput.value.length > 0) {
        const nuevoTodo = new Todo(txtInput.value);
        todoList.nuevoTodo(nuevoTodo);

        //Agrega el todo ingresado
        crearTodoHtml(nuevoTodo);
        ///Limpia el input despues de agregar
        txtInput.value = '';
    }
});

divTodoList.addEventListener('click', (event) => {
    const nombreElemento = event.target.localName;//input,label,button
    const todoElemento = event.target.parentElement.parentElement;
    const todoId = todoElemento.getAttribute('data-id');



    if (nombreElemento.includes('input')) { ///click en check
        todoList.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed');
    } else if (nombreElemento.includes('button')) {///Hay que borrar el todo



        todoList.eliminarTodo(todoId);
        divTodoList.removeChild(todoElemento);
    }
});

btnBorrar.addEventListener('click', () => {


    todoList.eliminarCompletados();
    for (let i = divTodoList.children.length - 1; i >= 0; i--) {
        const elemento = divTodoList.children[i];

        if (elemento.classList.contains('completed')) {
            divTodoList.removeChild(elemento);
        }
    }
});


ulFiltors.addEventListener('click', (event) => {

    const filtro = event.target.text;


    if (!filtro) { return; }

    
    anchorFiltors.forEach(elem => elem.classList.remove('selected'));
    ///agrega efecto seleccinado
    event.target.classList.add('selected');





    for (const elemento of divTodoList.children) {

        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');

        switch (filtro) {
            case 'Pendientes':
                if (completado) {
                    elemento.classList.add('hidden');
                }
                break;

            case 'Completados':
                if (!completado) {
                    elemento.classList.add('hidden');
                }
                break;
        }


    }

});
    ///Imagen
    // console.log(logo);
    // const img = document.createElement('img');
    // img.src = logo;
    // document.body.append(img);
