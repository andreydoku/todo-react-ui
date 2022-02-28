import axios from "axios";

var hostUrl = "https://andrey-todo-rest-api.herokuapp.com";

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
	}
	
	
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