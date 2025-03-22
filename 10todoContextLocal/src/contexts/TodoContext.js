import { createContext, useContext } from "react";

export const TodoContext = createContext({
    //Properties:
    todos: [
        {
            id: 1,
            todo: "Todo Message",
            completed: false,
        }
    ],
    //Functionality:
    addTodo: (todo) => {},
    updatedTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},
}) 


export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider