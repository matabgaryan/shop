import React, {useState} from "react";
import {useAppDispatch} from "./useRedux";
import {generatedUuid} from "../core/utils/uuid";
import {addProducts} from "../store/slices/products";
import {IProduct} from "../store/slices/interface";
import {useNavigationHook} from "./useNavigation";
import {ROUTES} from "../configs/routes";

export const useCreateProductHook = () => {
    const dispatch = useAppDispatch();
    const { handleNavigate } = useNavigationHook();

    const [formFields, setFormFields] = useState<IProduct[]>([
        {id: generatedUuid(),  name: '', price: '', weight: 0, startDate: '', endDate: '', count: 0 },
    ])

    const handleFormChange = (event:  React.ChangeEvent<HTMLInputElement>, index: number) => {
        let data: any[] = [...formFields];
        data[index][event.target.name] = event.target.value;
        setFormFields(data);
    }

    const submit = (e:React.SyntheticEvent) => {
        e.preventDefault();
        dispatch(addProducts(formFields));
        handleNavigate(ROUTES.adminProducts);
    }

    const handleCancel = () => {
       handleNavigate(ROUTES.adminProducts);
    }

    const addFields = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        let object = {
            id: generatedUuid(), name: '', price: '', weight: 0, startDate: '', endDate: '', count: 0
        };
        setFormFields([...formFields, object]);
    }

    const removeFields = (index: number) => {
        let data = [...formFields];
        data.splice(index, 1);
        setFormFields(data);
    }

    return {
        formFields,
        handleFormChange,
        submit,
        addFields,
        removeFields,
        handleCancel,
    }
}
