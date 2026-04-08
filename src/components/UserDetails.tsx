import type { User } from "../types/user"

const UserDetails = ({info}:User) => {
    return (
        <tr>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.address.city}</td>
                            <td>{user.company.name}</td>
                        </tr>
    )
}

export default UserDetails;