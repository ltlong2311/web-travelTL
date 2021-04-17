import React from 'react'
import {connect} from 'react-redux'

function TourReview(props) {

    return (
        <section className="des-content" id="tour-review">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 pt-4 icon-center">
                        <div className="icon-nation-tour">
                            <img 
                                src={props.icon}
                                alt=""
                                style={{
                                    // backgroundColor:"#26a65b",
                                }}
                            />
                        </div>
                    </div>
                    <div className="col-md-12 pt-3 text-center">
                        <h2 className="title-page">{props.tourName}</h2>
                    </div>               
                    <div className="col-md-12 text-center">
                        <div className="black-noline text-muted"> 
                            Vietnam<span className="green"> / </span>
                            Thailand<span className="green"> / </span>
                            Japan<span className="green"> / </span>
                            Myanmar<span className="green"> / </span>
                            Laos<span className="green"> / </span>
                            Campuchia<span className="green"> / </span>
                            ...
                        </div>
                    </div>
                    <div className="col-md-12 pt-5">
                        <div id="illustration-box">
                        <div className="row">
                            <div className="col-md-4 col-sm-4">
                                <div onClick={()=> props.changeImage("/img/tour/phu-quoc-3.jpg")} className="illustration-item" title="">
                                    <img src="/img/tour/phu-quoc-3.jpg" alt="" />
                                  
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4">
                                <div onClick={()=> props.changeImage("/img/tour/phu-quoc-9.jpg")} className="illustration-item" title="">
                                    <img src="/img/tour/phu-quoc-9.jpg" alt="" />
                                    
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4">
                                <div onClick={()=> props.changeImage("/img/tour/phu-quoc-7.jpg")} className="illustration-item" title="">
                                    <img src="/img/tour/phu-quoc-7.jpg" alt="" />
                                </div>
                            </div>
                        </div>                           
                        </div>
                    </div>
                    <div className="col-md-12 pt-2 pb-2 text-center">
                        <blockquote className="about-quote pb-3">
                            <p className="text-muted">Lựa chọn một chuyến đi đến những điểm du lịch tham quan nổi bật ở Châu Á. Ngắm nhìn những ngôi chùa cổ kính, tận hưởng không khí trong lành ở nơi rừng núi tự nhiên hay bơi lội tại những bãi biển tuyệt đẹp đầy mơ mộng. Châu Á tràn đầy náo nhiệt và thú vị sẽ không làm bạn cảm thấy buồn chán. Đây sẽ là vùng đất tuyệt diệu cho những kế hoạch du lịch và thư giãn của bạn!</p>
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
      changeImage: (image) => {
        dispatch({
          type: "CHANGE_SHOW_IMAGE_DES",
          image
        })
      }
    }
  }
export default connect(null,mapDispatchToProps)(TourReview)
