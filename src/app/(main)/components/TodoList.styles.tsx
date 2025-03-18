import styled, { keyframes } from "styled-components";

export const Container = styled.div`
    position: relative;
    max-width: 30rem;
    width: 100%;
    min-height: 100vh;
    margin: auto;
    padding: 2rem 1rem;
    padding-bottom: 6rem;
    background-color: #fff;
    border-left: 1px solid #eee;
    border-right: 1px solid #eee;
`;

export const Title = styled.h1`
    text-align: center;
    color: #333;
    padding: 1rem 0 2rem 0;
    font-family: 'Montserrat', sans-serif;
`;

export const SortBtnList = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const SortBtnWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SortBtnLabel = styled.label`
    font-size: 0.7rem;
    font-weight: 600;
`;

export const SwitchBtnWrap = styled.div<{ checked: boolean }>`
    position: relative;
    margin: 0 1rem 0 1rem;
    width: 3rem;
    height: 1.5rem;
    border-radius: 1rem;
    border: none;
    cursor: pointer;
    background-color: ${({ checked }) => (checked ? "#212121" : "#BDBDBD")};
    transition: background-color 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const SwitchBtn = styled.button<{ checked: boolean }>`
    position: absolute;
    width: 1.2rem;
    height: 1.2rem;
    top: 0.15rem;
    left: ${({ checked }) => (checked ? "1.6rem" : "0.15rem")};
    border-radius: 1rem;
    border: none;
    background-color: ${({ checked }) => (checked ? "#FAFAFA" : "#757575")};
    cursor: pointer;
    transition: left 0.3s ease, background-color 0.3s ease;
`;

export const BtnContainer = styled.div`
    width: 50%;
    margin: 0 1rem 0 auto;

    @media (max-width: 640px) {
        width: 90%;
        margin: 0 5%;
    }
`;

export const BtnWrap = styled.div`
    width: 100%;
    height: 2rem;
    background-color: #f3f2f1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    border: none;
    gap: 0.5%;
`;
export const Btn = styled.button<{ checked: boolean }>`
    font-family: 'Montserrat', sans-serif;
    font-size: 0.7rem;
    font-weight: 500;
    width: calc(33% - 0.1rem);
    height: 1.7rem;
    border-radius: 0.5rem;
    border: none;
    color: black;
    background: ${({ checked }) => 
        checked ? "var(--main-color)" : "transparent"};
    cursor: pointer;
    transition: background 0.5s ease, color 0.5s ease;
    color: ${({ checked }) => 
        checked ? "white" : "gray"};
`;

export const TodoList = styled.ul`
    list-style: none;
    font-size: 1rem;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;