import React, { useState, useEffect } from "react";
import DataTable from "./Components/Table";
import "./App.css"


const App = () => {
  // const classes = useStyles();
  const [data, setData] = useState([]);
  const [q, setQ] = useState("");

  const fetchInventory = () => {
    fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then((res) => res.json())
      .then((json) => setData(json));
  };

  useEffect(() => {
    fetchInventory();
  }, []);

  function search(rows){
    return rows.filter(row=>row.title.toLowerCase().indexOf(q) > -1)
  }


  return (
    <div className="App">
      <div className="title">
        <h1>Todos</h1>
        <input type='text' placeholder="Search.." value={q} onChange={(e)=>setQ(e.target.value)}/>
      </div>
      <DataTable data={search(data)}  />
    </div>
  );
};

export default App;
