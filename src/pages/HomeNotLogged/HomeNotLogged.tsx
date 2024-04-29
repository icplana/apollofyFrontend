
import { useNavigate } from 'react-router-dom';
import { LoginButtonAuth } from '../../components/LoginButtonAuth/LoginButtonAuth';
import { useAuthDispatch } from '../../context/authcontext';
import { useUserContext } from '../../context/usercontext';



export const HomeNotLogged = () => {
  const dispatch = useAuthDispatch()
  const userContext = useUserContext()
  const navigate = useNavigate(); 
  
  
  const customLogin = async () => {
   
  const user = {
    username: 'icplana',
    picture: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png',
    role: 'superAdmin', //not sure if that's a proper way of adding the type
    name: 'ignasi',
    firstSurname: 'casanovas',
    secondSurname: 'plana',
    email: 'ignasicp96@gmail.com',
    password: 'password',
    following: [],
    followers: [],
    autors: [],
    albums: [],
    playlists: [],
  }
  // console.log(user)
  userContext.setUser(user)
  dispatch({type: "LOGIN"})
  navigate("/home");
}

  
  

  return (
    <div className="homeNotLogged_container">
      <img className="homeNotLogged_musicAnswerImg" src="../src/assets/images/HomeNotLogged/musicAnswer.webp" alt="music is the answer" onClick={ customLogin }/>
      <img className="homeNotLogged_musicAnswerLogo" src="../src/assets/images/HomeNotLogged/logo.webp" alt="" />
      <p className="homeNotLogged_text">Sing. Dance. Feel Free. Only on Apollofy.</p>
    
     <LoginButtonAuth/>
    
    </div>
  )
}

