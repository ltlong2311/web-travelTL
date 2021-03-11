import React, {useState} from "react";

function CreatePost(props) {
  const [postTitle, setPostTitle] = useState('');
  const [postCategory, setPostCategory] = useState('');
  const [postContent, setPostContent] = useState('');
  const [postTime, setPostTime] = useState('');

  // const isChange = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   console.log(name);
  //   console.log(value);
  // }
  
  const isTitleChange = (e) => {
    setPostTitle(e.target.value);
  }
  const isCategoryChange = (e) => {
    setPostCategory(e.target.value);
  }
  const isContentChange = (e) => {
    setPostContent(e.target.value);
  }
  const addDataPost = (title,category,content) => {
    var newPost = {};
    newPost.title = postTitle;
    newPost.category = postCategory;
    newPost.content = postContent;
    props.getData(newPost);
    console.log(newPost);
  }

  return (
    <div className="create-form" id="create">
        <div className="container main-content pb-3" >
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <div id="react-root_forum-create-story">
                    <div className="Toastify" />
                      <div className="media">
                        <a href="/" className="mr-2 media-left">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Sanhohonyenphuyen.jpg" alt="ThanhLong" className="rounded-circle media-object" style={{ width: "60px", height: "60px" }}/>
                        </a>
                        <div className="media-body">
                          <a href=" /">
                            <strong style={{ fontSize: "18px" }}>ThanhLong</strong>
                          </a>
                          <div className="text-muted small">Chuyên gia du lịch</div>
                          <div className="text-muted small">19 bài diễn đàn</div>
                        </div>
                      </div>
                      <hr />
                    <form action="/forum">
                      <div className="form-group mt-3">
                        <label htmlFor="id_title" className>
                          Tiêu Đề
                        </label>
                        <input
                          onChange={(e)=>isTitleChange(e)}
                          name="postTitle"
                          id="id_title"
                          placeholder="Nhập tiêu đề ngắn gọn và có nghĩa"
                          tabIndex={1}
                          type="text"
                          className="form-control"
                        />
                        <div className="invalid-feedback">
                          Oh noes! that name is already taken
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleSelect" className>
                          Loại Tin
                        </label>
                        <select
                          onChange={(e)=>isCategoryChange(e)}
                          name="postCategory"
                          id="categorySelect"
                          tabIndex={3}
                          className="form-control"
                        >
                          <option value={0}>----</option>
                          <option>Hỏi Đáp Du Lịch</option>
                          <option>Hướng Dẫn Du Lịch</option>
                          <option>Nhận Xét Chuyến Đi</option>
                          <option>Giới Thiệu Điểm Đến</option>
                          <option>Phản Ánh Vấn Đề</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="id_content" className>
                          Nội Dung Bài Viết
                        </label>
                        <textarea name="postContent" onChange={(e)=>isContentChange(e)} class="form-control" id="exampleFormControlTextarea1" rows="15" ></textarea>
                      </div>
                      <button type="submit" onClick={addDataPost} className="btn btn-primary mt-2">
                        <i class="fas fa-check"></i> Đăng Bài Ngay
                      </button>
                    
                      <a href="/forum/" className="btn btn-secondary mt-2 ml-2">
                        Bỏ Qua
                      </a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    
  );
}


export default CreatePost;