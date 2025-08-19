'use client'

import styles from './logOutButton.module.css'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Session } from 'next-auth';

type Props = {
  me: Session['user'];
}
export default function LogOutButton({me}: Props) {
  const router = useRouter();

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