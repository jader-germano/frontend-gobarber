import React, { createContext, useCallback } from 'react';

interface AuthContextData {
    name: string;
    signIn(): void;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);
export const AuthProvider: React.FC = ({ children }) => {
    const testerTitle = 9;
    const signIn = useCallback(() => {
        console.log(`${testerTitle}`);
    }, []);
    return <AuthContext.Provider value={{ name: 'jader', signIn }}>{children}</AuthContext.Provider>;
};
