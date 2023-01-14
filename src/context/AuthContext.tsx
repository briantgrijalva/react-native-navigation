import React, { createContext, useReducer } from 'react';
import { authReducer } from './authReducer';

export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}

export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined,
};

export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    changeFavoriteIcon: (iconName: string) => void;
    signOut: () => void;
    changeUsername: (userName: string) => void;
}

export const AuthContext = createContext( {} as AuthContextProps );

export const AuthProvider = ({ children }: any) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState);

    const signIn = () => {
        dispatch({ type: 'signIn' });
    };

    const changeFavoriteIcon = ( iconName: string ) => {
        dispatch({ type: 'changeFavIcon', payload: iconName });
    };

    const signOut = () => {
        dispatch({ type: 'signOut' });
    };

    const changeUsername = ( userName: string ) => {
        dispatch({ type: 'changeUsername', payload: userName });
    };

    return (
        <AuthContext.Provider value={{
            authState: authState,
            signIn: signIn,
            changeFavoriteIcon: changeFavoriteIcon,
            signOut: signOut,
            changeUsername: changeUsername,
        }}>
            {children}
        </AuthContext.Provider>
    );
};
