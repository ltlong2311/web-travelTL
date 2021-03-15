import React from 'react'
import {connect} from 'react-redux'

function Post(props) {
    const actionEdit = () => {
        props.changeEditPost(); 
        // console.log(props.postInfo);
        props.editPost(props.postInfo);  // truyen postInfo -> postEditInfo
    }

    const actionDelete = () => {
        console.log(props.postInfo);
        props.deletePost(props.postInfo.id); 
    }

    return (
        <tbody>
            <tr className="story-item">
            <td>
                <a href=" #" className="story-title">
                    {props.title} 
                </a>
                <i onClick={actionEdit} className="fas fa-pen ml-2 icon-edit"></i>
                <i onClick={actionDelete} className="fas fa-trash-alt ml-1 icon-delete"></i>
                <div className="story-meta">
                    <a href=" #">{props.category}</a>
                    <span className="mx-1">·</span>
                    <time dateTime="" className="timeago">2h</time>
                    <span style={{flex: 1}} />
                </div>
                <div className="story-react">
                <span type="button" className="btn-nude mr-1">
                    <span className="topic-emo sm F" />
                    <span className="num-liked">5</span>
                    <i className="fas fa-star pl-1" style={{color:"#f7ca18"}}></i>
                </span>

                <span type="button" className="btn-nude mr-1">
                    <span className="topic-emo sm L" />
                    <span className="num-liked">3</span>
                    <i className="fas fa-heart pl-1" style={{color:"#f22613"}}></i>
                </span>
                
                </div>
            </td>
            <td>
                <div className="five-users">
                <a href="/TL/" className="user-item" data-toggle="tooltip" title="" data-original-title="TL">
                    <span>
                        <img data-src={props.posterImg} alt="TL" className=" lazyloaded" title="Travel TL" src={props.posterImg} /> {props.poster}
                    </span>
                </a>                
                </div>
            </td>
            <td><span className="small text-muted">14</span></td>
            <td><span className="num-format small text-muted">124</span></td>
            <td><time dateTime="" className="timeago small text-muted">5m</time></td>
            </tr>
        </tbody>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        isEdit: state.isEdit
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeEditPost: () => {
            dispatch({
                type: "CHANGE_EDIT_POST"
            })
        },
        editPost: (postEditInfo) => {
            dispatch({
                type: "GET_EDIT_POST",
                postEditInfo
            })
        },
        deletePost: (idPostDelete) => {
            dispatch({
                type: "DELETE_POST",
                idPostDelete
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Post)
