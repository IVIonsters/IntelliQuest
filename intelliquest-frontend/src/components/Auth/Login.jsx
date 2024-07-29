import { useCallback } from 'react'

import { useDescope, useSession, useUser } from '@descope/react-sdk'
import { Descope } from '@descope/react-sdk'
import { getSessionToken } from '@descope/react-sdk';

const Login = () => {
  const { isAuthenticated, isSessionLoading } = useSession()
  const { user, isUserLoading } = useUser()
  const { logout } = useDescope()

  const exampleFetchCall = async () => {
    const sessionToken = getSessionToken();

    // example fetch call with authentication header
    fetch('your_application_server_url', {
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
        //Screens that have been customized in Flow will appear here.  You can also customize with the following:
        //flowID = ID of Flow that you wish to use
        //onSuccess and onError - functions that execute when authentication succeeds or fails
        //onReady - event that is triggered when flow is ready to be displayed. This is useful for showing a loading indication before the page is ready. This is a boolean you can pass in with useState()
        //theme - "light" or "dark", the default is light.
        //debug - a boolean that shows a debug widget if true, default if false
        //tenant - this is where you put the <tenantID> of the tenant you wish to use in the authentication flow.
        //redirectURL - Redirect URL for OAuth and SSO (will be used when redirecting back from the OAuth provider / IdP) or for "Magic Link" and "Enchanted Link" (will be used as a link in the message sent to the user). When configured within the flow, it overrides the configuration within the Descope console.
        // validateOnBlur - a boolean to configure whether field validation is preformed when clicking away from the field(true) or on form submission (false)
        //form - you can optionally pass flow inputs, such as email addresses, names, etc., from your apps frontend to your flow. The configured form inputs can be used within flow screens, actions, and conditionals prefized with form.
            //ex. form={{ email: "predefinedname@domain.com",  firstName: "test", "customAttribute.test": "aaaa", "myCustomInput": 12 }}
        //client -You can optionally pass flow inputs from your apps frontend to your flow. The configured client inputs can be used within flow actions and conditionals prefized with client
            //ex. client={{ version: "1.2.0" }}
        //Note: Descope stores the last user information in local storage. If you wish to disable this feature, you can pass storeLastAuthenticatedUser as false to the AuthProvider component. Please note that some features related to the last authenticated user may not function as expected if this behavior is disabled.
        <Descope
          flowId="sign-up-or-in"
          //Can use e.detail.user.name and e.detail.user.email
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

export default Login;
