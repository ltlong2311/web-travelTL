import React from 'react'
import { HashLink as Link } from "react-router-hash-link";
import {connect} from 'react-redux'
function DestinationsReview(props) {
 
    // const showImageReview  = () => {
    //     if(props.showImageDes){
    //       return <img changeEditPost={changeEditPost} />
    //     }
    // }
    return (
        <section className="des-content" id="destinations-review">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 pt-4 text-center">
                        <i 
                          className="fas fa-globe-asia" 
                          style={{
                            color: "#26a65b",
                            fontSize:"3rem"
                          }}
                        />
                    </div>
                    <div className="col-md-12 pt-3 text-center">
                        <h2 className="title-page">ASIA</h2>
                    </div>               
                    <div className="col-md-12 text-center">
                        <div className="black-noline text-muted"> 
                            Vietnam<span className="green"> / </span>
                            Thailand<span className="green"> / </span>
                            Japan<span className="green"> / </span>
                            Myanmar<span className="green"> / </span>
                            Laos<span className="green"> / </span>
                            Campuchia<span className="green"> / </span>
                            Singapore<span className="green"> / </span>
                            China<span className="green"> / </span>
                            Malaysia<span className="green"> / </span>
                            ...
                        </div>
                    </div>
                    <div className="col-md-12 pt-3">
                        <div id="illustration-box">
                        <div className="row">
                            <div className="col-md-4 col-sm-4">
                                <div onClick={()=> props.changeImage("/img/destination1.jpg")} className="illustration-item" title="">
                                    <img src="/img/destination1.jpg" alt="" />
                                  
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4">
                                <div onClick={()=> props.changeImage("/img/destination2.jpg")} className="illustration-item" title="">
                                    <img src="/img/destination2.jpg" alt="" />
                                    
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4">
                                <div onClick={()=> props.changeImage("/img/destination3.jpg")} className="illustration-item" title="">
                                    <img src="/img/destination3.jpg" alt="" />
                                  
                                </div>
                            </div>
                        </div>                           
                        </div>
                    </div>
                    <div className="col-md-12 pt-2 text-center">
                        <blockquote className="about-quote ">
                            <p className="text-muted">Lựa chọn một chuyến đi đến những điểm du lịch tham quan nổi bật ở Châu Á. Ngắm nhìn những ngôi chùa cổ kính, tận hưởng không khí trong lành ở nơi rừng núi tự nhiên hay bơi lội tại những bãi biển tuyệt đẹp đầy mơ mộng. Châu Á tràn đầy náo nhiệt và thú vị sẽ không làm bạn cảm thấy buồn chán. Đây sẽ là vùng đất tuyệt diệu cho những kế hoạch du lịch và thư giãn của bạn!</p>
                        </blockquote>
                    </div>
                    <div className="col-md-12 fav-section text-center mt-3 mb-5">
                        <Link
                            smooth
                            to="/destinations/#destinations-tour"
                            className="nav-link pb-3"
                        >
                            <i 
                                className="fas fa-chevron-down"
                                style={{
                                    color: "#26a65b",
                                    fontSize:"2.2rem"
                                }}
                            />
                        </Link>
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
export default connect(null,mapDispatchToProps)(DestinationsReview)
