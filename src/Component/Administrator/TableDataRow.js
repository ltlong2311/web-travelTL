import React, { Component } from 'react'

export default class TableDataRow extends Component {
    permissionShow = () => {
        if(this.props.permission===1){ return "Admin";}   
        else if(this.props.permission===2){ return "Moderator";}   
        else { return "User";}   
    }
    editClick = () => {
        this.props.editUserClick();
        this.props.changeEditUserStatus();
    }
    deleteBtnClick=(idUser)=>{
        this.props.deleteBtnClick(idUser);
    }
    render() {
        return (
            <tr>
                <td>{this.props.stt+1}</td>
                <td>{this.props.name}</td>
                <td>{this.props.phone}</td>
                <td>{this.permissionShow()}</td>
                <td>
                    <div className="btn-group">
                    <div className="btn btn-warning sua" onClick={()=>this.editClick()}>
                        <i className="fa fa-edit"> Sửa</i>
                    </div>
                    <div className="btn btn-danger sua" onClick={(idUser)=>this.deleteBtnClick(this.props.id)}>
                        <i className="far fa-trash-alt"> Xóa</i>
                    </div>
                    </div>
                </td>
                <td>{"#"+this.props.id}</td>
            </tr>
        )
    }
}
