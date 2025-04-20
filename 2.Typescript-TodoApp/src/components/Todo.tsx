import React, { useState } from 'react'
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { TodoType } from '../types/Types';
import { removeTodoById, updateTodoById } from '../redux/todoSlice';
import { useDispatch } from 'react-redux';

interface TodoProps {
    todoProps: TodoType
}

function Todo({ todoProps }: TodoProps) {
    const { id, content } = todoProps;

    const dispatch = useDispatch();

    const [editable, setEditable] = useState<boolean>(false);
    const [newTodo, setNewTodo] = useState<string>(content);

    const handleUpdateTodo = () => {
        const payload: TodoType = {
            id: id,
            content: newTodo
        }
        dispatch(updateTodoById(payload));
        setEditable(false);
    }
    const handleRemoveTodo = () => {
        dispatch(removeTodoById(id));
    }

    return (
        <div style={{
            display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
            border: '1px solid lightgray', padding: '16px', marginTop: '25px', borderRadius: '5px'
        }}>
            {editable ? <input type="text" value={newTodo} style={{ width: '400px', border: 'none', borderBottom: '1px solid lightgray', outline: 'none' }}
                onChange={((e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value))} />
                : <div> {content} </div>}

            <div>
                <IoMdRemoveCircleOutline onClick={handleRemoveTodo} className='icons' style={{ marginRight: '5px' }} />
                {editable ? <FaCheck onClick={handleUpdateTodo} className='icons' /> : <FaRegEdit onClick={() => setEditable(true)} className='icons' />}
            </div>
        </div>
    )
}

export default Todo