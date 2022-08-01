import { useStyles } from "./styles"
// import Filter from "./filter"
const ToDoEditorForm=({value,onChange,onSubmit,})=>{
const styles = useStyles()
return <form className={styles.form} onSubmit={onSubmit}>
<textarea value={value} onChange={onChange}></textarea>
<button
type='submit'>add</button>
{/* <Filter/> */}
</form>

}

export default ToDoEditorForm