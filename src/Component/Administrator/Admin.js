import "../App.css";
import AddUser from "./AddUser";
import Header from "./Header";
import Search from "./Search";
import TableData from "./TableData";
import React, { useState } from "react";
import Data from "./Data.json";
import Footer from "./Footer";
// import { v4 as uuidv4 } from 'uuid';

function App(props) {
  // constructor(props) {
  //   super(props);
  //     hienThiForm: false,
  // }
  // doiTrangThai = () => {
  //   this.setState({
  //     hienThiForm: !this.state.hienThiForm;
  //   })
  // }

  const [hienThiForm, sethienThiForm] = useState(false);

  const [dataUser, setDataUser] = useState(Data);

  const [searchText, setSearchText] = useState("");

  const { v4: uuidv4 } = require("uuid");

  const [editUserStatus, setEditUserStatus] = useState(false);

  const [userEditObject, setUserEditObject] = useState({});

  // function componentDidMount() {                  //kiểm tra dữ liệu, tránh việc tạo mới xóa dlieu ban đầu
  //   if(localStorage.getItem('userData') === null) {
  //       localStorage.setItem('userData', JSON.stringify(dataUser))
  //   }
  //   else {
  //       let temp = JSON.parse(localStorage.getItem('userData'));
  //       setDataUser(temp);
  //   }
  // }

  function deleteUser(idUser) {
    // console.log("id la:"+idUser);

    var tempData = dataUser.filter((item) => item.id !== idUser); // hàm filter lấy các phần tử khác với idUser cần xóa <=> xóa phần tử có id cần xóa
    setDataUser(tempData); // cập nhật lại dataUser trong state
    localStorage.setItem("userData", JSON.stringify(tempData));
    // console.log(tempData);
    // tempData.forEach((value,key)=>{
    //   if(value.id === idUser){
    //     console.log(value.name);
    //   }
    // })
  }

  function changeEditUserStatus() {
    setEditUserStatus(!editUserStatus);
  }

  function editUser(user) {
    console.log(user);
    setUserEditObject(user);
  }

  function getNewUserData(name, tel, Permission) {
    var item = {};
    item.id = uuidv4();
    item.name = name;
    item.tel = tel;
    item.Permission = Permission;

    var items = dataUser;
    items.push(item);

    setDataUser(items); // setState để cập nhật lại state
    localStorage.setItem("userData", JSON.stringify(dataUser));
    alert("Thêm thành công!");
    // console.log(dataUser);
    // console.log(name);
    // console.log(tel);
    // console.log(Permission);
  }

  function changeClick() {
    sethienThiForm(!hienThiForm);
  }

  function getTextSearch(data) {
    setSearchText(data);
    console.log("Du lieu da luu trong state la:" + searchText); // click lần 2 mới in ra, tuy nhiên có thể xác định là đã lưu
    // console.log('Du lieu la:'+ data);
  }

  // function success(data){
  //   data = JSON.parse(data);
  //   console.log(data);
  //   data.forEach(function(element){
  //       console.log(element);
  //   });

  var resultSearch = [];
  // console.log(dataUser)

  dataUser.forEach((item) => {
    if (item.name.indexOf(searchText) !== -1) {
      // khác -1 <=> có phần tử
      resultSearch.push(item);
    }
  });

  // console.log(resultSearch);
  console.log(dataUser);

  function getUserEditInfoToApp(info) {
    console.log("get success" + info.name);
    dataUser.forEach((value, key) => {
      if (value.id === info.id) {
        value.name = info.name;
        value.tel = info.tel;
        value.Permission = info.Permission;
      }
    });
    alert("Sửa thành công!");
    localStorage.setItem("userData", JSON.stringify(dataUser));
  }

  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <Search
            userEditObject={userEditObject}
            getText={(data) => getTextSearch(data)}
            ketnoi={() => changeClick()}
            hienThiForm={hienThiForm}
            editUserStatus={editUserStatus}
            changeEditUserStatus={() => changeEditUserStatus()}
            getUserEditInfoToApp={(info) => getUserEditInfoToApp(info)}
          />
          <div className="col-12">
            <hr />
          </div>
          {/* <TableData dataUser={dataUser} /> */}
          {/* <AddUser hienThiForm={this.state.hienThiForm}/> */}
          <TableData
            deleteUser={(idUser) => deleteUser(idUser)}
            editU={(user) => editUser(user)}
            dataUser={resultSearch}
            changeEditUserStatus={() => changeEditUserStatus()}
          />
          <AddUser
            add={(name, tel, Permission) =>
              getNewUserData(name, tel, Permission)
            }
            hienThiForm={hienThiForm}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
