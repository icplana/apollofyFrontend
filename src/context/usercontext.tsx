import { Roles, User } from "../interfaces/user";
import { createContext, useContext, ReactNode, useState } from "react";

interface UserContextType {
  user: User;
  setUser: Function;
}
 
interface UserProps {
  children: ReactNode;
}

const UserContext = createContext({} as UserContextType);

export function UserContextProvider(Props: UserProps) {
  const fakeUser = {
    username: 'icplana',
    picture: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png',
    role: Roles.superAdmin, 
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
  
  // const userName = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState<User>(fakeUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {Props.children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("User Error!");
  }
  return context;
}
