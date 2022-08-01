import React from "react";
import {useStyles}from './styles'
const ToDoList =({todos,onDeleteToDo,onToggleComleted})=>{
const styles = useStyles()

    return <ul className={styles.todolist}>
        {todos.map(({id,text,completed})=><li key={id} className={styles.todoList__items}>
            <input type="checkbox" checked={completed} onChange={()=>onToggleComleted(id)}></input>
            <p className={styles.items__text}>{text}</p>
            <button onClick={()=>onDeleteToDo(id)}>delate</button>
            </li>)}
            </ul>
}


export default ToDoList;