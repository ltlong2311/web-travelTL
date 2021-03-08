import React from 'react'
import Post from './Post'

function PostList() {
    return (
        <div className="forum-page" id="forum">
            <div className="container main-content">
             <div className="row">
              <div className="col left-sidebar">
                <div className="card">
                  <table className="table stories-list">
                    <thead>
                      <tr>
                        <th scope="col">Tiêu Đề</th>
                        <th scope="col">Người Đăng</th>
                        <th scope="col">Bình Luận</th>
                        <th scope="col">Xem</th>
                        <th scope="col"><i class="far fa-calendar-alt" data-toggle="tooltip" title data-original-title="Cập nhật gần đây" /></th>
                      </tr>
                    </thead>
                    <Post />
                    <Post />
                  </table>
                </div>
              </div>

              <div className="col-md-4 center-col">
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="icon-forum pb-3">
                      {/* <i class="fas fa-users" style={{fontSize: '48px', float: 'left', color: '#919191'}}></i> */}
                      <i class="fas fa-users" style={{fontSize: '48px', color: '#313131'}}></i>
                    </div>
                    <p className="small">Chào mừng bạn đến với Diễn Đàn Du Lịch TL - Nơi dành cho tất cả mọi người thảo luận về mọi vấn đề xung quanh địa điểm du lịch thú vị, những chuyến đi,
                      và mọi thứ xung quanh sở thích cũng như trải nghiệm du lịch của chính bạn.</p>
                    <div className="small forum-rules">
                      <a href=" #"><strong>Quy Tắc Ứng Xử Tại Diễn Đàn</strong></a>
                      <br />
                      <a href=" #"><strong>Nội Quy Website</strong></a>
                    </div>
                  </div>
                </div>
                
                <div id="accordianId" className="mb-2" role="tablist" aria-multiselectable="true">
                  <div class="card">
                    <div class="card-header" role="tab" id="section1HeaderId">
                      <h5 class="mb-0">
                        <a data-toggle="collapse" data-parent="#accordianId" href="#section1ContentId" aria-expanded="true" aria-controls="section1ContentId">
                          Hỏi Đáp Du Lịch
                        </a>
                      </h5>
                    </div>
                    <div id="section1ContentId" class="collapse in" role="tabpanel" aria-labelledby="section1HeaderId">
                      <div class="card-body">
                        Section 1 content
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" role="tab" id="section2HeaderId">
                      <h5 class="mb-0">
                        <a data-toggle="collapse" data-parent="#accordianId" href="#section2ContentId" aria-expanded="true" aria-controls="section2ContentId">
                          Tìm Kiếm Tour
                        </a>
                      </h5>
                    </div>
                    <div id="section2ContentId" class="collapse in" role="tabpanel" aria-labelledby="section2HeaderId">
                      <div class="card-body">
                        Section 2 content
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" role="tab" id="section2HeaderId">
                      <h5 class="mb-0">
                        <a data-toggle="collapse" data-parent="#accordianId" href="#section3ContentId" aria-expanded="true" aria-controls="section3ContentId">
                          Đánh giá chuyến đi
                        </a>
                      </h5>
                    </div>
                    <div id="section3ContentId" class="collapse in" role="tabpanel" aria-labelledby="section3HeaderId">
                      <div class="card-body">
                        Section 3 content
                      </div>
                    </div>
                  </div>
                </div>



                <ul className="list-group mb-3 category-sidebar">
                  <li className="list-group-item ">
                    <h3><a href="/dien-dan/ban-luan-truyen/" className="category-badge">
                        <span className="color mr-1" style={{backgroundColor: '#0a8ddf'}} />
                        <span className="name"><span>Du lịch Châu Âu</span> <small>x 63,459</small></span>
                      </a></h3>
                    <div className="badge-desc text-gray">issum</div>
                  </li>
                  <li className="list-group-item ">
                    <h3><a href="/dien-dan/dich-truyen/" className="category-badge">
                        <span className="color mr-1" style={{backgroundColor: '#4a68b7'}} />
                        <span className="name"><span>Chuyến đi gia đình</span> <small>x 9,897</small></span>
                      </a></h3>
                    <div className="badge-desc text-gray">fsdf</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
    )
}

export default PostList