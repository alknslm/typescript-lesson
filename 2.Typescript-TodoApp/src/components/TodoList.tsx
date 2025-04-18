import React from 'react'
import Todo from './Todo'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { TodoType } from '../types/Types'

function TodoList() {

    const { todos } = useSelector((state: RootState) => state.todo) // aslında reducera ordan slice'a ordan initialState'e erişim sağlamış oluyor

    return (
        <div>
            {todos && todos.map((todo: TodoType) => (
                <Todo key={todo.id} todoProps={todo} />
            ))}
        </div>
    )
}

export default TodoList