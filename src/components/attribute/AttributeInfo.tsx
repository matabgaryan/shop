import React from "react";

interface IAttributeInfo {
    attribute: string,
    value: string,
    valueClassName?: string
}

export const AttributeInfo: React.FC<IAttributeInfo> = ({attribute, value, valueClassName}) => {
    return (
        <div className="flex flex-row justify-between mb-1 items-center" >
            <div className="text-base font-light tracking-normal">
                {attribute}
            </div>
            <div className={`text-base font-regular font-light tracking-normal ${valueClassName}`}
            >
                {value}
            </div>
        </div>
    )
}
