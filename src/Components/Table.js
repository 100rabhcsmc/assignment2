import React from "react";
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

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  tableContainer: {
    borderRadius: 15,
    margin: "10px 10px",
    maxWidth: 700,
  },
  tableHeaderCell: {
    fontWeight: "bold",
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.getContrastText(theme.palette.primary.dark),
  },
}));



const Datatable= ({data},props) => {
  const classes = useStyles();

  const btnClick=()=>{
    alert(
      <table>
          {data.map((row) => (
            <tr key={row.id}>
              {/* <td >{row.id}</td> */}
              <td >{row.title}</td>
              {/* <td >{row.completed ? "completed" : "Incompleted"}</td> */}
           </tr>  ))}
        </table>
     
    // "you are clicked"
    
    )        
  }
  

  return (
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
              <TableCell>{row.completed ? "completed" : "Incompleted"}</TableCell>
              
              <TableCell>
                <button onClick={btnClick}>View User</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};


export default Datatable;