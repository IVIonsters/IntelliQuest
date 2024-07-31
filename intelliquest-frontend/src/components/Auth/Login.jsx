/*import React, { useState } from 'react';
import axios from 'axios';

function Descope() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5173/login', { email, password });
            console.log('Login successful:', response.data);
        } catch (error) {
            console.error('Login failed:', error.response.data);
        }
    };

    return (
        <div className="App">
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Descope;
*/

//start of tutorial
import { useCallback } from 'react'

import { useDescope, useSession, useUser } from '@descope/react-sdk'
import { Descope } from '@descope/react-sdk'
import { getSessionToken } from '@descope/react-sdk';

const DescopeComponent = () => {
  const { isAuthenticated, isSessionLoading } = useSession()
  const { user, isUserLoading } = useUser()
  const { logout } = useDescope()

  const exampleFetchCall = async () => {
    const sessionToken = getSessionToken();

    // example fetch call with authentication header
    fetch('https://intelliquest.onrender.com/', {
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + sessionToken,
      }
    })
  }

  const handleLogout = useCallback(() => {
    logout()
  }, [logout])

  return <>
    {!isAuthenticated &&
      (
        <Descope
          flowId="sign-up-or-in"
          onSuccess={(e) => console.log(e.detail.user)}
          onError={(e) => console.log('Could not log in!')}
        />
      )
    }

    {
      (isSessionLoading || isUserLoading) && <p>Loading...</p>
    }

    {!isUserLoading && isAuthenticated &&
      (
        <>
          <p>Hello {user.name}</p>
          <div>My Private Component</div>
          <button onClick={handleLogout}>Logout</button>
        </>
      )
    }
  </>;
}

export default DescopeComponent;