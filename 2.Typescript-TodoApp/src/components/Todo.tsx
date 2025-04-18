import React from 'react'
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { TodoType } from '../types/Types';
import { removeTodoById } from '../redux/todoSlice';
import { useDispatch } from 'react-redux';

interface TodoProps {
    todoProps: TodoType
}



function Todo({ todoProps }: TodoProps) {
    const { id, content } = todoProps;

    const dispatch = useDispatch();

    const handleRemoveTodo = () => {
        dispatch(removeTodoById(id));
    }

    return (
        <div style={{
            display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
            border: '1px solid lightgray', padding: '16px', marginTop: '25px', borderRadius: '5px'
        }}>
            <div> {content} </div>
            <div>
                <IoMdRemoveCircleOutline onClick={handleRemoveTodo} className='icons' style={{ marginRight: '5px' }} />
                <FaRegEdit className='icons' />
            </div>
        </div>
    )
}

export default Todo