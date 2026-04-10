import UserDetails from "../components/UserDetails";
import { useUsers } from "../hooks/useUsers";
import type { User } from "../types/user";


const Home = () => {
    const {users,loading,error} = useUsers();

    if (loading) return <p>Data is loading</p>

    if (error) return <h2>Something went wrong</h2>

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
                    //     <tr>
                    //     <td>{user.name}</td>
                    //     <td>{user.email}</td>
                    //     <td>{user.address.city}</td>
                    //     <td>{user.company.name}</td>
                    // </tr>

                    <UserDetails key={user.id} user={user}/>
                    
                    

                    ))
                }
            </tbody>
        </table>
            
        </>
    );
};

export default Home;