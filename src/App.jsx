import { useState , useEffect } from 'react';
import './App.css';
import AddTaskButton from './components/AddTaskButton/AddTaskButton';
import TodoList from './components/TodoList/TodoList';
import todoApi from './api/TodoApi';

function App() {
	
	const [ todos , setTodos ] = useState( [] );
	
	useEffect( () => {
		
		
		
		fetchAllTodos();
		
		
		
	} , [] );
	
	const fetchAllTodos = async () => {
		var fetchedTodos = await todoApi.getAllTodos();
		setTodos( fetchedTodos );
	};
	
	
	
	const checkboxClicked = async (id,checked) => {
		
		// console.log( "todo set to done: "
		// 		+ "\n\t" + "id: " + id
		// 		+ "\n\t" + "done: " + checked );
		
		var updatedTodo = await todoApi.updateTodo( id , {isDone: checked} );
		
		const index = todos.findIndex( todo => todo._id === id );
		
		const newTodos = [...todos];
		newTodos[index] = updatedTodo;
  		setTodos(newTodos);
		
	}
	
	async function titleChanged( id, newTitle ){
		
		console.log( "title changed: " 
			+ "\n\t" + "new title: " + newTitle 
			+ "\n\t" + "id: " + id 
		);
		
		var updatedTodo = await todoApi.updateTodo( id , {title: newTitle} );
		
		const index = todos.findIndex( todo => todo._id === id );
		
		const newTodos = [...todos];
		newTodos[index] = updatedTodo;
		
		console.log( newTodos );
  		setTodos(newTodos);
		
	}
	
	async function deleteClicked( id ){
		
		console.log( "delete clicked: " 
			+ "\n\t" + "id: " + id
		);
		
		const deletedTodo = await todoApi.deleteTodo( id );
		
		const newTodos = todos.filter( todo => todo._id !== deletedTodo._id );
  		setTodos(newTodos);
		
	}
	
	async function addTaskClicked(){
		
		console.log( "add task clicked" );
		
		var newTodo = {
			title: "new task",
			isDone: false
		}
		
		const addedTodo = await todoApi.addTodo( newTodo );
		console.log( addedTodo );
		
		const newTodos = [...todos];
		newTodos.push( addedTodo );
		
		setTodos( newTodos );
		
	}
	
	
	return (
		<div className="todo-app">
			<div className="page-content">
				
				<h1 className='title'>
					Todo App
				</h1>
				
				<AddTaskButton onClick={() => addTaskClicked()}/>
				
				<TodoList 
					todos={todos} 
					checkboxClicked={ (id,checked)=>checkboxClicked(id,checked) }
					titleChanged={ (id,newTitle) => titleChanged(id,newTitle) }
					deleteClicked={ (id) => deleteClicked(id) }
				/>
				
			</div>
		</div>
	);
}

export default App;