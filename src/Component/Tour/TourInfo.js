import React from "react";

function TourInfo() {
  return (
    <section className="des-content" id="tour-info">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <p className="pt-3">
              <img
                src="/img/icon-menu/icon-infos.png"
                width="65px"
                height="65px"
                alt=""
                className="icon-bg-white icon-schedule"
              />
            </p>
          </div>
          <div className="col-md-12 text-center">
            <h2 className="highlight-underline">THÔNG TIN TOUR</h2>
          </div>
          <blockquote className="col-md-12">
            <p className="text-muted-dark">
              Chúng tôi sẽ giải đáp mọi vấn về du lịch trên trang. Nếu bạn có
              bất kỳ câu hỏi nào, hãy liên hệ với chúng tôi. Chúng tôi ở đây để
              giúp đỡ!
            </p>
          </blockquote>
          <div className="col-md-12 fav-section text-center mg-top-40 mg-bt-40">
            <div className="maps">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32344111.848402362!2d98.14384585425101!3d8.277315802283354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3233af605e720cd5%3A0x28a70f18542d1b91!2sSouth%20East%20Asia!5e0!3m2!1sen!2s!4v1573615244373!5m2!1sen!2s"
                width="100%"
                height="400px"
                frameBorder={0}
                style={{ border: 0 }}
                allowFullScreen
                title="tour-maps"
              />
            </div>
          </div>
          <div className="col-md-12 text-left mg-bt-40">
            <div className="schedule-tour">
              <div className="title">
                <i className="far fa-map schedule"/> Lịch trình
              </div>
              <div className="days pl-2">
                <div id="accordianId" role="tablist" aria-multiselectable="true">
                  <div className="card">
                    <div className="card-header" role="tab" id="section1HeaderId">
                      <h5 className="mb-0">
                        <a data-toggle="collapse" data-parent="#accordianId" href="#day-1" aria-expanded="true" aria-controls="day-1">
                          <div className="titDay"><span>NGÀY 1 |</span> HÀ NỘI – PHÚ QUỐC</div>
                        </a>
                        {/* <span className="collapsed"><img src="images/icon-menu/icon-arrow-down.png" alt="" /></span> */}
                      </h5>
                    </div>
                    <div id="day-1" className="collapse in" role="tabpanel" aria-labelledby="section1HeaderId">
                      <div className="card-body">
                        Đoàn khởi hành ra bến tàu, Quý khách xuống thuyền du ngoạn cảnh biển, tham gia chương trình câu cá, tắm biển và lặn ngắm thế giới lung linh sắc màu của san hô.<br/>
                        Đoàn tham quan Sunset Sanato Beach Club, nơi được mệnh danh là “Điểm ngắm hoàng hôn đẹp nhất đảo Ngọc”. tọa lạc ngay trung tâm Bãi Trường. Không gian biển ở Sunset Sanato Beach Club rất thoáng tầm nhìn và được điểm tô bằng nhiều công trình kiến trúc cực độc đáo, mang dấu ấn khó phai. Và có lẽ chính những khối kiến trúc kì lạ và đầy sáng tạo ấy đã giúp cho Sunset Sanato Beach Club trở thành điểm check-in siêu độc mà ai đến Phú Quốc cũng phải "đỏm dáng" làm ngay vài kiểu.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" role="tab" id="section2HeaderId">
                      <h5 className="mb-0">
                        <a data-toggle="collapse" data-parent="#accordianId" href="#day-2" aria-expanded="true" aria-controls="day-2">
                          <div className="titDay"><span>NGÀY 2 |</span> PHÚ QUỐC – VINWONDER – SAFARI – HÒN THƠM</div>
                        </a>
                      </h5>
                    </div>
                    <div id="day-2" className="collapse in" role="tabpanel" aria-labelledby="section2HeaderId">
                      <div className="card-body">
                      Quý khách có thể tự do tắm biển, nghỉ ngơi tại khách sạn hoặc Quý khách có thể chọn các điểm tham quan tham khảo như sau: <br/> 
                      <br/> *Lựa chọn 1: Khám phá CÔNG VIÊN CHỦ ĐỀ VINWONDERS PHÚ QUỐC <br /> 
                      ( Chi phí tự túc; không bao gồm: phương tiện vận chuyển, vé tham quan Vinwonders + 2 bữa ăn trưa, tối )<br /> 
                      
                      <br/> *Lựa chọn 2: Khám phá CÔNG VIÊN CHĂM SÓC - BẢO TỒN ĐỘNG VẬT VINPEARL SAFARI<br /> 
                      (Chi phí tự túc; không bao gồm: phương tiện vận chuyển, vé tham quan Safari  + 1 bữa ăn tối)<br /> 

                      <br/> *Lựa chọn 3: Trải nghiệm Sun World Hon Thom Nature Park – Cáp treo ba dây vượt biển dài nhất Thế Giới.<br /> 
                      (Chi phí tự túc; không bao gồm: phương tiện vận chuyển, vé cáp treo + 2 bữa ăn trưa + tối)
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" role="tab" id="section3HeaderId">
                      <h5 className="mb-0">
                        <a data-toggle="collapse" data-parent="#accordianId" href="#day-3" aria-expanded="true" aria-controls="day-3">
                          <div className="titDay"><span>NGÀY 3 |</span> PHÚ QUỐC – NAM ĐẢO </div>
                        </a>
                      </h5>
                    </div>
                    <div id="day-3" className="collapse in" role="tabpanel" aria-labelledby="section3HeaderId">
                      <div className="card-body">
                      Tham quan Cơ sở nuôi cấy ngọc trai, tìm hiểu quy trình nuôi cấy và Quý khách có thể chọn lựa những sản phẩm làm đẹp, trang sức làm từ ngọc trai để làm quà cho người thân. <br /> 
                      Viếng thăm Chùa Hộ Quốc (hay Thiền Viện Trúc Lâm Hộ Quốc), nằm trên sườn núi hướng ra biển ở phía cuối của một con đường uốn khúc qua các triền núi của đảo Phú Quốc, Thiền Viện Trúc Lâm Hộ Quốc có thể được xem là một trong những ngôi chùa có địa thế đẹp nhất Việt Nam.
                      </div>
                    </div>
                  </div>
                  
                  <div className="card">
                    <div className="card-header" role="tab" id="section2HeaderId">
                      <h5 className="mb-0">
                        <a data-toggle="collapse" data-parent="#accordianId" href="#day-4" aria-expanded="true" aria-controls="day-4">
                        <div className="titDay"><span>NGÀY 4 |</span> PHÚ QUỐC – VINPEARLAND </div>
                        </a>
                      </h5>
                    </div>
                    <div id="day-4" className="collapse in" role="tabpanel" aria-labelledby="section2HeaderId">
                      <div className="card-body">
                      Khám phá KHU VUI CHƠI GIẢI TRÍ VINPEARLAND <br/>
                      (Chi phí tự túc; không bao gồm: phương tiện vận chuyển, vé tham quan Vinpearl + 1 bữa ăn trưa, 1 bữa ăn tối)
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" role="tab" id="section2HeaderId">
                      <h5 className="mb-0">
                        <a data-toggle="collapse" data-parent="#accordianId" href="#day-5" aria-expanded="true" aria-controls="day-5">
                          <div className="titDay"><span>NGÀY 5 |</span> PHÚ QUỐC - HÀ NỘI</div>
                        </a>
                      </h5>
                    </div>
                    <div id="day-5" className="collapse in" role="tabpanel" aria-labelledby="section2HeaderId">
                      <div className="card-body">
                      Tham quan làng chài Hàm Ninh, quý khách có thể thưởng thức đặc sản Hàm Ninh hoặc mua về làm quà cho người thân: ghẹ, hải mã sống ngâm rượu, hải mã chiên 
                      giòn, quả dứa biển và trái mỏ quạ để ngâm rượu thuốc…. đây là những đặc sản chỉ có ở Phú Quốc (chi phí tự túc).<br/>
                      Hướng dẫn viên tiễn đoàn ra sân bay Phú Quốc, đón chuyến bay về TP.HCM.<br/>
                      Kết thúc chương trình tham quan, chia tay và hẹn gặp lại. 
                      </div>
                    </div>
                  </div>     
                </div>
              </div>
            </div>
         
          </div>
          <div className="col-md-12 text-left mg-bt-40">
            <div className="important-info">
              <div className="title">
                <i className="fas fa-info-circle icon-tour-info"/> Thông tin quan trọng
              </div>
                <div className="content pl-2 pt-2 info-service">
                  <strong> Dịch vụ bao gồm:</strong>
                  <div className="pl-2 pt-2 pb-2">
                    <li> Vé máy bay tùy theo loại tour. </li>
                    <li>  Xe tham quan (xe 16 chỗ, 29 chỗ, 35 chỗ, 45 chỗ) tùy theo số lượng khách thực tế trên chuyến đi. </li>
                    <li>  Khách sạn tiêu chuẩn đầy đủ tiện nghi 2 khách người lớn/ phòng. Nếu lẻ người thứ 3, đóng phụ phí phòng đơn hoặc ngủ ghép phòng 3 khách. </li>
                    <li>Khách sạn tương đương 3 sao (loại phòng standard): Nice life, GaiA, ... hoặc tương đương.</li>
                    <li>Khách sạn tương đương 4 sao (loại phòng standard): Hòa Bình, Ocean Pearl, ... hoặc tương đương.</li>
                    <li> Ăn phụ: 2 bữa sáng. </li>
                    <li> Ăn chính: 4 bữa chính tiêu chuẩn 130.000 đồng/bữa.</li>
                    <li> Vé tham quan theo chương trình. </li>
                    <li> Vé câu cá, ngắm san hô.</li>
                    <li> Hướng dẫn viên tiếng Việt vui vẻ nhiệt tình suốt chuyến đi.</li>
                    <li> Bảo hiểm với mức bồi thường tối đa 100.000.000 đồng/trường hợp. Không áp dụng cho khách từ 80 tuổi trở lên.</li>
                    <li> Quà tặng: nón du lịch Việt, nước, khăn lạnh.</li>
                  </div>
                  <strong> Dịch vụ không bao gồm:</strong>
                  <div className="pl-2 pt-2 pb-2">
                    <li> Vé bay quốc tế (từ nơi khác tới). </li>
                    <li> Bữa ăn ngoài các bữa chính đã đề cập.</li>
                    <li> Phục vụ trong khách sạn. </li>
                    <li> Tiêu phí cá nhân. </li>
                    <li> Các dịch vụ khác nằm ngoài những mục "dịch vụ bao gồm" đã nêu ở trên.</li>
                  </div>
                </div>  
            </div>
          </div>
          <div className="col-md-12 text-left mg-bt-40">
            <div className="book-tour">
              <div className="title">
                <i className="far fa-compass icon-tour-info"/> Tour khởi hành
              </div>
              <div className="content table-responsive">
                <table className="table table-sm">
                  <thead className="category-topic">
                    <tr>
                      <th scope="col">STT</th>
                      <th style={{minWidth:"130px"}} scope="col">Ngày khởi hành</th>
                      <th style={{minWidth:"200px"}} scope="col">Thông tin chuyến đi</th>
                      <th scope="col">Giá</th>
                      <th style={{minWidth:"90px"}} scope="col">Trạng thái</th>
                      <th style={{minWidth:"170px"}} scope="col">Book</th>
                    </tr>
                  </thead>
                  <tbody className="category-list">
                    <tr>
                      <td>1</td>
                      <td>21/4/2021</td>
                      <td>Vé máy bay giá rẻ, Khách sạn 3 sao</td>
                      <td><strong>4.200.000đ</strong></td>
                      <td>Còn tour</td>
                      <td>
                        <div className="btn-group">
                          <span className="btn btn-book mr-2">Đặt tour</span>
                          <span className="btn btn-view-detail"> Chi tiết</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>24/4/2021</td>
                      <td>Vé máy bay giá rẻ, Khách sạn 4 sao</td>
                      <td><strong>4.900.000đ</strong></td>
                      <td>Còn tour</td>
                      <td>
                        <div className="btn-group">
                          <span className="btn btn-book mr-2">Đặt tour </span>
                          <span className="btn btn-view-detail"> Chi tiết</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>25/4/2021</td>
                      <td>Vé máy bay hạng trung, Khách sạn 4 sao</td>
                      <td><strong>5.300.000đ</strong></td>
                      <td>Còn tour</td>
                      <td>
                        <div className="btn-group">
                          <span className="btn btn-book mr-2">Đặt tour</span>
                          <span className="btn btn-view-detail"> Chi tiết</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>30/4/2021</td>
                      <td>Vé máy bay giá rẻ, Khách sạn 3 sao</td>
                      <td><strong>4.200.000đ</strong></td>
                      <td>Còn tour</td>
                      <td>
                        <div className="btn-group">
                          <span className="btn btn-book mr-2">Đặt tour </span>
                          <span className="btn btn-view-detail"> Chi tiết</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>30/4/2021</td>
                      <td>Vé máy bay hạng trung, Khách sạn 4 sao</td>
                      <td><strong>5.300.000đ</strong></td>
                      <td>Còn tour</td>
                      <td>
                        <div className="btn-group">
                          <span className="btn btn-book mr-2">Đặt tour</span>
                          <span className="btn btn-view-detail"> Chi tiết</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-md-12 text-left mg-bt-40">
            <div className="tour-note">
              <div className="title">
                <i className="far fa-sticky-note icon-tour-info"/> Lưu ý
              </div>
              <div className="content pl-2 pb-3">
                <span className="note">
                  * Khi đăng ký tour khách hàng bắt buộc phải gởi giấy tờ tùy thân cho đơn vị du lịch để vào tên xuất vé và mua bảo hiểm du lịch. 
                  Những giấy tờ cá nhân của khách hàng (CMND hoặc Passport) thuộc về trách nhiệm của khách hàng. Mọi vấn đề như hình ảnh, thông tin 
                  giấy tờ trong bản gốc bị mờ, không rõ ràng; Passport, CMND hết hạn,… không đúng quy định của pháp luật Việt Nam, Travel TL sẽ không
                  chịu trách nhiệm và sẽ không hoàn trả bất cứ chi phí phát sinh nào.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TourInfo;
