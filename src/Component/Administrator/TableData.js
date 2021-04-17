import React, { Component } from 'react'
import TableDataRow from './TableDataRow';
// import DataUser from 'http://api.longlt.com/getUserdata';

export default class TableData extends Component {

    deleteBtnClick=(idUser)=>{
        this.props.deleteUser(idUser);
    }

    mappingDataUser = () => this.props.dataUser.map((value,key) => (
            <TableDataRow 
            deleteBtnClick={(idUser) => this.deleteBtnClick(idUser)}
            editUserClick={(user)=>this.props.editU(value)}   //value= mảng giá trị user
            name={value.name} 
            phone={value.tel} 
            permission={value.Permission} 
            id={value.id} 
            key={key} 
            stt={key}
            changeEditUserStatus = {()=>this.props.changeEditUserStatus()}
            />
        ))
    
    
    
    

    render() {
        console.log(this.props.dataUser);
        
        return (
            <div className="col">
                <div className="table-responsive">
                    <table className="table table-striped table-inverse table-hover">
                    <thead className="thead-inverse thead-dark">
                        <tr>
                        <th><strong>STT</strong></th>
                        <th><strong>Tên</strong></th>
                        <th><strong>Điện thoại</strong></th>
                        <th><strong>Quyền</strong></th>
                        <th><strong>Thao tác</strong></th>
                        <th><strong>ID</strong></th>
                        </tr>
                    </thead>
                    <tbody>
                       {this.mappingDataUser()}
                       {/* {
                        this.props.DataUser.map((value,key) => (
                            <TableDataRow name={value.name} phone={value.tel} permission={value.Permission} id={value.id} key={key} stt={key} />
                        ))
                       } */}
                    </tbody>
                    </table>
                </div>
            </div>    
        )
    }
}
