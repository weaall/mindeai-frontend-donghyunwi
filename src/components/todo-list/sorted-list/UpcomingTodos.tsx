import React, { useState } from "react";
import EditTaskModal from "../edit-task-modal/EditTask.modal";
import ConfirmDeleteModal from "../confirm-delete-modal/ConfirmDelete.modal";
import * as s from "./Todo.styles";

interface UpcomingTodosProps {
    todos: {
        id: number;
        title: string;
        completed: boolean;
        dueDate: string;
    }[];
    expandedTodoId: number | null;
    toggleComplete: (id: number) => void;
    deleteTodo: (id: number) => void;
    toggleExpand: (id: number) => void;
    updateTodo: (id: number, title: string, dueDate: string) => void;
}

export default function UpcomingTodos({ todos, expandedTodoId, toggleComplete, deleteTodo, toggleExpand, updateTodo }: UpcomingTodosProps) {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [currentTodo, setCurrentTodo] = useState({ id: 0, title: "", dueDate: "" });

    const handleEditClick = (todo: { id: number; title: string; dueDate: string }) => {
        setCurrentTodo(todo);
        setIsEditModalOpen(true);
    };

    const handleDeleteClick = (todo: { id: number; title: string; dueDate: string }) => {
        setCurrentTodo(todo);
        setIsDeleteModalOpen(true);
    };

    const handleUpdateTodo = () => {
        updateTodo(currentTodo.id, currentTodo.title, currentTodo.dueDate);
        setIsEditModalOpen(false);
    };

    const handleConfirmDelete = () => {
        deleteTodo(currentTodo.id);
        setIsDeleteModalOpen(false);
    };

    return (
        <>
            <s.TodoLabel>Upcoming</s.TodoLabel>
            {todos.length === 0 ? (
                <s.NoTodosMessage>해야할 일이 없어요.</s.NoTodosMessage>
            ) : (
                todos.map((todo) => (
                    <s.TodoWrap
                        key={todo.id}
                        completed={todo.completed}
                        expanded={expandedTodoId === todo.id}
                        onClick={() => toggleExpand(todo.id)}
                    >
                        <s.FlexWrap>
                            <s.ToggleBtnWrap>
                                <s.ToggleBtn
                                    completed={todo.completed}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        toggleComplete(todo.id);
                                    }}
                                />
                            </s.ToggleBtnWrap>
                            <s.InnerWrap>
                                <s.DueDate>{todo.dueDate}</s.DueDate>
                                <s.TodoTitle expanded={expandedTodoId === todo.id}>{todo.title}</s.TodoTitle>
                            </s.InnerWrap>
                            <s.MoreBtnWrap>
                                <s.MoreBtnSvg alt="" src={"../../../assets/svg/arrow_down.svg"} expanded={expandedTodoId === todo.id} />
                            </s.MoreBtnWrap>
                        </s.FlexWrap>

                        <s.ExtraWrap expanded={expandedTodoId === todo.id}>
                            {expandedTodoId === todo.id && (
                                <>
                                    <s.ChangeBtn
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleEditClick(todo);
                                        }}
                                    >
                                        수정
                                    </s.ChangeBtn>
                                    <s.RemoveBtn
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleDeleteClick(todo);
                                        }}
                                    >
                                        삭제
                                    </s.RemoveBtn>
                                </>
                            )}
                        </s.ExtraWrap>
                    </s.TodoWrap>
                ))
            )}

            {isEditModalOpen && (
                <EditTaskModal
                    currentTodo={currentTodo.title}
                    setCurrentTodo={(title) => setCurrentTodo((prev) => ({ ...prev, title }))}
                    currentDueDate={currentTodo.dueDate}
                    setCurrentDueDate={(dueDate) => setCurrentTodo((prev) => ({ ...prev, dueDate }))}
                    updateTodo={handleUpdateTodo}
                    closeModal={() => setIsEditModalOpen(false)}
                />
            )}

            {isDeleteModalOpen && (
                <ConfirmDeleteModal
                    todoTitle={currentTodo.title}
                    confirmDelete={handleConfirmDelete}
                    closeModal={() => setIsDeleteModalOpen(false)}
                />
            )}
        </>
    );
}