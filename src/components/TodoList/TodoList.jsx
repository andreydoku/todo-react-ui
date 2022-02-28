import './TodoList.css';
import TodoItem from "../TodoItem/TodoItem";


function TodoList({ todos }){
	
	if( todos === undefined ){
		todos = [];
	}
	
	return(
		
		<div className="todo-list">
			
			{todos.map( todo => 
				<TodoItem todo={todo}/>
			)}
			
		</div>
		
	);
	
}
export default TodoList;