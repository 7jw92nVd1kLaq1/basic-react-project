import React from "react";


type ToDoModalProps = {
    show: boolean;
    title: string;
    description: string;
    closeModal: () => void;
};

export const ToDoModal : React.FC<ToDoModalProps> = ({show, title, description, closeModal}) => {
    if (!show) {
        return null;
    }
    return (
        <div 
            className="bg-black fixed w-screen h-screen z-50 flex justify-center items-center"
        >
            <div className="bg-white rounded-lg w-[500px] h-[500px] p-[20px] flex flex-col justify-between items-center gap-5">
                <div className="text-black w-full grow">
                    <h1 className="text-[32px] m-5">{title}</h1>
                    <p className="text-[20px] m-5">{description}</p>
                </div>
                <button className="bg-red-500 rounded-lg p-[20px] w-[30%]" onClick={closeModal}>Close</button>
            </div>
        </div>
    );
};