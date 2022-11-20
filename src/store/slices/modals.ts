import { createSlice } from '@reduxjs/toolkit';
import {IModalState} from "./interface";

const initialState = { isOpen: false, modalName: '' } as IModalState;

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal(state, action) {
            state.isOpen = true;
            state.modalName = action.payload;
        },
        closeModal(state) {
            state.isOpen = false
            state.modalName = '';
        },
    },
})

export const { closeModal, openModal } = modalSlice.actions;
export default modalSlice.reducer;
