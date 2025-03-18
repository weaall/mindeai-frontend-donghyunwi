import React, { useEffect, useState } from "react";
import CustomDatePicker from "../../../common/date-picker/DatePicker";
import * as s from "./EditTask.modal.styles";

interface EditTaskModalProps {
    currentTodo: string;
    setCurrentTodo: (value: string) => void;
    currentDueDate: string;
    setCurrentDueDate: (value: string) => void;
    updateTodo: () => void;
    closeModal: () => void;
}

export default function EditTaskModal({
    currentTodo,
    setCurrentTodo,
    currentDueDate,
    setCurrentDueDate,
    updateTodo,
    closeModal,
}: EditTaskModalProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        document.documentElement.style.overflow = "hidden";
        setIsVisible(true);

        return () => {
            document.documentElement.style.overflow = "auto";
        };
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(closeModal, 500);
    };

    const handleUpdate = () => {
        updateTodo();
        handleClose();
    };

    return (
        <s.Modal className={isVisible ? "show" : ""}>
            <s.ModalContent>
                <s.Title>수정하기</s.Title>
                <CustomDatePicker
                    selectedDate={currentDueDate ? new Date(currentDueDate) : null}
                    onChange={(date: Date | null) => {
                        if (date) {
                            setCurrentDueDate(date.toISOString().split("T")[0]);
                        }
                    }}
                />
                <s.TaskInput
                    type="text"
                    maxLength={40}
                    value={currentTodo}
                    onChange={(e) => setCurrentTodo(e.target.value)}
                    placeholder="Edit task"
                />
                <s.TaskLength>{currentTodo.length} / 40</s.TaskLength>
                <s.BtnWrap>
                    <s.CancelBtn onClick={handleClose}>취소</s.CancelBtn>
                    <s.ConfirmBtn onClick={handleUpdate}>수정</s.ConfirmBtn>
                </s.BtnWrap>
            </s.ModalContent>
        </s.Modal>
    );
}
