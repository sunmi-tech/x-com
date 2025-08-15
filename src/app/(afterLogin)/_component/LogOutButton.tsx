'use client'

import styles from './logOutButton.module.css'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
export default function LogOutButton() {
  const router = useRouter();
  const { data: me } = useSession();

    const onLogout = () => {
        signOut({ redirect: false })
        .then(() => {
          router.replace('/login')
        })
    }

    if (!me?.user) return null;

    return (
        <button className={styles.logOutButton} onClick={onLogout}>
        <div className={styles.logOutUserImage}>
          <img src={me.user.image!} alt="me.id" />
        </div>
        <div className={styles.logOutUserName}>
          <div>{me.user.name}</div>
          <div>@{me.user.id}</div>
        </div>
      </button>
    )
}