import { useState , useEffect } from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList';
import todoApi from './api/TodoApi';

function App() {
	
	const [ todos , setTodos ] = useState( [] );
	
	useEffect( () => {
		
		const blah = async () => {
			var fetchedTodos = await todoApi.getAllTodos();
			setTodos( fetchedTodos );
		};
		
		blah();
		
		
		
	} , [] );
	
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
	
	return (
		<div className="todo-app">
			<div className="page-content">
				
				<h1 className='title'>
					Todo App
				</h1>
				
				<TodoList todos={todos} checkboxClicked={ (id,checked)=>checkboxClicked(id,checked) }/>
				
			</div>
		</div>
	);
}

export default App;