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
	
	
	
	return (
		<div className="todo-app">
			<div className="page-content">
				
				<h1 className='title'>
					Todo App
				</h1>
				
				<TodoList todos={todos}/>
				
			</div>
		</div>
	);
}

export default App;