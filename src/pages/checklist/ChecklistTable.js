import React from "react";
import { Table } from "react-bootstrap/cjs";
import "bootstrap/dist/css/bootstrap.min.css";

const ChecklistTable = (props) => {
  const { dataChecklist, handleCreate, handleDeleteName } = props;
  return (
    <div>
      <button
        onClick={() => handleCreate()}
        style={{ float: "left", backgroundColor: "blue", color: "white" }}
      >
        Created
      </button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {dataChecklist.map((user) => (
            <tr>
              <td>{user.name}</td>
              <td>
                <button
                  onClick={() => handleDeleteName(user.id)}
                  style={{
                    backgroundColor: "#0ac1a5",
                    color: "white",
                    width: "100px",
                  }}
                >
                  DELETE
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ChecklistTable;
