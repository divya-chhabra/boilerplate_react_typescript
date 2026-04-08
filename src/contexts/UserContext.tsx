import React, { createContext,useContext,useState,useEffect } from "react";
import type { User } from "../types/user";
import { getUsers } from "../api/users";

interface UserContextType {
    users:User[]
}

interface UserProviderProps {
    children:React.ReactNode
}

const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({children}:UserProviderProps) => {

    const [users,setUsers] = useState<User[]>([]);

    useEffect(() => {
        getUsers().then((data:User[]) => {
            console.log("data from context", data);
            const sortedData = data.sort((a,b)=>a.name.localeCompare(b.name))
            setUsers(sortedData);
        })
    },[])

    return (
        <UserContext.Provider value={{users}}>
            { children}
        </UserContext.Provider>
    
    )
}

export const useUsers = () => {
    const context = useContext(UserContext);
    return context;
}