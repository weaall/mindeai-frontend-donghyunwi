import React, { useEffect, useState } from "react";
import * as s from "./ConfirmDelete.modal.styles";

interface ConfirmDeleteModalProps {
    todoTitle: string;
    confirmDelete: () => void;
    closeModal: () => void;
}

export default function ConfirmDeleteModal({ todoTitle, confirmDelete, closeModal }: ConfirmDeleteModalProps) {
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

    const handleConfirmDelete = () => {
        confirmDelete();
        handleClose();
    };

    return (
        <s.Modal className={isVisible ? "show" : ""}>
            <s.ModalContent>
                <s.Title>정말로 삭제 하시겠습니까?</s.Title>
                <s.BtnWrap>
                    <s.CancelBtn onClick={handleClose}>취소</s.CancelBtn>
                    <s.ConfirmBtn onClick={handleConfirmDelete}>확인</s.ConfirmBtn>
                </s.BtnWrap>
            </s.ModalContent>
        </s.Modal>
    );
}
