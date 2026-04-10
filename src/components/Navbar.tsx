import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="my-5">
      <Link to="/" className="px-2 py-2 bg-indigo-500 text-white my-2">View UsersList</Link>|
      <Link to="/add" className="px-2 py-2 bg-indigo-500 text-white my-2">Add New User</Link>
    </nav>
  );
};

export default Navbar;