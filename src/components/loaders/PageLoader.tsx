import React from "react";

export const PageLoader  =() => {
    return(
        <div className="flex flex-col justify-center items-center min-h-[50%]			">
            <div className="flex space-x-1 mt-3  rounded-full justify-center items-center">
                <div className="bg-appBlack  w-2 h-2 rounded-full animate-pulse blue-circle"/>
                <div className="bg-appBlack  w-2 h-2 rounded-full animate-pulse green-circle"/>
                <div className="bg-appBlack  w-2 h-2 rounded-full animate-pulse red-circle"/>
            </div>
        </div>
    )
}
