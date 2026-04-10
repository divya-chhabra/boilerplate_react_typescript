import type { User } from "../types/user";

const UserDetails = ({user}:{user:User}) => {
    return (
        <tr>
            <td className="border border-gray-300 px-2 py-2">{user.name}</td>
            <td className="border border-gray-300 px-2 py-2">{user.email}</td>
            <td className="border border-gray-300 px-2 py-2">{user.address.city}</td>
            <td className="border border-gray-300 px-2 py-2">{user.company.name}</td>
        </tr>
    )
}

export default UserDetails;