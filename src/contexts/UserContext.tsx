import React, { createContext,useState,useEffect } from "react";
import type { User } from "../types/user";
import { getUsers } from "../api/users";

interface UserContextType {
    users:User[],
    error?: string,
    loading:boolean,
    addUser:(user:User) => void;
}

interface UserProviderProps {
    children:React.ReactNode
}

export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({children}:UserProviderProps) => {

    const [users,setUsers] = useState<User[]>([]);
    const [error,setError] = useState<string>(null);
    const [loading,setLoading] = useState<boolean>(true);

    const addUser = (user:User) => {
        setUsers((prev) => [...prev,user].sort((a,b)=>a.name.localeCompare(b.name) ))
    }

    useEffect(() => {
        getUsers().then((data:User[]) => {
            console.log("data from context", data);
            const sortedData = data.sort((a,b)=>a.name.localeCompare(b.name))
            setUsers(sortedData);
        })
        .catch((err:Error)=>{
            setError(err.message);
        })
        .finally(()=> setLoading(false))
    },[])



    return (
        <UserContext.Provider value={{users,error,loading,addUser}}>
            { children}
        </UserContext.Provider>
    
    )
}
