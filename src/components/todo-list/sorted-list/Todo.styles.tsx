import styled from "styled-components";

export const TodayWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    position: relative;
    color: black;
`;

export const TodoLabel = styled.label`
    font-size: 1rem;
    font-weight: 600;
    margin: 0.5rem 0 1rem 0;
    font-family: 'Montserrat', sans-serif;
`;

export const NoTodosMessage = styled.div`
    display: flex;
    width: 100%;
    height: 12rem;
    justify-content: center;
    align-items: center;
`

export const TodoWrap = styled.li<{ completed: boolean; expanded: boolean }>`
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 1rem 1rem 1rem;
    background: white;
    transition: height 0.5s ease, border 0.5s ease;
    height: ${({ expanded }) => (expanded ? "9rem" : "4rem")};
    overflow: hidden;
    border: ${({ completed }) => (completed ? "2px solid #0070f3;" : "2px solid transparent")};
    border-radius: 28px;
    gap: 0.5rem;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    color: black;

    @media (max-width: 640px) {
        height: ${({ expanded }) => (expanded ? "10rem" : "4rem")};
    }
`;

export const FlexWrap = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ToggleBtnWrap = styled.div`
    height: 4rem;
    width: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ToggleBtn = styled.button<{ completed: boolean }>`
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    border: 2px solid ${({ completed }) => (completed ? "#0070f3" : "#ddd")};
    background-color: ${({ completed }) => (completed ? "#0070f3" : "transparent")};
    cursor: pointer;
    margin-right: 10px;
    flex-shrink: 0;

    &:hover {
        border-color: #0070f3;
    }

    @media (max-width: 640px) {
        &:hover {
            border-color: #ddd;
        }
    }
`;

export const InnerWrap = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    padding: 0.5rem 1rem;
    gap: 0.3rem;
`;

export const TodoTitle = styled.span<{ expanded: boolean }>`
    max-width: 19rem;
    font-size: 0.9rem;
    font-weight: 500;
    flex: 1;
    overflow: hidden;
    white-space: ${({ expanded }) => (expanded ? "normal" : "nowrap")};
    text-overflow: ellipsis;
    transition: white-space 0.3s ease;

    @media (max-width: 640px) {
        max-width: 13rem;
    }
`;

export const DueDate = styled.p`
    font-size: 0.7rem;
    color: gray;
`;

export const MoreBtnWrap = styled.div`
    height: 4rem;
    width: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const MoreBtnSvg = styled.img<{ expanded: boolean }>`
    height: 1.5rem;
    width: 1.5rem;
    transition: transform 0.3s ease; /* Smooth transition for rotation */
    transform: ${({ expanded }) => (expanded ? "rotate(180deg)" : "rotate(0deg)")};
`;

export const ExtraWrap = styled.div<{ expanded: boolean }>`
    display: flex;
    justify-content: flex-end;
    opacity: ${({ expanded }) => (expanded ? 1 : 0)};
    transition: opacity 0.3s ease-in-out, max-height 0.3s ease-in-out;
    max-height: ${({ expanded }) => (expanded ? "100px" : "0")};
    overflow: hidden;

    @media (max-width: 640px) {
        width: 100%;
    }
`;

export const ChangeBtn = styled.button`
    font-weight: 600;
    margin-left: 0.25rem;
    margin-right: 0.25rem;
    font-size: 0.8rem;
    font-weight: 600;
    padding: 0.5rem 1rem;
    border-radius: 0.75rem;
    background-color: #f4f5f6;
    color: black;
    border: 0.5px solid #f4f5f6;
    cursor: pointer;
    width: 50%;

    &:hover {
        background-color: #eeeeee;
    }

    @media (max-width: 640px) {
        width: 50%;
        &:hover {
            background-color: #f3f4f6;
        }
    }
`;

export const RemoveBtn = styled.button`
    margin-left: 0.25rem;
    margin-right: 0.25rem;
    font-size: 0.8rem;
    font-weight: 600;
    padding: 0.5rem 1rem;
    border-radius: 0.75rem;
    border: none;
    background: var(--main-color);
    color: white;
    cursor: pointer;
    width: 50%;

    &:hover {
        background: var(--main-color-hover);
        border: none;
    }

    @media (max-width: 640px) {
        width: 50%;
        &:hover {
            background: var(--main-color);
        }
    }
`;
