import React from "react";

import * as s from "./FloatingButton.styles";

interface FloatingButtonProps {
    onClick: () => void;
    svgSrc: string;
    color: string;
    colorHover: string;
}

export default function FloatingButton({ onClick, svgSrc, color, colorHover }: FloatingButtonProps) {
    return (
        <s.FloatingBtn onClick={onClick} color={color} hover={colorHover}>
            <s.FloatingSvg alt="" src={svgSrc} />
        </s.FloatingBtn>
    );
}
