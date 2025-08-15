"use client";

import style from "@/app/(beforeLogin)/_component/login.module.css";
import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function LoginModal() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setMessage("");

    const result = await signIn("credentials", {
      // ✅ 프로바이더에서 정의한 키와 동일하게 보낸다
      email: id,
      password,
      redirect: false,
    });

    if (result?.ok) {
      router.replace("/home");
    } else {
      // 서버에서 에러 코드를 내려주면 result.error에 들어옴
      // 예: 'no_user' | 'wrong_password' 등 (백엔드 구현에 따라 다름)
      setMessage(result?.error ?? "로그인에 실패했습니다.");
    }
  };

  const onClickClose = () => router.back();

  const onChangeId: ChangeEventHandler<HTMLInputElement> = (e) => setId(e.target.value);
  const onChangePassword: ChangeEventHandler<HTMLInputElement> = (e) => setPassword(e.target.value);

  return (
    <div className={style.modalBackground}>
      <div className={style.modal}>
        <div className={style.modalHeader}>
          <button className={style.closeButton} onClick={onClickClose}>
            {/* ...svg 생략 */}
          </button>
          <div>로그인하세요.</div>
        </div>

        <form onSubmit={onSubmit}>
          <div className={style.modalBody}>
            <div className={style.inputDiv}>
              <label className={style.inputLabel} htmlFor="id">아이디</label>
              <input id="id" className={style.input} value={id} onChange={onChangeId} type="text" />
            </div>
            <div className={style.inputDiv}>
              <label className={style.inputLabel} htmlFor="password">비밀번호</label>
              <input id="password" className={style.input} value={password} onChange={onChangePassword} type="password" />
            </div>
          </div>

          <div className={style.message}>{message}</div>

          <div className={style.modalFooter}>
            {/* ✅ 둘 중 하나라도 비어있으면 비활성화 */}
            <button className={style.actionButton} disabled={!id || !password}>
              로그인하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
