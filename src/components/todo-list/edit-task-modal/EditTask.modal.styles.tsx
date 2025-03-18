import styled from "styled-components";

export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.5s ease, visibility 0.5s ease;

    &.show {
        opacity: 1;
        visibility: visible;
    }
`;

export const ModalContent = styled.div`
    position: relative;
    background: white;
    padding: 1.8rem;
    border-radius: 2rem;
    width: 24rem;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transform: translateY(20px);
    transition: transform 0.5s ease;

    .show & {
        transform: translateY(0);
    }

    @media (max-width: 640px) {
        width: 100%;
        border-radius: 1rem 1rem 0 0;
        position: fixed;
        bottom: 0;
        transform: translateY(100%);
        .show & {
            transform: translateY(0);
        }
    }
`;

export const Title = styled.h3`
    padding: 0 0 1rem 0;
    margin: 0 auto;
`;

export const Input = styled.input`
    width: 100%;
    padding: 0.8rem 1rem;
    margin-bottom: 10px;
    border: 1px solid #dddddd;
    border-radius: 0.75rem;
    background-color: white;
    color: black;

    &:focus {
        outline: none;
        box-shadow: none;
    }
`;

export const TaskInput = styled.input`
    width: 100%;
    padding: 0.8rem 1rem;
    border: 1px solid #dddddd;
    border-radius: 0.75rem;
    background-color: white;
    color: black;

    &:focus {
        outline: none;
        box-shadow: none;
    }

    &::placeholder {
        color:rgb(224, 224, 224);
        font-size: 0.9rem;
        font-weight: 100;
    }
`;

export const TaskLength = styled.p`
    font-size: 0.7rem;
    color: gray;
    margin-left: auto;
    padding: 0.2rem 0.5rem 1rem 0;
`

export const BtnWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 0.5rem;
`;

export const CancelBtn = styled.button`
    width: 50%;
    margin-left: 0.25rem;
    margin-right: 0.25rem;
    font-size: 0.875rem;
    font-weight: 600;
    padding: 0.75rem 1.25rem;
    border-radius: 0.75rem;
    background-color: #f4f5f6;
    color: black;
    border: 1px solid #f4f5f6;
    cursor: pointer;

    &:hover {
        background-color:#eeeeee;
    }

    @media (max-width: 640px) {
        &:hover {
            background-color: #f3f4f6;
        }
    }
`;

export const ConfirmBtn = styled.button`
    width: 50%;
    margin-left: 0.25rem;
    margin-right: 0.25rem;
    font-size: 0.875rem;
    font-weight: 600;
    padding: 0.75rem 1.25rem;
    border-radius: 0.75rem;
    border: none;
    background: var(--main-color);
    color: white;
    cursor: pointer;

    &:hover {
        background: var(--main-color-hover);
        border: none;
    }

    @media (max-width: 640px) {
        &:hover {
            background: var(--main-color);
        }
    }
`;
