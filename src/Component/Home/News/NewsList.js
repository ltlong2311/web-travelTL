import React from 'react'
import News from './News'
import data from './data.json'
import './NewsList.css'
export default function NewPage() {
    return (
        <section className="bg-lights pt-4 news">
            <div className="container">
                <div className="container pb-2 pd">
                     
                    <div className="row align-center mg-bt-40">
                        <div className="col-md-12 text-center">
                            <p>
                                <img src="img/new-logo.svg" alt="" className="icon-news" />
                            </p>
                            <h2 className="hightlight-underline mg-bt-40">TIN TỨC DU LỊCH</h2>
                            <blockquote className="about-quote">
                                <p>Cung cấp thông tin du lịch cập nhật và chính xác nhất, đem lại cho bạn những thông tin hữu ích cho việc lựa chọn và trải nghiệm chuyến du lịch tuyệt vời của mình!</p>
                            </blockquote>
                            <hr />
                        </div>
                    </div>

                    <div className="row pt-4">   
                        {/* <News img="https://image.vtc.vn/resize/CANbelY-ruqSEiQkCt5kSNKv5wFplHAY0/upload/2020/11/10/hanh-tinh-09572348.jpg" title="Ai mang co don di" quote="Nghiên cứu từ Phòng thí nghiệm Sức đẩy Phản lực của NASA (JPL) cho thấy phần băng trên Mặt trăng Europa của sao Mộc có thể phát sáng trong bóng tối."/>
                        <News img="https://image.vtc.vn/resize/46ktV8BCYO7nw1IILwIDpqwje8T5u3gE0/upload/2020/08/31/san-may-o-ta-xua-19140493.jpg" title="Ai mang co don di" quote="Nghiên cứu từ Phòng thí nghiệm Sức đẩy Phản lực của NASA (JPL) cho thấy phần băng trên Mặt trăng Europa của sao Mộc có thể phát sáng trong bóng tối."/>
                        <News img="https://image.vtc.vn/resize/46ktV8BCYO4UWi_C5u1rnFtO7fIIA8_t0/upload/2020/09/21/8-08493043.jpg" title="Ai mang co don di" quote="Nghiên cứu từ Phòng thí nghiệm Sức đẩy Phản lực của NASA (JPL) cho thấy phần băng trên Mặt trăng Europa của sao Mộc có thể phát sáng trong bóng tối."/>
                        <News img="https://image.vtc.vn/resize/CANbelY-ruqSEiQkCt5kSNKv5wFplHAY0/upload/2020/11/10/hanh-tinh-09572348.jpg" title="Ai mang co don di" quote="Nghiên cứu từ Phòng thí nghiệm Sức đẩy Phản lực của NASA (JPL) cho thấy phần băng trên Mặt trăng Europa của sao Mộc có thể phát sáng trong bóng tối."/>
                        <News img="https://image.vtc.vn/resize/46ktV8BCYO7nw1IILwIDpqwje8T5u3gE0/upload/2020/08/31/san-may-o-ta-xua-19140493.jpg" title="Ai mang co don di" quote="Nghiên cứu từ Phòng thí nghiệm Sức đẩy Phản lực của NASA (JPL) cho thấy phần băng trên Mặt trăng Europa của sao Mộc có thể phát sáng trong bóng tối."/>
                        <News img="https://image.vtc.vn/resize/46ktV8BCYO4UWi_C5u1rnFtO7fIIA8_t0/upload/2020/09/21/8-08493043.jpg" title="Ai mang co don di" quote="Nghiên cứu từ Phòng thí nghiệm Sức đẩy Phản lực của NASA (JPL) cho thấy phần băng trên Mặt trăng Europa của sao Mộc có thể phát sáng trong bóng tối."/> */}
                        {
                            data.map((value,key) => {
                                return(
                                <News key={key}
                                newsId={value.id}
                                img={value.img}
                                title={value.title}
                                quote={value.quote}/>
                                )
                            })
                        }
                        
                    </div>
                </div>
            </div>
        </section>
       
    )
}
