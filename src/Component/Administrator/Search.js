import React, { Component } from 'react'
import EditUser from './EditUser';

export default class Search extends Component {
    constructor(props) {
        super(props);
          this.state = {
              tempValue:'',
              userObj:{}
          }
    }
     
    getUserEditInfo= (info) =>{
        this.setState({
            userObj: info
        });
        this.props.getUserEditInfoToApp(info);
    }


    isShowEditForm=() => {
        if(this.props.editUserStatus===true){
            return <EditUser
                    getUserEditInfo = {(info)=>this.getUserEditInfo(info)} 
                    userEditObject = {this.props.userEditObject}
                    changeEditUserStatus = {()=>this.props.changeEditUserStatus()}
                    />
        }
    }

    isChange = (event) => {
        // console.log(event.target.value);
        this.setState({
             tempValue:event.target.value
        });
        this.props.getText(this.state.tempValue); // tìm ngay lập tức k cần ấn btn Tìm kiếm
    }

    hienThiNut = () => {
        if(this.props.hienThiForm === true){
            return (
                <div onClick={()=>this.props.ketnoi()} className="btn-group btn-add">
                   <p><b className="btn btn-primary border" id="add">X</b>Đóng lại</p>
                </div>
            )
        }else{
            return (
                <div onClick={()=>this.props.ketnoi()} className="btn-group btn-add">
                   <p><b className="btn btn-primary border" id="add">+</b>Thêm mới</p>
                </div>
            )
        }
    }
    
    test = () => {
        if(this.props.hienThiForm === false){
            console.log('success');
        }
    }
    
    render() {
        return (
            <div className="col-12">
                <div className="form-group">
                    <div className="btn-group btn-search">
                        <input onChange={(event)=>this.isChange(event)} type="text" className="form-control" width="50%" aria-describedby="helpId" placeholder="Nhập tên cần tìm" />
                        <div className="btn btn-info" id="search" onClick={(data)=>this.props.getText(this.state.tempValue)}>Tìm</div>
                    </div>
                    {this.hienThiNut()}
                </div>
                <div className="row">
                    {this.isShowEditForm()}
                </div>
            </div>
        )
    }
}
