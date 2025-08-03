import Link from 'next/link';
import styles from '@/app/page.module.css'
import Image from 'next/image';

export default function Main() {
  return (
    <>
      <div className={styles.left}>
        <Image src="/zLogo.png" alt="logo" width={400} height={400} />
      </div>
      <div className={styles.right}>
        <h1>지금 일어나고 있는 일</h1>
        <h2>지금 가입하세요.</h2>
        <Link href="/i/flow/signup" className={styles.signup}>
          회원가입
        </Link>
        <h3>이미 트위터에 가입하셨나요?</h3>
        <Link href="/login" className={styles.login}>
          로그인
        </Link>
      </div>
    </>
  );
}
