import "./App.css";
import { Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Table from "./components/Table";
import "./index.css";

function App() {
  const [data, setdata] = useState([]);
  console.log(data);

  return (
    <div className="app">
      {/* <div className="header">My Todo list</div>
      <form action="" className="forms">
        <input type="text" />
        {data.map((ref) => {
          console.log(ref);
          return (
            <div className="datas">
              <input type="checkbox" />
              {ref.name} {edit} {trash}
            </div>
          );
        })}
      </form>{" "} */}
      <Nav />
      <Table />
    </div>
  );
}

export default App;
