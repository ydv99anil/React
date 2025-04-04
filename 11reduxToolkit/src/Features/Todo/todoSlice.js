import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{
        id: 1, 
        text: "Hello Duniya"
    }]
}

//               For Method 1          \\
// function sayHello() {
//     console.log("Hello Duniya")
// }

// function removeTodo() {
//     console.log("All todos are removed")
// }

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        //  Method 1   \\
        // addTodo: sayHello,
        // removeTodo: removeTodo,

        // Method 2 \\
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action)  => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    }
})

export const { addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer