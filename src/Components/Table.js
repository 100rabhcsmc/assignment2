import React from 'react';

export default function Table({ data }) {
  const columns = data && Object.keys(data);
  return (
    <table cellPadding={0} cellSpacing={0}>
      <thead>
        <tr>
          <td>Todo Id</td>
          <td>Title</td>
          <td>Status</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr>
            {columns.map((column) => (
              <td>{row[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );}