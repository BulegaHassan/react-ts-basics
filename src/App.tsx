import "./App.css";
import { UserContextProvider } from "./components/context/UserContext";
import { User } from "./components/context/User";

function App() {
  return (
    <div>
      <UserContextProvider>
        <User />
      </UserContextProvider>
    </div>
  );
}

export default App;
