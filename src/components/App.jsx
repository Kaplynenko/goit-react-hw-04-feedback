import React,{Component} from 'react';
import { nanoid } from 'nanoid'
// import PropTypes from 'prop-types'
import ToDoList from './toDoList'
import ToDoEditor from './toDoEditor/index';
import Filter from './toDoEditor/filter';
const uId = nanoid(5)

class App extends Component{
  state={
    todos:[{id:'id-1',text:'Вивчити основи React',completed:false},
    {id:'id-2',text:'Розібратися с React Router',completed:false},
    {id:'id-3',text:'Пережити Redux',completed:false},],
    filter:''
  };

addToDo=text=>{

  const todo={
    id:uId,
    text,
    completed:false,

  }
  this.setState(({todos})=>({todos:[...todos,todo]}))
}

changeFilter=(e)=>{
  this.setState({filter:e.currentTarget.value})
  
}
   deleteToDo=id=>{
    this.setState(prevState=>({todos:prevState.todos.filter(todo=>todo.id!==id)}))
  };
  toggleCompleted = toDoId=>{
    
    this.setState(({todos}) =>({todos:todos.map(todo=>
     todo.id===toDoId?{...todo,completed:!todo.completed}:todo
  ) 

    }))
  }
  visibleToDo=()=>{
    const {todos,filter} = this.state 
    const normalize = this.state.filter.toLocaleLowerCase()
    return todos.filter(todo=>todo.text.toLocaleLowerCase().includes(normalize))

  }
  render(){
   const {todos,filter} = this.state 
   const filterToDo = this.visibleToDo()
     
    return(
<>
<h1>hello</h1>
<ToDoEditor onSubmit={this.addToDo}/>
<Filter value={filter} onChange={this.changeFilter}/>

<ToDoList todos={filterToDo} onDeleteToDo={this.deleteToDo} onToggleComleted={this.toggleCompleted}/>


</>
    )
  }
}

 export default App;

