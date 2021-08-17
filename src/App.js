import React,{useState,useEffect} from 'react';
import Table from "./Components/Table"

require('es6-promise').polyfill();
require('isomorphic-fetch');

const App = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => console.log(json[0].title));

      
  }, []);

  
  return (
    <div>
      <table >
      <thead>
        <tr>
          <td>Todo Id{data[0].title}</td>
          <td>Title</td>
          <td>Status</td>
          <td>Action</td>
        </tr>
      </thead>
      </table>
    </div>
  )
}

export default App
