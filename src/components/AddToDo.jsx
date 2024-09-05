import { useContext, useState } from "react"
import { userContext } from "../Context"

export const AddToDo = () => {
const {onAdd} = useContext(userContext)

    const [text, setText] = useState('')

    const handleSubmit = event => {
        event.preventDefault()
        if (!text.trim()) {
            return setError("Please enter valid text")
        }
        onAdd(text)
        setText('')
    }
    const [error, setError] = useState('')

    return <>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add ToDo"
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button>Submit</button>
            {error && <p className="error">{error}</p>}
        </form>
    </>
}