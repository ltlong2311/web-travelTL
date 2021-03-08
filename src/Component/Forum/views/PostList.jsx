import React from 'react'

function PostList() {
    return (
        <div className="container main-content">
             <div className="row">
        <div className="col left-sidebar">
         
          <ul className="list-group mb-3 category-sidebar">
            <li className="list-group-item ">
              <h3><a href="/dien-dan/ban-luan-truyen/" className="category-badge">
                  <span className="color mr-1" style={{backgroundColor: '#0a8ddf'}} />
                  <span className="name"><span>Bàn Luận Truyện</span> <small>x 63,459</small></span>
                </a></h3>
              <div className="badge-desc text-gray">Bàn luận về tình tiết, cốt truyện hoặc những chi tiết mà bạn tâm đắc nhất.</div>
            </li>
            <li className="list-group-item ">
              <h3><a href="/dien-dan/dich-truyen/" className="category-badge">
                  <span className="color mr-1" style={{backgroundColor: '#4a68b7'}} />
                  <span className="name"><span>Dịch Truyện</span> <small>x 9,897</small></span>
                </a></h3>
              <div className="badge-desc text-gray">Diễn đàn thảo luận về dịch thuật truyện.</div>
            </li>
            <li className="list-group-item ">
              <h3><a href="/dien-dan/truyen-sang-tac/" className="category-badge">
                  <span className="color mr-1" style={{backgroundColor: '#3bf14f'}} />
                  <span className="name"><span>Sáng Tác Truyện</span> <small>x 14,120</small></span>
                </a></h3>
              <div className="badge-desc text-gray">Bàn luận, chia sẻ kinh nghiệm sáng tác, ý tưởng sáng tác truyện chữ.</div>
            </li>
            <li className="list-group-item ">
              <h3><a href="/dien-dan/tram-phong-duong/" className="category-badge">
                  <span className="color mr-1" style={{backgroundColor: '#25a279'}} />
                  <span className="name"><span>Trảm Phong Đường</span> <small>x 59,419</small></span>
                </a></h3>
              <div className="badge-desc text-gray">trảm = chém, phong = gió</div>
            </li>
            <li className="list-group-item ">
              <h3><a href="/dien-dan/yeu-cau-truyen-moi/" className="category-badge">
                  <span className="color mr-1" style={{backgroundColor: '#f7ca01'}} />
                  <span className="name"><span>Yêu Cầu Truyện Mới</span> <small>x 9,227</small></span>
                </a></h3>
              <div className="badge-desc text-gray">Ở đây bạn có thể tạo bài viết yêu cầu truyện chưa có trong kho.</div>
            </li>
            <li className="list-group-item ">
              <h3><a href="/dien-dan/hoi-dap-gop-y/" className="category-badge">
                  <span className="color mr-1" style={{backgroundColor: '#df7e0a'}} />
                  <span className="name"><span>Hỏi Đáp - Góp Ý</span> <small>x 91,116</small></span>
                </a></h3>
              <div className="badge-desc text-gray">Những thắc mắc cần được giải đáp hoặc đề xuất ý kiến mang tính xây dựng.</div>
            </li>
            <li className="list-group-item ">
              <h3><a href="/dien-dan/thong-bao/" className="category-badge">
                  <span className="color mr-1" style={{backgroundColor: '#df0a0a'}} />
                  <span className="name"><span>Thông Báo - Sự Kiện</span> <small>x 29,406</small></span>
                </a></h3>
              <div className="badge-desc text-gray">Cập nhật thông tin sự kiện đang diễn ra hoặc những thông báo quan trọng khác.</div>
            </li>
            <li className="list-group-item ">
              <h3><a href="/dien-dan/chap-su-duong/" className="category-badge">
                  <span className="color mr-1" style={{backgroundColor: '#9e0adf'}} />
                  <span className="name"><span>Chấp Sự Đường</span> <small>x 1,986</small></span>
                </a></h3>
              <div className="badge-desc text-gray">Kênh chấp sự thông báo về các vấn đề liên quan đến chính sách, nền tảng, v.v...</div>
            </li>
            <li className="list-group-item ">
              <h3><a href="/dien-dan/huong-dan-gioi-thieu/" className="category-badge">
                  <span className="color mr-1" style={{backgroundColor: '#611e41'}} />
                  <span className="name"><span>Hướng Dẫn - Giới Thiệu</span> <small>x 7,832</small></span>
                </a></h3>
              <div className="badge-desc text-gray">Nơi chia sẻ kiến thức cùng với những thông tin cực kỳ bổ ích.</div>
            </li>
            <li className="list-group-item ">
              <h3><a href="/dien-dan/song-tu-lau/" className="category-badge">
                  <span className="color mr-1" style={{backgroundColor: '#f58de0'}} />
                  <span className="name"><span>Song Tu Lâu</span> <small>x 5,068</small></span>
                </a></h3>
              <div className="badge-desc text-gray">Nơi giao lưu kết nối, tìm đạo lữ để "song tu".</div>
            </li>
          </ul>
          <div className="card">
            <div className="card-header">
              <strong>Thành Viên Tích Cực Trong Tuần</strong>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <div className="media small">
                  <a href="/@nnhuy2004/">
                    <img className="align-self-start mr-2 rounded-circle lazyload" data-src="https://static.truyenyy.vip/avatars/male-40.jpg" alt="nnhuy2004" style={{width: '40px', height: '40px'}} />
                  </a>
                  <div className="media-body">
                    <div><a href="/@nnhuy2004/"><b>nnhuy2004</b></a></div>
                    <div className="small text-gray">Phàm Nhân</div>
                    <div className="text-muted">
                      <span>3 bài</span>
                      <span>· 1 bình</span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="media small">
                  <a href="/@nvm1997/">
                    <img className="align-self-start mr-2 rounded-circle lazyload" data-src="https://media.truyenyy.vip/profile/2020-09/thumb_68e976603f_40x40.jpg" alt="nvm1997" style={{width: '40px', height: '40px'}} />
                  </a>
                  <div className="media-body">
                    <div><a href="/@nvm1997/"><b>nvm1997</b></a></div>
                    <div className="small text-gray">Luyện Hư Hậu Kỳ</div>
                    <div className="text-muted">
                      <span>2 bài</span>
                      <span>· 14 trả lời</span>
                      <span>· 27 bình</span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="media small">
                  <a href="/@Nix.k3/">
                    <img className="align-self-start mr-2 rounded-circle lazyload" data-src="https://media.truyenyy.vip/profile/2020-04/thumb_2519c3f7fd_40x40.jpg" alt="Nix.k3" style={{width: '40px', height: '40px'}} />
                  </a>
                  <div className="media-body">
                    <div><a href="/@Nix.k3/"><b>Nix.k3</b></a></div>
                    <div className="small text-gray">Luyện Khí Tầng Bảy</div>
                    <div className="text-muted">
                      <span>2 bài</span>
                      <span>· 13 trả lời</span>
                      <span>· 10 bình</span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="media small">
                  <a href="/@Dragonf/">
                    <img className="align-self-start mr-2 rounded-circle lazyload" data-src="https://media.truyenyy.vip/profile/2019-11/thumb_ddfd89f77d_40x40.jpg" alt="Dragonf" style={{width: '40px', height: '40px'}} />
                  </a>
                  <div className="media-body">
                    <div><a href="/@Dragonf/"><b>Dragonf</b></a></div>
                    <div className="small text-gray">Luyện Khí Tầng Chín</div>
                    <div className="text-muted">
                      <span>2 bài</span>
                      <span>· 2 trả lời</span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="media small">
                  <a href="/@M%E1%BB%81uKa/">
                    <img className="align-self-start mr-2 rounded-circle lazyload" data-src="https://media.truyenyy.vip/profile/2020-02/thumb_ded2876cad_40x40.jpg" alt="MềuKa" style={{width: '40px', height: '40px'}} />
                  </a>
                  <div className="media-body">
                    <div><a href="/@M%E1%BB%81uKa/"><b>MềuKa</b></a></div>
                    <div className="small text-gray">Trúc Cơ Sơ Kỳ</div>
                    <div className="text-muted">
                      <span>2 bài</span>
                      <span>· 2 trả lời</span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="media small">
                  <a href="/@Derek251993/">
                    <img className="align-self-start mr-2 rounded-circle lazyload" data-src="https://media.truyenyy.vip/profile/2020-01/thumb_d21209291b_40x40.jpg" alt="Derek251993" style={{width: '40px', height: '40px'}} />
                  </a>
                  <div className="media-body">
                    <div><a href="/@Derek251993/"><b>Derek251993</b></a></div>
                    <div className="small text-gray">Trúc Cơ Sơ Kỳ</div>
                    <div className="text-muted">
                      <span>2 bài</span>
                      <span>· 1 trả lời</span>
                      <span>· 1 bình</span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="media small">
                  <a href="/@tiendhqt2018/">
                    <img className="align-self-start mr-2 rounded-circle lazyload" data-src="https://media.truyenyy.vip/profile/2021-02/thumb_8f4d9f38b7_40x40.jpg" alt="tiendhqt2018" style={{width: '40px', height: '40px'}} />
                  </a>
                  <div className="media-body">
                    <div><a href="/@tiendhqt2018/"><b>tiendhqt2018</b></a></div>
                    <div className="small text-gray">Luyện Khí Tầng Một</div>
                    <div className="text-muted">
                      <span>2 bài</span>
                      <span>· 1 trả lời</span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="media small">
                  <a href="/@Thanht%C3%B9ng/">
                    <img className="align-self-start mr-2 rounded-circle lazyload" data-src="https://static.truyenyy.vip/avatars/male-40.jpg" alt="Thanhtùng" style={{width: '40px', height: '40px'}} />
                  </a>
                  <div className="media-body">
                    <div><a href="/@Thanht%C3%B9ng/"><b>Thanhtùng</b></a></div>
                    <div className="small text-gray">Luyện Khí Tầng Sáu</div>
                    <div className="text-muted">
                      <span>2 bài</span>
                      <span>· 1 trả lời</span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="media small">
                  <a href="/@Bianmi147/">
                    <img className="align-self-start mr-2 rounded-circle lazyload" data-src="https://static.truyenyy.vip/avatars/male-40.jpg" alt="Bianmi147" style={{width: '40px', height: '40px'}} />
                  </a>
                  <div className="media-body">
                    <div><a href="/@Bianmi147/"><b>Bianmi147</b></a></div>
                    <div className="small text-gray">Luyện Khí Tầng Bốn</div>
                    <div className="text-muted">
                      <span>2 bài</span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="media small">
                  <a href="/@daotamzzz/">
                    <img className="align-self-start mr-2 rounded-circle lazyload" data-src="https://static.truyenyy.vip/avatars/male-40.jpg" alt="daotamzzz" style={{width: '40px', height: '40px'}} />
                  </a>
                  <div className="media-body">
                    <div><a href="/@daotamzzz/"><b>daotamzzz</b></a></div>
                    <div className="small text-gray">Luyện Khí Tầng Sáu</div>
                    <div className="text-muted">
                      <span>2 bài</span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="col center-col">
            <div className="card mb-3">
            <div className="card-body">
              <i className="iconfont icon-team mr-2" style={{fontSize: '48px', float: 'left', color: '#919191'}} />
              <p className="small">Chào mừng bạn đến với Diễn Đàn TruyenYY - Nơi dành cho các YYer thảo luận về mọi vấn đề xung quanh truyện, đọc truyện,
                các tác giả và cuộc sống xung quanh sở thích đọc truyện.</p>
              <ul className="small" style={{paddingLeft: '20px'}}>
                <li><a href="https://bit.ly/QuyTacUngXu">Quy Tắc Ứng Xử Tại Diễn Đàn</a></li>
                <li><a href="https://bit.ly/TruyenYYNoiQuy">Nội Quy Website</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}

export default PostList
