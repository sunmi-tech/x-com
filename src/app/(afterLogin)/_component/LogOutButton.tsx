'use client'

import styles from './logOutButton.module.css'

export default function LogOutButton() {

    const me = {
        // mock data
        id : 'sunmi',
        image : '/5Udwvqim.jpg',
        nickname : 'sunmi',
    }

    const onLogout = () => {
        console.log('logout')
    }

    return (
        <button className={styles.logOutButton} onClick={onLogout}>
        <div className={styles.logOutUserImage}>
          <img src={me.image} alt="me.id" />
        </div>
        <div className={styles.logOutUserName}>
          <div>{me.nickname}</div>
          <div>@{me.id}</div>
        </div>
      </button>
    )
}