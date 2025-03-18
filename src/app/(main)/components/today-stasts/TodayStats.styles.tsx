import styled from "styled-components";

export const TodayStatsWrap = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem 0 1rem 0;
    background: var(--main-color);
    padding: 2rem;
    border-radius: 2rem;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3), 0 6px 6px rgba(0, 0, 0, 0.2);
    position: relative;
    user-select: none;
    font-family: 'Montserrat', sans-serif;
`;

export const TodoLabel = styled.label`
    font-size: 1rem;
    font-weight: 500;
`;

export const ToDayLabel = styled.label`
    font-size: 1.5rem;
    font-weight: 500;
    color: white;
    position: absolute;
    top: 1.2rem;
    left: 1.8rem;
`;

export const TodaySpan = styled.span`
    font-size: 0.8rem;
    font-weight: 400;
    color: white;
    margin-left: 0.5rem;
`;

export const TodayStats = styled.div`
    display: flex;
    align-items: center;
    margin-top: 2rem;
`;

export const TodayStatsItem = styled.div`
    display: flex;
    width: 50%;
    flex-direction: column;
    align-items: start;
    color: white;
`;

export const TodayStatsPercent = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.8rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    color: white;
`;

export const TodayStatsLabel = styled.span`
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.8);
`;

export const TodayStatsValue = styled.span`
    font-size: 1.2rem;
    font-weight: bold;
    color: white;
`;

export const Progress = styled.div`
    position: relative;
    width: 3rem;
    height: 3rem;
`;

export const ProgressSvg = styled.svg`
    width: 100%;
    height: 100%;
    transform: rotate(-90deg);
`;

export const ProgressBg = styled.circle`
    fill: none;
    stroke: rgba(255, 255, 255, 0.5);
    stroke-width: 3;
`;

export const ProgressFg = styled.circle`
    fill: none;
    stroke: white;
    stroke-width: 3;
    stroke-linecap: round;
    transition: stroke-dasharray 0.3s ease-in-out;
`;

export const ProgressText = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 0.7rem;
    font-weight: 500;
    color: white;
`;