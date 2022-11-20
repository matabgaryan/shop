import {ActionReducerMapBuilder, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {userLogin} from "../../core/api/users";
import {IAuthInitialState, IUser} from "./interface";
import {NoInfer} from "@reduxjs/toolkit/dist/tsHelpers";
import {STATUS} from "../../core/enums";

const auth: string | null  = localStorage.getItem('user')

const initialState = {
    loading: false,
    userInfo: auth ? JSON.parse(auth)  : null,
    isAuthenticated: !!auth,
    error: false,
    status: '',
    openLoginModal: false
} as IAuthInitialState

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.userInfo = action.payload;
            state.status = STATUS.SUCCEEDED;
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.userInfo = null;
            localStorage.removeItem('user')
        }
    },
    extraReducers: (builder: ActionReducerMapBuilder<NoInfer<IAuthInitialState>>) => {
        builder
            .addCase(login.pending, (state) => {
                state.status = STATUS.PENDING;
                state.loading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.userInfo = action.payload;
                state.status = STATUS.SUCCEEDED;
                state.isAuthenticated = true;
                state.loading = false;
            })
            .addCase(login.rejected, (state) => {
                state.status = STATUS.REJECTED;
                state.loading = false;
            });
    },
})

export const login = createAsyncThunk<IUser>("auth/auth", async () => {
    return await userLogin('user');
});

export const adminLogin = createAsyncThunk<IUser>("auth/admin", async () => {
    return await userLogin('admin');
});
export const { logout, setUser } = authSlice.actions;

export default authSlice.reducer
