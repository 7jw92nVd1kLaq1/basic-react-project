import React from "react";
import { ToDo } from "../types/ToDoListsTypes";


type ToDoListItemProps = {
    id: number;
    title: string;
    completed: boolean;
    setTodos: React.Dispatch<React.SetStateAction<ToDo[]>>;
    openModal: (id: number) => void;
};

export const ToDoListItem : React.FC<ToDoListItemProps> = (
    { id, title, completed, setTodos, openModal }
) => {
    const handleCheckClick = () => {
        setTodos((prevTodos : Array<ToDo>) => {
            return prevTodos.map((todo, index) => {
                if (index === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    };
                }
                return todo;
            });
        });
    };

    const handleDeleteClick = () => {
        setTodos((prevTodos : Array<ToDo>) => {
            return prevTodos.filter((todo: ToDo, index: number) => index !== id);
        });
    }

    return (
        <div className="todo-item">
            <input 
                className="checkbox" 
                type="checkbox" 
                checked={completed} 
                onChange={handleCheckClick}
            />
            <h3 className="overflow-x-auto title" onClick={() => {openModal(id)}}>{title}</h3>
            <button onClick={handleDeleteClick} className="text-red-500">Delete</button>
        </div>
    );
};