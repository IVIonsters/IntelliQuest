import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Login.jsx';
import { AuthProvider, getSessionToken } from '@descope/react-sdk';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AuthProvider
            projectId='P2jvuw8UpyL4xuQM9sDQeVSL48S9'
        >
            <App />
        </AuthProvider>
    </React.StrictMode>
);

const sessionToken= getSessionToken();

try {
  const authInfo = await descopeClient.validateSession(sessionToken);
  console.log("Successfully validated user session:");
  console.log(authInfo);
} catch (error) {
  console.log ("Could not validate user session " + error);
}