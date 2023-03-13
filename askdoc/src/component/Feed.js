import React from 'react';
import '../css/Feed.css';
import Askbox from './Askbox';
import Post from './Post';
function Feed() {
  return (
    <div className="feed">
     <Askbox/>
     <Post />
     <Post />
     <Post />
    </div>
  );
}

export default Feed;