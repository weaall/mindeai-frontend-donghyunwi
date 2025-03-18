import styled from "styled-components";

export const FloatingBtn = styled.button<{ color: string; hover: string }>`
    position: fixed;
    bottom: 2rem;
    right: calc(50% - 15rem + 1rem);
    width: 3.5rem;
    height: 3.5rem;
    background-color: ${({ color }) => color};
    color: white;
    border: none;
    border-radius: 50%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    z-index: 2;
    transition: opacity 0.3s ease;

    &:hover {
        background-color: ${({ hover }) => hover};
    }

    @media (max-width: 640px) {
        right: 1.5rem;
        bottom: 1.5rem;

        &:hover {
            background-color: ${({ color }) => color};
        }
    }
`;

export const FloatingSvg = styled.img`
    height: 2rem;
    width: 2rem;
`;
