import React from 'react'

function Post() {
    return (
        <tbody>
            <tr className="story-item">
            <td>
                <a href=" #" className="story-title">
                    Tìm điểm du lịch Việt Nam
                </a>
                <div className="story-meta">
                <a href=" #">Hỏi Đáp Du Lịch</a>
                <span className="mx-1">·</span>
                <time dateTime="" className="timeago">2h</time>
                <span style={{flex: 1}} />
                {/* <a href="/dien-dan/hoi-dap-gop-y/" className="category-badge">
                    <span className="name mr-1">Hỏi Đáp - Góp Ý</span>
                    <span className="color" style={{backgroundColor: '#df7e0a'}} />
                </a> */}
                </div>
                <div className="story-react">
                <span type="button" className="btn-nude mr-1">
                    <span className="topic-emo sm F" />
                    <span className="num-liked">4</span>
                    <i className="fas fa-star pl-1" style={{color:"#f7ca18"}}></i>
                </span>

                <span type="button" className="btn-nude mr-1">
                    <span className="topic-emo sm L" />
                    <span className="num-liked">2</span>
                    <i className="fas fa-heart pl-1" style={{color:"#f22613"}}></i>
                </span>
                
                </div>
            </td>
            <td>
                <div className="five-users">
                <a href="/TL/" className="user-item" data-toggle="tooltip" title data-original-title="TL">
                    <span>
                        <img data-src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Sanhohonyenphuyen.jpg" alt="TL" className=" lazyloaded" title="Travel TL" src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Sanhohonyenphuyen.jpg" /> Travel TL
                    </span>
                </a>                
                </div>
            </td>
            <td><span className="small text-muted">14</span></td>
            <td><span className="num-format small text-muted">124</span></td>
            <td><time dateTime="" className="timeago small text-muted">2h</time></td>
            </tr>
        </tbody>
    )
}

export default Post
