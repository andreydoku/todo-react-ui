
import './App.css';
import TodoList from './components/TodoList/TodoList';

function App() {
	
	var defaultTodos = [
		{
			title: "Civic car registration",
			done: false,
		},
		{
			title: "try mono-tasking with Chris",
			done: true,
		},
		{
			title: "do laundry",
			done: false,
		},
		{
			title: "work on ToDo App",
			done: false,
		},
	];
	
	
	return (
		<div className="todo-app">
			<div className="page-content">
				
				<h1 className='title'>
					Todo App
				</h1>
				
				<TodoList todos={defaultTodos}/>
				
			</div>
		</div>
	);
}

export default App;