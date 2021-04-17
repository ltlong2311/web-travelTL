import React, { Component } from "react";

export default class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stt: false,
      id: "",
      name: "",
      tel: "",
      Permission: "",
    };
  }

  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value,
    });
    var item = {};
    item.id = this.state.id;
    item.name = this.state.name;
    item.tel = this.state.tel;
    item.Permission = this.state.Permission;
    //    console.log(item);
  };
  // Hiển thị
  changeState = () => {
    this.setState({
      stt: !this.state.stt,
    });
  };
  showBtn = () => {
    if (this.state.stt === true) {
      // return <div onClick={this.changeState()} className="btn btn-block btn-outline-secondary">Đóng</div>  k sử dụng arrow function thì sẽ lỗi bởi hàm sẽ tự động chạy luôn dù chưa Click
      return (
        <div
          onClick={() => this.changeState()}
          className="btn btn-block btn-outline-secondary"
        >
          Đóng
        </div>
      );
    } else {
      return (
        <div
          onClick={() => this.changeState()}
          className="btn btn-block btn-outline-info"
        >
          Thêm mới
        </div>
      );
    }
  };
  showBtnAdd = () => {
    if (this.props.hienThiForm === true) {
      return (
        <div className="">
          {this.showBtn()}
          {this.showFormAdd()}
        </div>
      );
    }
  };
  showFormAdd = () => {
    if (this.state.stt === true) {
      return (
        <form>
          <div className="card border-primary mt-2">
            <h4 className="card-header">Thêm User</h4>
            <div className="card-body text-primary">
              <div className="card-title" />
              <div className="form-group">
                <input
                  type="text"
                  onChange={(event) => {
                    this.isChange(event);
                  }}
                  name="name"
                  className="form-control"
                  placeholder="Tên user"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  onChange={(event) => {
                    this.isChange(event);
                  }}
                  name="tel"
                  className="form-control"
                  placeholder="Điện thoại"
                />
              </div>
              <div className="form-group">
                <select
                  className="custom-select"
                  onChange={(event) => {
                    this.isChange(event);
                  }}
                  name="Permission"
                  required
                >
                  <option value>Chọn quyền</option>
                  <option value={1}>Admin</option>
                  <option value={2}>Moderator</option>
                  <option value={3}>User</option>
                </select>
              </div>
              <div className="form-group mt-2 mb-2">
                <input
                  type="reset"
                  className="btn btn-primary btn-block"
                  onClick={() =>
                    this.props.add(
                      this.state.name,
                      this.state.tel,
                      this.state.Permission
                    )
                  }
                  value="Thêm mới"
                />
              </div>
            </div>
          </div>
        </form>
      );
    }
  };
  render() {
    // console.log(this.state);
    return <div>{this.showBtnAdd()}</div>;
  }
}
