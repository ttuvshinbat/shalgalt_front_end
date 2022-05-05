import "./App.css";
import { Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Table from "./components/Table";
import "./index.css";

function App() {
  const [data, setdata] = useState([]);


  return (
    <div className="App ">
      <div className="all me-auto">
        <Nav />
        <Table />
      </div>


    </div>
  );
}

export default App;
