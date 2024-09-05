import { useContext, useState } from "react"
import { userContext } from "../Context"

export const FilterToDo = () => {
    const { curretnFilter, onSet } = useContext(userContext)
    const list = ['All', "Completed", 'Active']

    return <>
        {
            list.map((criteria, i) =>
                <button key={i}
                    className={curretnFilter == criteria ? 'button-active' : null}
                    onClick={() => onSet(criteria)}
                >
                    {criteria}
                </button>
            )
        }
    </>
}