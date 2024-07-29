import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from '@descope/react-sdk';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AuthProvider
            projectId='<ProjectId>'
        >
            <App />
        </AuthProvider>
    </React.StrictMode>
);