import UserDetails from "../components/UserDetails";
import { useUsers } from "../contexts/UserContext";
import type { User } from "../types/user";

const Home = () => {
    const {users} = useUsers();
    console.log(users);
    return (
        <>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>Company</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user:User)=>(
                        <tr>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.address.city}</td>
                        <td>{user.company.name}</td>
                    </tr>
                    

                    ))
                }
            </tbody>
        </table>
            
        </>
    );
};

export default Home;