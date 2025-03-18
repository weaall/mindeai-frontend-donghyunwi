"use client";

import React, { useState, useEffect } from "react";
import dayjs from "dayjs";

import UpcomingTodos from "./sorted-list/UpcomingTodos";
import TodayTodos from "./sorted-list/TodayTodos";
import PastTodos from "./sorted-list/PastTodos";
import TodayStats from "./today-stasts/TodayStats";

import AddTaskModal from "./add-task-modal/AddTask.modal";

import * as s from "./TodoList.styles";

interface Todo {
    id: number;
    title: string;
    completed: boolean;
    dueDate: string;
}

export default function TodoList() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [newTodo, setNewTodo] = useState<string>("");
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [dueDate, setDueDate] = useState<string>("");
    const [expandedTodoId, setExpandedTodoId] = useState<number | null>(null);

    const [showToday, setShowToday] = useState<boolean>(true);
    const [showUpcoming, setShowUpcoming] = useState<boolean>(false);
    const [showPast, setShowPast] = useState<boolean>(false);

    useEffect(() => {
        const fetchTodos = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
            const data = await response.json();

            const todosWithDates = data.map((todo: Todo) => ({
                ...todo,
                dueDate: dayjs().format("YYYY-MM-DD"),
            }));

            setTodos(todosWithDates);
        };

        const savedTodos = localStorage.getItem("todos");
        if (savedTodos) {
            setTodos(JSON.parse(savedTodos));
        } else {
            fetchTodos();
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const handleTodayClick = () => {
        setShowToday(true);
        setShowUpcoming(false);
        setShowPast(false);
    };

    const handleUpcomingClick = () => {
        setShowToday(false);
        setShowUpcoming(true);
        setShowPast(false);
    };

    const handlePastClick = () => {
        setShowToday(false);
        setShowUpcoming(false);
        setShowPast(true);
    };

    const addTodo = () => {
        if (newTodo.trim()) {
            const newTodoItem: Todo = {
                id: Date.now(),
                title: newTodo.trim(),
                completed: false,
                dueDate: dayjs(dueDate).format("YYYY-MM-DD"),
            };
            setTodos([...todos, newTodoItem]);
            setNewTodo("");
            setDueDate("");
            setIsModalOpen(false);
        }
    };

    const toggleComplete = (id: number) => {
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
    };

    const deleteTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const toggleExpand = (id: number) => {
        setExpandedTodoId(expandedTodoId === id ? null : id);
    };

    const updateTodo = (id: number, title: string, dueDate: string) => {
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, title, dueDate } : todo)));
    };

    const todayTodos = todos.filter((todo) => todo.dueDate === dayjs().format("YYYY-MM-DD"));
    const upcomingTodos = todos
        .filter((todo) => todo.dueDate > dayjs().format("YYYY-MM-DD"))
        .sort((a, b) => dayjs(a.dueDate).diff(dayjs(b.dueDate)));
    const pastTodos = todos.filter((todo) => todo.dueDate < dayjs().format("YYYY-MM-DD"));

    return (
        <s.Container>
            <s.Title>Todo</s.Title>

            <s.BtnContainer>
                <s.BtnWrap>
                    <s.Btn onClick={handleTodayClick} checked={showToday}>
                        Today
                    </s.Btn>
                    <s.Btn onClick={handleUpcomingClick} checked={showUpcoming}>
                        Upcoming
                    </s.Btn>
                    <s.Btn onClick={handlePastClick} checked={showPast}>
                        Past
                    </s.Btn>
                </s.BtnWrap>
            </s.BtnContainer>

            <TodayStats todos={todos} />

            <s.TodoList>
                {showToday && (
                    <TodayTodos
                        todos={todayTodos}
                        expandedTodoId={expandedTodoId}
                        toggleComplete={toggleComplete}
                        deleteTodo={deleteTodo}
                        toggleExpand={toggleExpand}
                        updateTodo={updateTodo}
                    />
                )}
                {showUpcoming && (
                    <UpcomingTodos
                        todos={upcomingTodos}
                        expandedTodoId={expandedTodoId}
                        toggleComplete={toggleComplete}
                        deleteTodo={deleteTodo}
                        toggleExpand={toggleExpand}
                        updateTodo={updateTodo}
                    />
                )}
                {showPast && (
                    <PastTodos
                        todos={pastTodos}
                        expandedTodoId={expandedTodoId}
                        toggleComplete={toggleComplete}
                        deleteTodo={deleteTodo}
                        toggleExpand={toggleExpand}
                        updateTodo={updateTodo}
                    />
                )}
            </s.TodoList>

            <s.FloatingBtn onClick={() => setIsModalOpen(true)}>
                <s.FloatingSvg alt="" src={"../../../assets/svg/plus.svg"} />
            </s.FloatingBtn>

            {isModalOpen && (
                <AddTaskModal
                    newTodo={newTodo}
                    setNewTodo={setNewTodo}
                    dueDate={dueDate}
                    setDueDate={setDueDate}
                    addTodo={addTodo}
                    closeModal={() => setIsModalOpen(false)}
                />
            )}
        </s.Container>
    );
}
