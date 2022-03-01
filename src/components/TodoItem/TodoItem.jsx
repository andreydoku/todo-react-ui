import './TodoItem.css';

import { FaTrash } from 'react-icons/fa';
import { FaRegCheckSquare } from 'react-icons/fa';
import { FaRegSquare , FaCheckSquare } from 'react-icons/fa';


function TodoItem({ todo , checkboxClicked }){
	
	if( checkboxClicked === undefined )  checkboxClicked = () => {};
	
	var className = "todo-item shadow-2";
	if( todo.isDone ) className += " done";
	
	
	return(
		
		<div className={className}>
			
			{/* <Checkbox checked={todo.done} checkboxClicked={(checked) => checkboxClicked(checked) } /> */}
			
			<div className='left'>
				
				{todo.isDone ? 
					// <FaRegCheckSquare className='check-box'/> 
					<FaCheckSquare className='check-box' onClick={()=>checkboxClicked(todo._id,false)}/> 
					: 
					<FaRegSquare   className='check-box' onClick={()=>checkboxClicked(todo._id,true)}/> 
				}
				
				<p className='todo-title'>{todo.title}</p>
			</div>
			
			
			{/* <p>{"done: " + todo.isDone}</p> */}
			
			<FaTrash className='delete-icon'/>
			
			
			
			
		</div>
		
	);
	
}
export default TodoItem;

