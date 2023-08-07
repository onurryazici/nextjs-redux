import { createSlice, PayloadAction} from '@reduxjs/toolkit'

type InitialState = {
 value: AuthState;
}

type AuthState = {
    isAuth : boolean,
    username: string,
    uid: string,
    isModerator: boolean
}

const initialState = {
    value : {
        isAuth: false,
        username : "",
        uid : "",
        isModerator : false
    } as AuthState
} as InitialState;


export const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: () => {
            return initialState;
        }, 
        login: (state, action: PayloadAction<string>) => {
            return {
                value: {
                    isAuth: true,
                    username: action.payload,
                    uid : "uyoty8213ada63s6f8esf3",
                    isModerator: false,
                }
            }
        },
        toggleModerator: (state) => {
            state.value.isAuth = !state.value.isAuth
        }
    }
})

export const { login, logout, toggleModerator } = auth.actions;
export default auth.reducer;