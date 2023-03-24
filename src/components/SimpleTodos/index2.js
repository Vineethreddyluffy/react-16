import './index.css'

const GetTodo = props => {
  const {item, onDelete} = props
  const {title, id} = item
  const onClickDelete = () => {
    onDelete(id)
  }
  return (
    <li className="card">
      <p className="subhead">{title}</p>
      <button type="button" className="button" onClick={onClickDelete}>
        Delete
      </button>
    </li>
  )
}
export default GetTodo
