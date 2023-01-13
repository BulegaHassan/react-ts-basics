import "./App.css";
import { List } from "./components/generics/List";
function App() {
  return (
    <div>
      <List
        items={["hassan", "bulega", "Abu Maryam"]}
        onClick={(item) => console.log(item)}
      />
      <List items={[1, 3, 5, 7, 9]} onClick={(item) => console.log(item)} />
      <List
        items={[
          { first: "has", last: "bul" },
          { first: "hasa", last: "bul" },
          { first: "hasssan", last: "bul" },
          { first: "hassanu", last: "bul" },
          { first: "hasgotech", last: "bul" },
        ]}
        onClick={(item) => console.log(item)}
      />
    </div>
  );
}

export default App;
