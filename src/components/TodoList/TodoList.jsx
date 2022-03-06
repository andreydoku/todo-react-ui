import './TodoList.css';
import TodoItem from "../TodoItem/TodoItem";


function TodoList({ todos , checkboxClicked , titleChanged , deleteClicked }){
	
	if( todos === undefined ){
		todos = [];
	}
	
	if( checkboxClicked === undefined ){
		checkboxClicked = (id, checked) => {
			console.log( "checkbox clicked: "
				+ "\n\t" + "id: " + id
				+ "\n\t" + "checked: " + checked );
		}
	}
	
	
	return(
		
		<div className="todo-list">
			
			{todos.map( todo => 
				<TodoItem 
					todo={todo} 
					key={todo._id} 
					checkboxClicked={ (id,checked) => checkboxClicked(id,checked) }
					titleChanged={ (id,newTitle) => titleChanged(id,newTitle) }
					deleteClicked={ (id) => deleteClicked(id) }
				/>
			)}
			
		</div>
		
	);
	
}
export default TodoList;