import React from "react";
import { Table } from "react-bootstrap";

const RolesTable = ({user_roles_head_columns, dataToDisplay,showModel,dataToEdit}) => {
  return (
    <div className="col">
      <Table className="table-striped table-hover w-100">
      <thead>
          <tr>
            {user_roles_head_columns.map((prop, key) => {
              return <th key={key}>{prop}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {dataToDisplay.map((prop, key_field) => {
            return (
              <tr key={key_field}>
                {prop.map((prop, key) => {
                  if (prop === "Edit") {
                    return (
                      <td key={key}>
                        <a
                          href="#"
                          onClick={() => {
                            showModel(true);
                            // send data to be edited to userManagement component 
                            dataToEdit({
                              id: dataToDisplay[key_field][0],
                              name: dataToDisplay[key_field][1],
                              role: dataToDisplay[key_field][2],
                            });
                          }}
                        >
                          {prop}
                        </a>
                      </td>
                    );
                  }
                  if (prop === "Delete") {
                    return (
                      <td key={key}>
                        <a href="#">{prop}</a>
                      </td>
                    );
                  }
                  return <td key={key}>{prop}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default RolesTable;
