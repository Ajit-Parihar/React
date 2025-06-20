import {createContext, useContext} from 'react'

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            message: "first doto",
            completed: false
        }
       ],
       addTodo: (message)=>{},
       updateTodo: (id, message)=>{},
       deleteTodo: (id)=>{},
       completedTodo: (id)=>{}
})

export const useTodo=()=>{
    return useContext(TodoContext)
}

const TodoContextProvider = TodoContext.Provider
export default TodoContextProvider