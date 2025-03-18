import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import CustomDatePicker from "../../date-picker/DatePicker";
import * as s from "./AddTask.modal.styles";

interface AddTaskModalProps {
    newTodo: string;
    setNewTodo: (value: string) => void;
    dueDate: string;
    setDueDate: (value: string) => void;
    addTodo: () => void;
    closeModal: () => void;
}

export default function AddTaskModal({ newTodo, setNewTodo, dueDate, setDueDate, addTodo, closeModal }: AddTaskModalProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        document.documentElement.style.overflow = "hidden";
        setIsVisible(true);

        return () => {
            document.documentElement.style.overflow = "auto";
        };
    }, []);

    useEffect(() => {
        setDueDate(dayjs().format("YYYY-MM-DD"));
    }, [setDueDate]);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(() => {
            setNewTodo("");
            setDueDate(dayjs().format("YYYY-MM-DD"));
            closeModal();
        }, 500);
    };

    return (
        <s.Modal className={isVisible ? "show" : ""}>
            <s.ModalContent>
                <s.Title>What To Do?</s.Title>
                <CustomDatePicker
                    selectedDate={dueDate ? new Date(dueDate) : new Date()}
                    onChange={(date: Date | null) => {
                        if (date) {
                            setDueDate(dayjs(date).format("YYYY-MM-DD"));
                        }
                    }}
                />
                <s.TaskInput
                    type="text"
                    maxLength={40}
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="할 일을 입력해주세요."
                />
                <s.TaskLength>{newTodo.length} / 40</s.TaskLength>
                <s.BtnWrap>
                    <s.CancelBtn onClick={handleClose}>취소</s.CancelBtn>
                    <s.ConfirmBtn onClick={addTodo}>확인</s.ConfirmBtn>
                </s.BtnWrap>
            </s.ModalContent>
        </s.Modal>
    );
}