import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">View UsersList</Link> |{" "}
      <Link to="/add">Add New User</Link>
    </nav>
  );
};

export default Navbar;