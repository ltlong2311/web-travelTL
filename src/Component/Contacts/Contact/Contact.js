import React, { Component } from 'react'
import { Redirect } from 'react-router';

export default class Contact extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isRedirect: false,
        fName: "",
        fEmail: "",
        fPhone: "",
        fMess: ""
      }
    }
    isChange =(event) => {
      const ten = event.target.name;
      const giatri = event.target.value;
      this.setState({
        [ten]: giatri
      });
    }
    isFileChange= (event) => {
      const fileFull = event.target.files;      //mảng đầy đủ các thông số
      const tenAnh = event.target.files[0].name;
      console.log(fileFull);
      console.log(tenAnh);
      this.setState({
        fFile: tenAnh
      });
    }
    submitForm = (event) => { 
         event.preventDefault();
         this.setState({
           isRedirect: true
         });
    }
    getGiaTri = () => {
       var noiDung = "";
       noiDung += "Tên:" +  this.state.fName;
       noiDung += " Email:" +  this.state.fEmail; 
       noiDung += " Số điện thoại:" +  this.state.fPhone; 
       noiDung += " Loại liên hệ:" +  this.state.fType; 
       noiDung += " Thông tin:" +  this.state.fMess; 
       noiDung += " Ảnh đính kèm:" +  this.state.fFile; 
       return noiDung;
    }
    render() {
        if (this.state.isRedirect){
          alert(this.getGiaTri());
          return <Redirect to="/" />;
        }
        return (
             <div className="contact-page" id="contacts">
                <div className="container">
                  <section className="page-section" id="contact">
                    <div className="container">
                      {/* Contact Section Heading*/}
                      <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Liên hệ</h2>
                      {/* Icon Divider*/}
                      {/* <div class="divider-custom">
                            <div class="divider-custom-line"></div>
                            <div class="divider-custom-icon"><svg class="svg-inline--fa fa-star fa-w-18" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg><!-- <i class="fas fa-star"></i> */}
                    </div>
                    <div className="divider-custom-line" />
                    --&gt;
                    {/* Contact Section Form*/}
                    <div className="row">
                      <div className="col-lg-5 mx-auto">
                        {/* To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19.*/}
                        <form id="contactForm" name="sentMessage" noValidate="novalidate">
                          <div className="control-group">
                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                              <label>Name</label>
                              <input onChange={(event) => this.isChange(event)} name="fName" className="form-control" id="name" type="text" placeholder="Họ tên" required="required" data-validation-required-message="Please enter your name." aria-invalid="false" />
                              <p className="help-block text-danger" />
                            </div>
                          </div>
                          <div className="control-group">
                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                              <label>Email Address</label>
                              <input onChange={(event) => this.isChange(event)} name="fEmail" className="form-control" id="email" type="email" placeholder="Email" required="required" data-validation-required-message="Please enter your email address." />
                              <p className="help-block text-danger" />
                            </div>
                          </div>
                          <div className="control-group">
                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                              <label>Phone Number</label>
                              <input onChange={(event) => this.isChange(event)} name="fPhone" className="form-control" id="phone" type="tel" placeholder="Số điện thoại" required="required" data-validation-required-message="Please enter your phone number." />
                              <p className="help-block text-danger" />
                            </div>
                          </div>
                          <div className="control-group">
                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                              <label>Contact Type</label>
                              <select onChange={(event) => this.isChange(event)} className="form-control" name="fType" id="type">
                                <option value="Report">Báo cáo</option>
                                <option value="Feedback">Phản hồi</option>
                                <option value="Contribute">Đóng góp</option>
                              </select>
                              <p className="help-block text-danger" />
                            </div>
                          </div>
                          <div className="control-group">
                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                              <div class="form-group">
                                <label for=""></label>
                                <input onChange={(event) => this.isFileChange(event)} type="file" className="form-control-file" name="fFile" id="" placeholder="" aria-describedby="fileHelpId" />
                              </div>
                              <p className="help-block text-danger" />
                            </div>
                          </div>
                          <div className="control-group">
                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                              <label>Message</label>
                              <textarea onChange={(event) => this.isChange(event)} name="fMess" className="form-control" id="message" rows={5} placeholder="Nội dung liên hệ" required="required" data-validation-required-message="Please enter a message." defaultValue={""} />
                              <p className="help-block text-danger" />
                            </div>
                          </div>
                          <br />
                          <div id="success" />
                          <div className="form-group text-center"><button className="btn btn-primary btn-xl" onClick={(event) => this.submitForm(event)}id="sendMessageButton" type="submit">Send</button></div>
                        </form>
                      </div>
                    </div>
                  </section>
              </div>
            </div>
        )
    }
}
