import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    todoList__items:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        padding:'20px',
        border:'1px solid black'
    },
    items__text:{
        marginTop:'0px',
        marginBottom:'0px',
        marginRight:'10px'
    },
    todolist:{
        width:'600px'
    }

})