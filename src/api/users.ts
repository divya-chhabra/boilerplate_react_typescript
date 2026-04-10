import type { User } from "../types/user";
import axiosInstance from "./axios";


export const getUsers= async():Promise<User[]| unknown>=> {

    const res = await axiosInstance.get("/users");
    //  console.log("res from api", res);
    if(res?.status==200)
        return res.data;
    return res;

}