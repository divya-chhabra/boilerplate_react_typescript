import type { User } from "../types/user";
import axios from "axios";


export const getUsers= async():Promise<User[]>=> {

    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log("res from api", res);
    return res.data;

}