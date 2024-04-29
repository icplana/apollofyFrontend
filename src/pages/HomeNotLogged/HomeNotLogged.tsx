import { useAuth0 } from "@auth0/auth0-react"
import { useUserContext } from "../../context/usercontext"
import { useAuthDispatch } from "../../context/authcontext"
import { useNavigate } from "react-router-dom"
import { LoginButtonAuth } from '../../components/LoginButtonAuth/LoginButtonAuth';
import { useEffect } from "react";



export const HomeNotLogged = () => {
  const dispatch = useAuthDispatch()
  const userContext = useUserContext()
  const navigate = useNavigate();  
  const { isLoading, user } = useAuth0()
  
  

  const customLogin = async () => {
    console.log(user)
    userContext.setUser(user)
    dispatch({type: "LOGIN"})
    navigate("/home");
  }


  useEffect(() => {
    customLogin()
  }, [isLoading])
  
  
  

  return (
    <div className="homeNotLogged_container">
      <img className="homeNotLogged_musicAnswerImg" src="../src/assets/images/HomeNotLogged/musicAnswer.webp" alt="music is the answer" />
      <img className="homeNotLogged_musicAnswerLogo" src="../src/assets/images/HomeNotLogged/logo.webp" alt="" />
      <p className="homeNotLogged_text">Sing. Dance. Feel Free. Only on Apollofy.</p>
    
     <LoginButtonAuth/>
    
    </div>
  )
}

