import React from "react";
import {Link} from "react-router-dom";
import AppIcon from "../../../assets/icons/appLogo.png";

export const AppLogo: React.FC = () => {
    return(
        <div className="flex justify-start ">
            <Link to="/">
                <img
                    className="h-8 w-auto sm:h-10"
                    src={AppIcon}
                    alt=""
                />
            </Link>
        </div>
    )
}
