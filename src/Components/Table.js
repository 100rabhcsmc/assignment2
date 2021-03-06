import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import "./Table.css";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  tableContainer: {
    borderRadius: 15,
    margin: "10px 10px",
    maxWidth: 700,
    overflow: "hidden",
    position: "absolute",
  },
  tableHeaderCell: {
    fontWeight: "bold",
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.getContrastText(theme.palette.primary.dark),
  },
}));

const Datatable = ({ data }, props) => {
  const classes = useStyles();
  const [userid, setUserId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  // const [todoid, setToDoId] = useState("");
  // const [todotitle, setToDoTitle] = useState("");
  const [tododata, setTodoData] = useState([]);

  const btnClick = (id) => {
    console.log(id);
    setTitle(`User Details`);
    // setToDoId(`ToDo Id:${TodoId}`);
    // setToDoTitle(`ToDo Title:${TodoTitle}`);
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setUserId(JSON.stringify(`User Id:${json.id}`).slice(1, -1));
        setName(JSON.stringify(`Name:${json.name}`).slice(1, -1));
        setEmail(JSON.stringify(`Email:${json.email}`).slice(1, -1));
      });

      fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id}`)
      .then((res) => res.json())
      .then((json) => setTodoData(json)); 
  };

  return (
    <div className="data_container">
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHeaderCell}>ToDo ID</TableCell>
              <TableCell className={classes.tableHeaderCell}>Title</TableCell>
              <TableCell className={classes.tableHeaderCell}>Status</TableCell>
              <TableCell className={classes.tableHeaderCell}>Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell style={{ width: "5rem" }}>{row.id}</TableCell>
                <TableCell style={{ width: "9rem" }}>{row.title}</TableCell>
                <TableCell>
                  {row.completed ? "completed" : "Incompleted"}
                </TableCell>

                <TableCell>
                  <button
                    onClick={() => btnClick(row.userId, row.id, row.title)}
                  >
                    View User
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="UserData">
        <div className="data">
          <h2>{title}</h2>
    
          {tododata.map((row) => (
          <><h4>ToDoId: {row.id}</h4><h5>ToDoTitle: {row.title}</h5><h5>
              {userid}
              <br />
            </h5><h5>
                {name}
                <br />
              </h5><h5>{email}</h5></>
          ))}
          
        </div>
        
      </div>
    </div>
  );
};

export default Datatable;
