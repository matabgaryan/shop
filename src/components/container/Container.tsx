import React from "react";
import './styles/container.scss';

export const Container: React.FC<any> = ({ children }) => {
    return(
        <div className="container">
            {children}
        </div>
    )
}
