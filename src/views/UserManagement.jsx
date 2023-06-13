import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Modal, ModalHeader } from "reactstrap";
import UsersTable from "./UsersTable";
import RolesTable from "./RolesTable";
import EditUser from "./EditUser";
import EditRoles from "./EditRoles";

const users_head_columns = [
  "ID",
  "Name",
  "Balance",
  "City",
  "Branch",
  "Edit",
  "Delete",
];

const users_column_data = [
  ["1", "Dakota Rice", "$36,738", "Niger", "Oud-Turnhout", "Edit", "Delete"],
  [
    "2",
    "Minerva Hooper",
    "$23,789",
    "Curaçao",
    "Sinaai-Waas",
    "Edit",
    "Delete",
  ],
  [
    "3",
    "Sage Rodriguez",
    "$56,142",
    "Netherlands",
    "Baileux",
    "Edit",
    "Delete",
  ],
  [
    "4",
    "Philip Chaney",
    "$38,735",
    "Korea, South",
    "Overland Park",
    "Edit",
    "Delete",
  ],
  [
    "5",
    "Doris Greene",
    "$63,542",
    "Malawi",
    "Feldkirchen in Kärnten",
    "Edit",
    "Delete",
  ],
  ["6", "Mason Porter", "$78,615", "Chile", "Gloucester", "Edit", "Delete"],
];

const user_roles_head_columns = ["ID", "Name", "Role", "Edit", "Delete"];

const user_roles_table_column_data = [
  ["1", "Dakota Rice", "User", "Edit", "Delete"],
  ["2", "Minerva Hooper", "Admin", "Edit", "Delete"],
  ["3", "Sage Rodriguez", "Admin", "Edit", "Delete"],
  ["4", "Philip Chaney", "User", "Edit", "Delete"],
  ["5", "Doris Greene", "Admin", "Edit", "Delete"],
  ["6", "Mason Porter", "User", "Edit", "Delete"],
];

const UserManagement = () => {
  // users data
  const [userData, setUserData] = useState([]);
  const [dataToDisplay, setDataToDisplay] = useState([]);

  // roles data
  const [rolesData, setRolesData] = useState([]);
  const [rolesDataToDisplay, setRolesDataToDisplay] = useState([]);

  // state for switching tabs
  const [tabState, setTabState] = useState(1);

  // handel model dislpay
  // user edit model
  const [showUserEditModel, setShowEditUserModel] = useState(false);
  // role edit model
  const [showRoleEditModel, setShowEditRoleModel] = useState(false);

  // edit overlay fields
  const [editModelData,setEditModelData] = useState(
    {
      name:"",
      branch:"",
      city:"",
      balance:"",
    }
  )

  const [editRoleModelData,setEditRoleModelData] = useState({
    name:"",
    role:""
  })

  const toggleTab = (index) => {
    setTabState(index);
  };

  useEffect(() => {
    // setting hardcoded user data
    setUserData(users_column_data);
    setDataToDisplay(users_column_data);

    // setting hardcoded roles data
    setRolesData(user_roles_table_column_data);
    setRolesDataToDisplay(user_roles_table_column_data);
  }, []);

  // show search data
  const searchHandeler = (e) => {
    if (tabState === 1) {
      setDataToDisplay([]);
      for (let i = 0; i < userData.length; i++) {
        let found = false;
        for (let j = 0; j < userData[i].length; j++) {
          if (userData[i][j].toLowerCase().includes(e.target.value)) {
            found = true;
          }
        }
        if (found) {
          setDataToDisplay((s) => [...s, userData[i]]);
        }
      }
    } else {
      setRolesDataToDisplay([]);
      for (let i = 0; i < rolesData.length; i++) {
        let found = false;
        for (let j = 0; j < rolesData[i].length; j++) {
          // console.log(rolesData[i])
          if (rolesData[i][j].toLowerCase().includes(e.target.value)) {
            found = true;
          }
        }
        if (found) {
          setRolesDataToDisplay((s) => [...s, rolesData[i]]);
        }
      }
    }
  };

  // collect edited data from user overlay to push to database
  const collect_user_data_to_edit = (data) => {
    console.log(data);
    setEditModelData(data);
  }
  
  // collect edited data from role overlay to push to database
  const collect_role_data_to_edit = (data) => {
    console.log(data);
    setEditRoleModelData(data);
  }

  // collect edited data form the user overlay model and put in into states
  const user_edit_model_handeler = (e) => {
    e.preventDefault()  
    const field = e.target.name
    const value = e.target.value
    setEditModelData({...editModelData, [field]: value })
  }

  // collect edited data form the role overlay model and put in into states
  const role_edit_model_handeler = (e) => {
    e.preventDefault()  
    const field = e.target.name
    const value = e.target.value
    setEditRoleModelData({...editRoleModelData, [field]: value })
  }

  // push the updated user onto a database
  const submitEditUserDatahandeler = (e) => {
    e.preventDefault() 
    console.log(editModelData);
  }

  // push the updated role onto a database
  const submitEditRoleDatahandeler = (e) => {
    e.preventDefault() 
    console.log(editRoleModelData);
  }

  return (
    <div>
      <Card>
        {/* edit model overlay for users */}
        <EditUser setShowEditUserModel={setShowEditUserModel} showUserEditModel={showUserEditModel} edit_model_handeler={user_edit_model_handeler} editModelData={editModelData} submitEditData={submitEditUserDatahandeler }/>
        {/* edit model overlay for roles */}
        <EditRoles setShowEditRoleModel={setShowEditRoleModel} showRoleEditModel={showRoleEditModel} role_edit_model_handeler={role_edit_model_handeler} editModelData={editRoleModelData} submitEditData={submitEditRoleDatahandeler}/>
        
        {/* code for content and table display */}
        <div className="pr-3">
          <div className="d-flex">
            <Card.Header className="flex-fill">
              <Card.Title as="h2">User Management</Card.Title>
              <p className="card-category">Manage users data and updates</p>
            </Card.Header>
            <div className="flex-fill">
              <input
                type="text"
                placeholder="Search"
                onChange={searchHandeler}
                className="my-4 w-100 h-50 border border-light bg-light p-3 rounded"
              ></input>
            </div>
          </div>
        </div>
        <div className="ml-3 mt-2">
          <button
            style={{
              outline: "none",
              border: "none",
              height: "60px",
              width: "90px",
              borderBottom: tabState === 1 ? "2px solid black" : "none",
            }}
            onClick={() => toggleTab(1)}
          >
            Users
          </button>
          <button
            style={{
              outline: "none",
              border: "none",
              height: "60px",
              width: "90px",
              borderBottom: tabState === 2 ? "2px solid black" : "none",
            }}
            onClick={() => toggleTab(2)}
          >
            Roles
          </button>
          <hr></hr>
        </div>
        <Card.Body className="table-full-width hover table-responsive">
          {tabState === 1 ? (
            // user table
            <UsersTable
              users_head_columns={users_head_columns}
              dataToDisplay={dataToDisplay}
              showModel={(flag)=>{setShowEditUserModel(flag)}}
              dataToEdit={collect_user_data_to_edit}
            />
          ) : (
            //  user roles table
            <RolesTable
              dataToDisplay={rolesDataToDisplay}
              user_roles_head_columns={user_roles_head_columns}
              showModel={(flag)=>{setShowEditRoleModel(flag)}}
              dataToEdit={collect_role_data_to_edit}
            />
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserManagement;
