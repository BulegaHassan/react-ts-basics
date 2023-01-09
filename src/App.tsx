import "./App.css";
import Status from "./components/Status";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Greet from "./components/Greet";
function App() {
  
  return (
    <div>
      <Status status='success' />
      <Heading> Placeholder text</Heading>
      <Oscar>
        <Heading> Oscar is a given name </Heading>
      </Oscar>
      <Greet name="hassan"  isLoggedIn={!false}/>
    </div>
  );
}

export default App;
