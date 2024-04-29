import { useAuth0 } from "@auth0/auth0-react"


export const LoginButtonAuth = () => {    
 
    const { loginWithRedirect } = useAuth0() 

  return (
    <button
      className="homeNotLogged_btn"
      onClick={() => loginWithRedirect() }
     >Log in</button>
  )
}
