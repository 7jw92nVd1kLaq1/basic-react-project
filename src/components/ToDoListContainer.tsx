import React from "react";
import { ToDoListItem } from "./ToDoListItem";
import { ToDoListForm } from "./ToDoListForm";
import { ToDo } from "../types/ToDoListsTypes";


type ToDoListContainerProps = {
    todos: Array<ToDo>;
    setTodos: React.Dispatch<React.SetStateAction<ToDo[]>>;
    setOpenModal: (id: number) => void;
};

export const ToDoListContainer : React.FC<ToDoListContainerProps> = ({todos, setTodos, setOpenModal}) => {
    const [showForm, setShowForm] = React.useState<boolean>(false);

    const handleAddButtonClick = () : void => {
        setShowForm(status => !status);
    };

    const handleDeleteAllClick = () : void => {
        setTodos([]);
    };

    return (
        <div>
            <div id="todo-list-button-container">
                <button className="add-button" onClick={handleAddButtonClick}>Add To-Do</button>
                <button id="delete-all-button" onClick={handleDeleteAllClick}>Delete All</button>
            </div>
            <ToDoListForm showForm={showForm} setTodos={setTodos} />
            <div id="todo-list">
                {todos.map((todo: ToDo, index: number) => {
                    return (
                        <ToDoListItem 
                            key={index} 
                            id={index}
                            title={todo.title} 
                            completed={todo.completed} 
                            setTodos={setTodos} 
                            openModal={setOpenModal}
                        />
                    );
                })}
            </div>
        </div>
    );
};