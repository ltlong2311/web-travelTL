import React from 'react'
import './FormLogin.css'
import {connect} from 'react-redux'
function FormLogin(props) {
    const onUsernameChange = (e) =>{
        console.log(e.target.value);
    }
    const onPasswordChange = (e) =>{
        console.log(e.target.value);
    }
    const onUsernameRegisterChange = (e) =>{
        console.log(e.target.value);
    }
    const onPasswordRegisterChange = (e) =>{
        console.log(e.target.value);
    }
    const onRepeatPasswordRegisterChange = (e) =>{
        console.log(e.target.value);
    }
    const onEmailRegisterChange = (e) =>{
        console.log(e.target.value);
    }
    return (
        <div id="login-form">
            <div onClick={() => props.showLoginForm()} className="overlay" />
            <div className="main-form">
                <div className="image-header">
                    <div className="login-image"></div>
                </div>
                <div className="col login-wrap">
                    <div className="login-html">
                    <button onClick={() => props.showLoginForm()} type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                    <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked /><label htmlFor="tab-1" className="tab">Đăng nhập</label>
                    <input id="tab-2" type="radio" name="tab" className="sign-up" /><label htmlFor="tab-2" className="tab">Đăng ký</label>
                    <div className="login-form">
                        <div className="sign-in-htm">
                        <div className="group">
                            <label htmlFor="user" className="label">Username</label>
                            <input onChange={onUsernameChange} id="user" type="text" className="input" />
                        </div>
                        <div className="group">
                            <label htmlFor="pass" className="label">Mật khẩu</label>
                            <input onChange={onPasswordChange} id="pass" type="password" className="input" data-type="password" />
                        </div>
                        <div className="group keep-signed-in">
                            <input id="check" type="checkbox" className="check" defaultChecked />
                            <label htmlFor="check"><span className="icon" /> Duy trì đăng nhập</label>
                        </div>
                        <div className="group">
                        <button type="submit" className="button" defaultValue="Sign In" >Đăng nhập</button>
                        </div>
                        <div className="hr" />
                        <div className="foot-lnk">
                            <a href="#forgot">Quên mật khẩu?</a>
                        </div>
                        </div>
                        <div className="sign-up-htm">
                        <div className="group">
                            <label htmlFor="user" className="label" >Username</label>
                            <input onChange={onUsernameRegisterChange} id="user" type="text" className="input" placeholder="Username"/>
                        </div>
                        <div className="group">
                            <label htmlFor="pass" className="label" placeholder="Mật khẩu">Mật khẩu</label>
                            <input onChange={onPasswordRegisterChange} id="pass" type="password" className="input" data-type="password" placeholder="Mật khẩu" />
                        </div>
                        <div className="group">
                            <label htmlFor="pass" className="label">Repeat Password</label>
                            <input onChange={onRepeatPasswordRegisterChange} id="pass" type="password" className="input" data-type="password" placeholder="Nhập lại mật khẩu" />
                        </div>
                        <div className="group">
                            <label htmlFor="pass" className="label">Email Address</label>
                            <input onChange={onEmailRegisterChange} id="pass" type="text" className="input" placeholder="Email"/>
                        </div>
                        <div className="group button-register">
                            <button type="submit" className="button">Đăng ký</button>
                        </div>
                        <div className="hr" />
                        <div className="foot-lnk">
                            <label htmlFor="tab-1">Đã có tài khoản?
                            </label></div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>                
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
      imageDes: state.imageDes
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
    showLoginForm: () => {
        dispatch({
            type: "SHOW_FORM_LOGIN"
        })
    }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(FormLogin)