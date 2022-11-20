import React from "react";

export const Container: React.FC<any> = ({ children }) => {
    return(
        <div className="container">
            {children}
        </div>
    )
}
