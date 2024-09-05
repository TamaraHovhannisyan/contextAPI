import { useState } from "react"
import { AddToDo } from "./AddToDo"
import { List } from "./List"
import { FilterToDo } from "./FilterToDo"
import { userContext } from "../Context"
import { ToDoItem } from "./ToDoItem"


export const ToDoList = () => {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Learn HTML', isCompleted: false },
        { id: 2, text: 'Learn CSS', isCompleted: true },
        { id: 3, text: 'Learn JavaScript', isCompleted: false },
    ])

    const [curretnFilter, setCurrentFilter] = useState('All')


    const handleUpdate = id => {
        setTodos(todos.map(todo =>
            todo.id != id ? todo : { ...todo, isCompleted: !todo.isCompleted }
        ))
    }

    const onAdd = text => {
        setTodos([...todos, { text, isCompleted: false, id: Date.now() }])
    }

    const onDelete = id => {
        setTodos(todos.filter(todo => todo.id != id))
    }

    return <>

    <userContext.Provider 
    value={{onAdd, curretnFilter, onSet: setCurrentFilter, onDelete, handleUpdate, todos, setTodos}}>
        <AddToDo
        />
        <FilterToDo
        />
        <List
        />
        

    </userContext.Provider>
    </>
}