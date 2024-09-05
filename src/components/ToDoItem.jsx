import { useContext } from "react"
import { userContext } from "../Context"

export const ToDoItem = ({todo}) => {
    const { handleUpdate, onDelete } = useContext(userContext)
    return <div className={"todo " + (todo.isCompleted ? 'done' : '')}>

        <p>{todo.text}</p>
        <button onClick={() => onDelete(todo.id)}>Delete</button>
        <button onClick={() => handleUpdate(todo.id)}>{todo.isCompleted ? 'Cancel' : 'Complete'}</button>

    </div>
}