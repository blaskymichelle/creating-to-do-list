const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");



const list = document.getElementById("list");
const CHECK ="fa-check-circle";
const UNCHECK ="fa-circle-thin";
const 
function addToDo( toDo ,id){ 
  const text =<li class="item">
                    <i class="fa    complete"job="complete" id="${id}"></i>
                    <p class="text   "> ${toDo} </p>
                    <i class="fa fa-trash-o delete"job="delete"id="${id}"></i>
            </li>; 
  const position = "beforeend";                 
  list.insertAdjacentHTML(position,text);
}



const input = document.getElementById("input");

document.addEventListener("keyup",function(event){
	if(event.keyCode == 13){
		const toDo = input.value;
        if(toDo){
        	addToDo(toDo,id, false, false);
        	List.push(
        	{
        		name: toDo,
        		id: id,
        		done: false,
        		trash: false
        	}

        );
        
        input.value = "";
    	}
	}
});
let List = [];
let id = 0;
List[0]->
{
	name ="Drink Coffee",
	id: 0,
	done= false,
	trash:false

}




const element = document.getElementById("element");
element.insertAdjacentHTML(position, text);

