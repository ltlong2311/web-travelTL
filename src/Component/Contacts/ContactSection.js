import React from 'react'
import './ContactSection.css'
function ContactSections(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <p>
                        <img src={props.iconContact} alt="" className="icon-contacts" />
                    </p>
                </div>
                <div className="col-md-12 text-center">
                    <h2>LIÊN LẠC</h2>
                </div>                   
                <blockquote className="col-md-12">
                    <p className="text-muted-dark">Chúng tôi sẽ giải đáp mọi vấn về du lịch trên trang. Nếu bạn có bất kỳ câu hỏi nào, hãy liên hệ với chúng tôi. Chúng tôi ở đây để giúp đỡ!</p>
                </blockquote>
                <div className="col-md-12 fav-section text-center mg-top-40 mg-bt-40">
                    <div className="btn-contact">
                        <a href="/contacts"><i className="fas fa-headset icon-contact"/>Liên hệ</a>
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default ContactSections
