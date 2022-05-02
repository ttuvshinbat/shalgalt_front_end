import "./App.css";
import { Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Table from "./components/Table";
import "./index.css";

function App() {
  const [data, setdata] = useState([]);


  return (
    <div className="app">

      <Nav />
      <Table />
    </div>
  );
}

export default App;
