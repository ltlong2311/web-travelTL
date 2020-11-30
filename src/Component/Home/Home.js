import React, { Component } from 'react'
import Header from '../Header/Header';
import Body from './Body/Body';
import News from './News/News';
import data from '../data.json'

class Home extends Component {
    
    render() {
        
        
        return (
            <div>  
                <div>
                    <Header title="LT NEWS"/>
                </div>
                <div className="container">
                    <Body />
                </div>
                <div className="container mb-4 pd">
                    <div className="row">   
                        <News img="https://image.vtc.vn/resize/CANbelY-ruqSEiQkCt5kSNKv5wFplHAY0/upload/2020/11/10/hanh-tinh-09572348.jpg" title="Ai mang co don di" quote="Nghiên cứu từ Phòng thí nghiệm Sức đẩy Phản lực của NASA (JPL) cho thấy phần băng trên Mặt trăng Europa của sao Mộc có thể phát sáng trong bóng tối."/>
                        <News img="https://image.vtc.vn/resize/46ktV8BCYO7nw1IILwIDpqwje8T5u3gE0/upload/2020/08/31/san-may-o-ta-xua-19140493.jpg" title="Ai mang co don di" quote="Nghiên cứu từ Phòng thí nghiệm Sức đẩy Phản lực của NASA (JPL) cho thấy phần băng trên Mặt trăng Europa của sao Mộc có thể phát sáng trong bóng tối."/>
                        <News img="https://image.vtc.vn/resize/46ktV8BCYO4UWi_C5u1rnFtO7fIIA8_t0/upload/2020/09/21/8-08493043.jpg" title="Ai mang co don di" quote="Nghiên cứu từ Phòng thí nghiệm Sức đẩy Phản lực của NASA (JPL) cho thấy phần băng trên Mặt trăng Europa của sao Mộc có thể phát sáng trong bóng tối."/>
                        <News img="https://image.vtc.vn/resize/CANbelY-ruqSEiQkCt5kSNKv5wFplHAY0/upload/2020/11/10/hanh-tinh-09572348.jpg" title="Ai mang co don di" quote="Nghiên cứu từ Phòng thí nghiệm Sức đẩy Phản lực của NASA (JPL) cho thấy phần băng trên Mặt trăng Europa của sao Mộc có thể phát sáng trong bóng tối."/>
                        <News img="https://image.vtc.vn/resize/46ktV8BCYO7nw1IILwIDpqwje8T5u3gE0/upload/2020/08/31/san-may-o-ta-xua-19140493.jpg" title="Ai mang co don di" quote="Nghiên cứu từ Phòng thí nghiệm Sức đẩy Phản lực của NASA (JPL) cho thấy phần băng trên Mặt trăng Europa của sao Mộc có thể phát sáng trong bóng tối."/>
                        <News img="https://image.vtc.vn/resize/46ktV8BCYO4UWi_C5u1rnFtO7fIIA8_t0/upload/2020/09/21/8-08493043.jpg" title="Ai mang co don di" quote="Nghiên cứu từ Phòng thí nghiệm Sức đẩy Phản lực của NASA (JPL) cho thấy phần băng trên Mặt trăng Europa của sao Mộc có thể phát sáng trong bóng tối."/>
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
        )
    }
}
export default Home