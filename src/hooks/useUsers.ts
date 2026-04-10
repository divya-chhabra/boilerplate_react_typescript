import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export const useUsers = () => {
    const context = useContext(UserContext);
    return context;
}