import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
function App() {
  return (
    <div>
      <Button
        handleClick={(event,id) => {
          console.log("Button clicked", event,id);
        }}
      />
      <Input value="" handleChange={(event)=> console.log('some change',event.target)
      }/>
    </div>
  );
}

export default App;
