"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Main from "../_component/Main";
import { useSession } from "next-auth/react";

export default function Login() {
    const router = useRouter();
    const { data: session } = useSession();

    useEffect(() => {
        router.replace('/i/flow/login');
    }, [router]);

    if (session?.user) {
        router.replace('/home');
        return null;
    }



    return (
        <>
        <Main />
      </>
    )
}

// next server 에서는 redirect 사용
// user client 에서는 useRouter 사용

// router.push는 이전페이지 히스토리를 저장해서 뒤로가기가 됨
// router.replace는 이전페이지 히스토리를 저장하지 않음