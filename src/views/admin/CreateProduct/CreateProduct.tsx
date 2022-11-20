import React  from 'react'
import {FormInput} from "../../../components/inputs/FormInput";
import {Container} from "../../../components/container/Container";
import {useCreateProductHook} from "../../../hooks/useCreateProduct";


export const CreateProduct:React.FC = ()  => {
    const { formFields,handleFormChange, handleCancel, submit, addFields, removeFields}= useCreateProductHook();

    return (
        <Container>
        <div className="mt-16 mx-auto max-w-4xl w-full flex flex-col items-center">
            <p className="mb-8 font-GoogleSansBold text-[18px] text-appBlack font-[700]">Configure Product</p>
            <form onSubmit={submit}>
                {
                    formFields.map((item: any, index: number) => {
                        return(
                            <div
                                key={index}
                                className="grid gap-4  mb-6 lg:grid-cols-3 mb-6 rounded-sm border-b border-lightGrey	pb-4">
                                <FormInput
                                    name="name"
                                    labelName="Name"
                                    placeholder="Specify product name"
                                    onChange={event => handleFormChange(event, index)}
                                />
                                <FormInput
                                    name="price"
                                    labelName="Price"
                                    placeholder="Specify product price"
                                    onChange={event => handleFormChange(event, index)}
                                />
                                <FormInput
                                    name="weight"
                                    labelName="Weight"
                                    placeholder="Weight"
                                    onChange={event => handleFormChange(event, index)}
                                />
                                <FormInput
                                    name="startDate"
                                    labelName="Start Date"
                                    placeholder="Start Date"
                                    onChange={event => handleFormChange(event, index)}
                                />
                                <FormInput
                                    name="endDate"
                                    labelName="End Date"
                                    placeholder="End Date"
                                    onChange={event => handleFormChange(event, index)}
                                />
                                <div className="flex flex-row  items-start justify-center">
                                    <button
                                        onClick={() => removeFields(index)}
                                        className=" text-white bg-oziRed hover:opacity-70  font-medium rounded-lg text-sm  px-5 py-2.5 text-center ">
                                        Remove
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }

            <div>
                <div className="flex items-start justify-center">
                    <button
                        onClick={addFields}
                        className="text-appBlack text-[16px] font-GoogleSansRegular font-[400] focus:outline-none  text-center">
                        + Add more
                    </button>
                </div>
            </div>
            <div className="flex justify-end mb-8 mt-5">
                <button
                    onClick={() => handleCancel()}
                    className="mr-4 w-150 text-appBlack bg-transparent hover:opacity-80	 focus:ring-4 font-medium rounded-lg text-sm  px-5 py-2.5 text-center ">
                    Cancel
                </button>
                <button
                    type="submit"
                    onClick={submit}
                    className="w-150 text-white bg-appBlack hover:opacity-70  font-medium rounded-lg text-sm  px-5 py-2.5 text-center ">
                    Add
                </button>
            </div>
        </form>
        </div>
        </Container>
    )
}
