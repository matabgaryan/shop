import { useSelector } from "react-redux";
import {RootState} from "../core/types";
import { openModal, closeModal } from "../store/slices/modals";
import {useAppDispatch} from "./useRedux";

export const useModalHook = () => {
    const dispatch = useAppDispatch();
    const { isOpen, modalName } = useSelector((state: RootState) => state.modals);

    const handleOpenModal = (modalName: string) => {
        dispatch(openModal(modalName));
    }

    const handleCloseModal = () => {
        dispatch(closeModal());
    }

    return {
        handleOpenModal,
        handleCloseModal,
        isOpen,
        modalName
    }
}
