import React from 'react'
import HeaderVideo from '../Header/HeaderVideo'

import PostList from './view/PostList'
import NavForum from './view/NavForum'
import './Forum.css'

function Forum() {
    return (
        <div className="the-new-forum">
          <HeaderVideo title="THẾ GIỚI TL" />
          <NavForum />
          <PostList />
        </div>
    )
}

export default Forum

