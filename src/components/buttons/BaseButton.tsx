import React from "react";

export const AppButton = (props: any) => {
    const {onClick, className, text, variant, } = props;
    return(
        <button
            onClick={onClick}
            className={`baseButton button-${variant} ${className}`}
        >
            {text}
        </button>
    )
}
