import React from "react";
import dayjs from "dayjs";
import "dayjs/locale/ko";

dayjs.locale("ko");

import * as s from "./TodayStats.styles";

interface TodayStatsProps {
    todos: {
        id: number;
        title: string;
        completed: boolean;
        dueDate: string;
    }[];
}

export default function TodayStats({ todos }: TodayStatsProps) {
    const todayTodos = todos.filter((todo) => todo.dueDate === dayjs().format("YYYY-MM-DD"));
    const completedTodos = todayTodos.filter((todo) => todo.completed);

    const totalCount = todayTodos.length;
    const completedCount = completedTodos.length;
    const completionRate = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

    return (
        <s.TodayStatsWrap>
            <s.ToDayLabel>
                Today<s.TodaySpan>{dayjs().format("MM-DD dddd")}</s.TodaySpan>
            </s.ToDayLabel>
            <s.TodayStats>
                <s.TodayStatsItem>
                    <s.TodayStatsValue>{totalCount - completedCount}</s.TodayStatsValue>
                    <s.TodayStatsLabel>Pending tasks</s.TodayStatsLabel>
                </s.TodayStatsItem>
                <s.TodayStatsItem>
                    <s.TodayStatsValue>{totalCount} </s.TodayStatsValue>
                    <s.TodayStatsLabel>Tasks</s.TodayStatsLabel>
                </s.TodayStatsItem>
            </s.TodayStats>
            <s.TodayStatsPercent>
                <s.Progress>
                    <s.ProgressSvg viewBox="0 0 36 36">
                        <s.ProgressBg cx="18" cy="18" r="15.9155" />
                        <s.ProgressFg cx="18" cy="18" r="15.9155" strokeDasharray={`${completionRate}, 100`} />
                    </s.ProgressSvg>
                    <s.ProgressText>{completionRate}%</s.ProgressText>
                </s.Progress>
            </s.TodayStatsPercent>
        </s.TodayStatsWrap>
    );
}
