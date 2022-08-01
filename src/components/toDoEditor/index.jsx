import React,{Component} from "react";
import ToDoEditorForm from './toDoEditorForm'


class ToDoEditor extends Component{

    state={
    message:''
}

hendleChange=e=>{
    this.setState({message:e.currentTarget.value})
}
hendleSubmit=e=>{
    e.preventDefault()

    this.props.onSubmit(this.state.message)
    this.setState({message:''})
}



render(){
return (
<ToDoEditorForm 
value={this.state.message} 
onChange={this.hendleChange}
onSubmit={this.hendleSubmit}
/>
    

)

}}







export default ToDoEditor;