import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/routes.index';

import GlobalStyled from './styles/global';

import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => (
    <>
        <AuthProvider>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </AuthProvider>

        <GlobalStyled />
    </>
);
export default App;
