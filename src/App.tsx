import { Profile } from "./components/auth/Profile";
import "./App.css";
import { Private } from "./components/auth/Private";
function App() {
  return (
    <div>
     <Private isLoggedIn={!true} component={Profile}/>
    </div>
  );
}

export default App;
