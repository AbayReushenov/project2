import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return <div className={s.content}>
    <div>
      <img src='https://live.staticflickr.com/65535/50377958833_2914e08ea8_c.jpg' />
    </div>
    <div>
      ava + description
    </div>
    <div>
      My posts
      <div>
        New post
      </div>
      <div className={s.posts}>
        <div className={s.item}>
          post 1
        </div>
        <div className='item'>
          post 2
        </div>
      </div>
    </div>
  </div>
}

export default Profile;