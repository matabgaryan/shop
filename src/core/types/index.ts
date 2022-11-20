import { Action, ThunkAction } from '@reduxjs/toolkit';
import {setupStore, store} from '../../store/store';

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export interface Pojo {
    [key: string]: any;
}
