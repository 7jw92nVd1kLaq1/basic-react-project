import React from "react";
import { ToDo } from "../types/ToDoListsTypes";


type ToDoListFormProps = {
    showForm: boolean;
    setTodos: React.Dispatch<React.SetStateAction<ToDo[]>>;
};

export const ToDoListForm : React.FC<ToDoListFormProps> = ({showForm, setTodos}) => {
    const [title, setTitle] = React.useState<string>("");

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (title.trim() === "") {
            return;
        }
        setTodos((prevTodos: Array<ToDo>) => {
            return [
                ...prevTodos,
                {
                    title: title,
                    completed: false
                }
            ];
        });
    };

    if (!showForm) {
        return null;
    }
    return (
        <div 
            id="todo-list-add-form" 
            className="input-container"
        >
            <input
                placeholder="Enter text"
                className="input-field"
                type="text"
                onInput={handleTitleChange}
                value={title}
            />
            <button 
                className="add-button" 
                onClick={handleSubmit}
                style={{width: "fit-content"}}
            >
                Add
            </button>
        </div>
    )
};