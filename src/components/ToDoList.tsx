import React from "react";
import { ToDoListContainer } from "./ToDoListContainer";
import { ToDo } from "../types/ToDoListsTypes";
import { ToDoModal } from "./ToDoModal";
import { Clock } from "./Clock";


export const ToDoList : React.FC = () => {
    const [ todos, setTodos ] = React.useState<Array<ToDo>>([
        {title: "Task 1", completed: false}, 
        {title: "Task 2", completed: false}
    ]);
    const [showModal, setShowModal] = React.useState<boolean>(false);
    const [currentToDo, setCurrentToDo] = React.useState<number>(0);

    const handlecloseModalClick = () : void => {
        setShowModal(false);
    };

    const handleOpenModalClick = (id: number) : void => {
        setCurrentToDo(id);
        setShowModal(true);
    };

    return (
        <div className="z-10">
            {
                !todos.length ? null : (
                    <ToDoModal 
                        show={showModal} 
                        closeModal={handlecloseModalClick}
                        title={todos[currentToDo].title}
                        description="This is a description"
                    />
                )
            }
            <h1 className="title pt-20">Your To-Do List</h1>
            <Clock />
            <ToDoListContainer 
                todos={todos} 
                setTodos={setTodos}
                setOpenModal={handleOpenModalClick}
            />
        </div>
    );
};