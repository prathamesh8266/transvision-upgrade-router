import React from 'react'
import { Modal, ModalHeader } from "reactstrap";

const EditRoles = ({
    role_edit_model_handeler,
    setShowEditRoleModel,
    showRoleEditModel,
    editModelData,
    submitEditData}) => {
  return (
    <Modal
          fade={false}
          size="lg"
          isOpen={showRoleEditModel}
          toggle={()=>setShowEditRoleModel(!showRoleEditModel)}
        >
          <ModalHeader
          toggle={()=>setShowEditRoleModel(!showRoleEditModel)}
          >
          </ModalHeader>
          <h3 style={{textAlign:"center"}}>Edit User Data</h3>
          <form className="p-5" onKeyUp={e=>e.preventDefault()}>
              <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" name="name" placeholder="Enter name" 
                onChange={role_edit_model_handeler} 
                value={editModelData.name}/>
              </div>
              <div className="form-group">
                <label>Role</label>
                <input type="text" className="form-control" name="role" 
                onChange={role_edit_model_handeler} 
                value={editModelData.role} placeholder="Enter Role"/>
              </div>
              <button type="submit" className="btn btn-primary mt-4" onClick={submitEditData}>Submit</button>
            </form>
        </Modal>
  )
}

export default EditRoles