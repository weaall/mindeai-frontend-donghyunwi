import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DatePicker.css";

interface CustomDatePickerProps {
    selectedDate: Date | null;
    onChange: (date: Date | null) => void;
}

export default function CustomDatePicker({ selectedDate, onChange }: CustomDatePickerProps) {
    return <DatePicker selected={selectedDate} onChange={onChange} dateFormat="yyyy-MM-dd" inline />;
}
