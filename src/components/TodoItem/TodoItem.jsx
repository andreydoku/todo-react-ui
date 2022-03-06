import './TodoItem.css';

import { FaTrash } from 'react-icons/fa';
import { FaRegSquare , FaCheckSquare } from 'react-icons/fa';
import { useState , useEffect } from 'react';


function TodoItem({ todo , checkboxClicked , titleChanged , deleteClicked }){
	
	if( checkboxClicked === undefined )  checkboxClicked = () => {};
	if( titleChanged === undefined ) titleChanged = () => {}
	if( deleteClicked === undefined ) deleteClicked = () => {}
	
	var className = "todo-item shadow-2";
	if( todo.isDone ) className += " done";
	
	
	
	
	return(
		
		<div className={className}>
			
			<div className='left'>
				
				{todo.isDone ? 
					// <FaRegCheckSquare className='check-box'/> 
					<FaCheckSquare 
						className='check-box' 
						onClick={ () => checkboxClicked( todo._id ,false )}
					/> 
					: 
					<FaRegSquare   
						className='check-box' 
						onClick={ () => checkboxClicked( todo._id , true ) }
					/> 
				}
				
				<TitleField 
					title={todo.title} 
					onTitleChange={ (newTitle) => titleChanged( todo._id , newTitle ) }
				/>
				
				
			</div>
			
			<FaTrash 
				className='delete-icon'
				onClick={ () => deleteClicked( todo._id ) }
			/>
			
		</div>
		
	);
	
}
export default TodoItem;


function TitleField({ title , onTitleChange }){
	
	const [ text , setText ] = useState( title );
	useEffect( () => {
		
		setText( title );
		
	} , [title] );
	
	
	if( onTitleChange === undefined ) onTitleChange = () => {}
	
	function handleSubmit(e){
		
		e.preventDefault();
		
		e.target.children[0].blur();
		
	}
	
	function handleTextChange(e){
		
		setText( e.target.value );
		
	}
	function handleFocusLost(e){
		
		if( text !== title ){
			setText( title );
			onTitleChange( text );
		}
		
	}
	
	return(
		
		<form onSubmit={ (e) => handleSubmit(e) }>
			
			<input 
				type="text" 
				value={text} 
				onChange={ (e) => handleTextChange(e) }
				onBlur={ (e) => handleFocusLost(e) }
				className="title-field"
			/>
			
		</form>
		
	);
	
	
}




