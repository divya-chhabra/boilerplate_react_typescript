import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";
import { UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <UserProvider>
    <AppRoutes/>
    </UserProvider>
  );
}

export default App;