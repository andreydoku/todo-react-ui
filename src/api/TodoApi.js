import axios from "axios";

var hostUrl = "https://andrey-todo-rest-api.herokuapp.com";
// var hostUrl = "http://localhost:5002";


var TodoApi = {
	
	getAllTodos: async () => {
			
		try{
			const {data} = await axios.get( hostUrl+"/todos" );
			return data;
		}
		catch( error ){
			console.error( error.message );
			return error;
		}
	},
	
	updateTodo: async (id,todo) => {
		
		var url = hostUrl+"/todos"+"/"+id;
		console.log( "TodoApi: sending POST"
			+ "\n\t" + "url: " + url
			+ "\n\t" + "body: " + JSON.stringify(todo)
		);
		
		try{
			//const {data} = await axios.post( url , todo );
			const res = await axios.post( url , todo );
			console.log( "\t" + "response: " + res.status + " " + res.statusText
				+ "\n\t\t" + "body: " + JSON.stringify(res.data) );
			
			return res.data;
		}
		catch( error ){
			console.error( error.message );
			return error;
		}
	},
	
	
}
export default TodoApi;






var sampleTodos = [
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