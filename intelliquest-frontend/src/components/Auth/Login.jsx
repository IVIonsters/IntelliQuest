import React, { useCallback } from 'react';
import { useDescope, useSession, useUser } from '@descope/react-sdk';
import { Descope } from '@descope/react-sdk';
import { getSessionToken } from '@descope/react-sdk';

const Login = () => {
//   const { isAuthenticated, isSessionLoading } = useSession();
//   const { user, isUserLoading } = useUser();
   const { logout } = useDescope();

  const exampleFetchCall = async () => {
    try {
      const sessionToken = getSessionToken();
      const response = await fetch('https://intelliquest.onrender.com/', {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${sessionToken}`,
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  const handleLogout = useCallback(() => {
    logout();
  }, [logout]);

  return (
    <>
      {!isAuthenticated && (
        <Descope
          flowId="sign-up-or-in"
          onSuccess={(e) => console.log(e.detail.user)}
          onError={(e) => console.log('Could not log in!')}
        />
      )}

      {(isSessionLoading || isUserLoading) && <p>Loading...</p>}

      {!isUserLoading && isAuthenticated && (
        <>
          <p>Hello {user.name}</p>
          <div>My Private Component</div>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </>
  );
};

export default Login;
