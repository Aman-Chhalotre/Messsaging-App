import { createContext,useContext } from "react";
import image1 from '../assets/images/team01.jpg'

export const userContext = createContext({
    user:{},
    setUser:()=>{}
});

export const UserContextProvider = userContext.Provider;

export default function useUser(){
    return useContext(userContext)
};