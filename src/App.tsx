import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import "./App.css";
function App() {
  const personName = {
    first: "Miiro",
    last: "Ashraf",
  };
  const nameList = [
    { first: "Hassan", last: "Bulega" },
    { first: "Rayan", last: "Kayemba" },
    { first: "Shifaa", last: "Kayemba" },
  ];
  return (
    <div>
      <Greet name='hassan' messageCount={11} isLoggedIn={!true} />
      <Person name={personName} />
      <PersonList names={nameList}/>
    </div>
  );
}

export default App;
