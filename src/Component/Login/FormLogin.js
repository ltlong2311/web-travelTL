import React from 'react'
import './FormLogin.css'
import {connect} from 'react-redux'
function FormLogin(props) {
    return (
        <div id="login-form">
            <div onClick={() => props.showLoginForm()} className="overlay" />
            <div className="main-form">
                <div className="login-image">
                    123
                </div>
                <div className="col login-wrap">
                    <div className="login-html">
                    <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked /><label htmlFor="tab-1" className="tab">Đăng nhập</label>
                    <input id="tab-2" type="radio" name="tab" className="sign-up" /><label htmlFor="tab-2" className="tab">Đăng ký</label>
                    <div className="login-form">
                        <div className="sign-in-htm">
                        <div className="group">
                            <label htmlFor="user" className="label">Username</label>
                            <input id="user" type="text" className="input" />
                        </div>
                        <div className="group">
                            <label htmlFor="pass" className="label">Mật khẩu</label>
                            <input id="pass" type="password" className="input" data-type="password" />
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
                            <label htmlFor="user" className="label">Username</label>
                            <input id="user" type="text" className="input" />
                        </div>
                        <div className="group">
                            <label htmlFor="pass" className="label">Password</label>
                            <input id="pass" type="password" className="input" data-type="password" />
                        </div>
                        <div className="group">
                            <label htmlFor="pass" className="label">Repeat Password</label>
                            <input id="pass" type="password" className="input" data-type="password" />
                        </div>
                        <div className="group">
                            <label htmlFor="pass" className="label">Email Address</label>
                            <input id="pass" type="text" className="input" />
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