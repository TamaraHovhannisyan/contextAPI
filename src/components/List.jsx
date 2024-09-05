import { useContext } from "react"
import { ToDoItem } from "./ToDoItem"
import { userContext } from "../Context"

export const List = () => {
    const {curretnFilter, todos} = useContext(userContext)

    let filtered = todos

    if (curretnFilter == 'Active') {
        filtered = todos.filter(todo => !todo.isCompleted)
    } else if (curretnFilter == 'Completed') {
        filtered = todos.filter(todo => todo.isCompleted)
    } 

    
    return <>
        <p>showing: <strong>{curretnFilter}</strong></p>
        {
            filtered.map((todo) => {
                return <ToDoItem
                    key={todo.id}
                    todo={todo}
                
                />
            })
        }

    </>
}