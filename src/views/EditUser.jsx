import React from 'react'
import { Modal, ModalHeader } from "reactstrap";

const EditUser = ({
  edit_model_handeler,
  setShowEditUserModel,
  showUserEditModel,
  editModelData,
  submitEditData}) => {
  return (
    <Modal
          fade={false}
          size="lg"
          isOpen={showUserEditModel}
          toggle={()=>setShowEditUserModel(!showUserEditModel)}
        >
          <ModalHeader
          toggle={()=>setShowEditUserModel(!showUserEditModel)}
          >
          </ModalHeader>
          <h3 style={{textAlign:"center"}}>Edit User Data</h3>
          <form className="p-5" onKeyUp={e=>e.preventDefault()}>
              <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" name="name" placeholder="Enter name" onChange={edit_model_handeler} value={editModelData.name}/>
                {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
              </div>
              <div className="form-group">
                <label>Balance</label>
                <input type="text" className="form-control" name="balance" onChange={edit_model_handeler} value={editModelData.balance} placeholder="Enter balance"/>
              </div>
              <div className="form-group">
                <label>City</label>
                <input type="text" className="form-control" name="city" onChange={edit_model_handeler} value={editModelData.city} placeholder="Enter city"/>
              </div>
              <div className="form-group">
                <label>Branch</label>
                <input type="text" className="form-control" name="branch" onChange={edit_model_handeler} value={editModelData.branch} placeholder="Enter branch"/>
              </div>
              <button type="submit" className="btn btn-primary mt-4" onClick={(e)=>{setShowEditUserModel(!showUserEditModel);submitEditData(e)}}>Submit</button>
            </form>
        </Modal>
  )
}

export default EditUser