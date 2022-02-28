import './TodoItem.css';


function TodoItem({ todo }){
	
	var className = "todo-item shadow-2";
	if( todo.isDone ) className += " done";
	
	return(
		
		<div className={className}>
			
			{/* <Checkbox checked={todo.done} checkboxClicked={(checked) => checkboxClicked(checked) } /> */}
			
			<p>{todo.title}</p>
			<p>{"done: " + todo.isDone}</p>
			
		</div>
		
	);
	
}
export default TodoItem;

