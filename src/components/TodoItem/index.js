// Write your code here
import './index.css'

const TodoItem = props => {
  const {tododetails, DeleteItem} = props
  const {title, id} = tododetails
  const onDeleteItem = () => {
    DeleteItem(id)
  }
  return (
    <div className="itemContainer">
      <p>{title}</p>
      <button type="button" onClick={onDeleteItem}>
        Delete
      </button>
    </div>
  )
}

export default TodoItem
