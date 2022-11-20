import React, { ChangeEvent } from "react";

interface IFormInputProps {
    onChange: (event:ChangeEvent<HTMLInputElement>) => void,
    name: string,
    labelName: string,
    placeholder: string,
    className?: string,
    type?: string,
    id?: string,
    htmlFor?: string,
    isRequired?: boolean
}

export const FormInput: React.FC<IFormInputProps> = (props) => {
    const {onChange, name, type = 'text', id, htmlFor, labelName, placeholder, isRequired, className} = props;
    return(
        <div className={`mr-0 md:mr-4 ${className}`}>
            <label htmlFor={htmlFor}
                   className="font-[400] pl-4 block mb-2 text-sm font-GoogleSansRegular text-black text-[16px]">
                {labelName}
            </label>
            <input type={type}
                   id={id}
                   name={name}
                   onChange={onChange}
                   className="w-full lg:w-64 placeholder-lightGrey  bg-transparent border border-oziLightGrey text-gray-900 text-sm rounded-md focus:ring-oziLightGrey focus:border-oziLightGrey p-2.5 "
                   placeholder={placeholder}
                   required={isRequired} />
        </div>
    )
}
