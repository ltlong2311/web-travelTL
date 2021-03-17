import React, {useState} from 'react'
import {connect} from 'react-redux'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EditPost(props) {
    
    const [postTitle, setPostTitle] = useState(props.editPost.title);  // cap nhat san du lieu trong state, dung cho truong hop nguoi dung khong sua du lieu, hoac khong sua toan bo va an Luu
    const [postCategory, setPostCategory] = useState(props.editPost.category);
    const [postContent, setPostContent] = useState(props.editPost.content);


    const isChangeTitle= (e) => {
      setPostTitle(e.target.value);
    }
    const isChangeCategory = (e) => {
      setPostCategory(e.target.value);
    }
    const isChangeContent= (e) => {
      setPostContent(e.target.value);
    }

    const notifyEditSuccess = () => toast.success(" ✔ Sửa bài đăng thành công!");

    // useEffect(() => {
    //   if(props.editPost.id){    //ton tai id = da co du lieu, -> Sua ( khac voi them moi k co id ban dau)  
    //     console.log('useEffect has been called!');
    //     setPostTitle(props.editPost.title)
    //     setPostCategory(props.editPost.category)
    //     setPostContent(props.editPost.content)
    //   }
    // }, []);

    const editDataPost = (title,category,content) => {
      var dataPostChanged = {};
      dataPostChanged.title = postTitle;
      dataPostChanged.category = postCategory;
      dataPostChanged.content = postContent;
      dataPostChanged.id= props.editPost.id;
      props.addEditData(dataPostChanged); 
      console.log("Thay đổi thành công " + JSON.stringify(dataPostChanged));
      // toast.success("Thay đổi thành công ");
      props.notifyEditPost(" ✔ Thay đổi thành công");
      props.changeEditPost(); // dong postForm

    }
    const click = () => {
      notifyEditSuccess();
    }

    // console.log(props.editPost);

    return (
        <div className="form-edit mb-3">
            <h3>Sửa bài đăng</h3>
            <div className="form-group">
                <form>
                  <label onClick={click} className="form-text">Tiêu đề</label>
                  <input 
                    type="text" 
                    onChange={(e)=>isChangeTitle(e)} 
                    defaultValue={props.editPost.title} 
                    className="form-control" 
                    name="postTitle"
                    aria-describedby="helpId" 
                    placeholder="" 
                  />
                  <label htmlFor="exampleSelect" className="form-text">Loại tin</label>
                  <select
                    defaultValue={props.editPost.category}
                    onChange={(e)=>isChangeCategory(e)}
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
                  <label className="form-text">Nội dung</label>
                  <textarea 
                    defaultValue={props.editPost.content} 
                    onChange={(e)=>isChangeContent(e)}
                    name="postContent" 
                    className="form-control" 
                    id="exampleFormControlTextarea1" 
                    rows="5" 
                  />
                  <button className="btn btn-success mt-2" type="reset" onClick={editDataPost}>Lưu</button>
                  <button className="btn btn-warning mt-2 ml-1" onClick={() =>props.changeEditPost()}>Đóng</button>
                </form>
            </div>
        </div>
    )
}



const mapStateToProps = (state, ownProps) => {
  return {
    test: state.testConnect,
    isEdit: state.isEdit,
    editPost: state.editPost
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeEditPost: () => {
      dispatch({
          type: "CHANGE_EDIT_POST"
      })
    },
    addEditData: (dataPostChanged) => {
      dispatch({type:"EDIT_POST", dataPostChanged})
    },
    notifyEditPost: (notify) => {
      dispatch({
          type: "NOTIFY_SUCCESS",
          notify
      })
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(EditPost);