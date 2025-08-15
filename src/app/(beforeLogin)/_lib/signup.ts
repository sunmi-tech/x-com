"use server";

import { redirect } from "next/navigation";
import { signIn } from "@/auth";

export default async function onSubmit(
  prevState: { message: string | null },
  formData: FormData
) {
  if (!formData.get("id")) {
    return { message: "no_id" };
  }

  if (!formData.get("name")) {
    return { message: "no_name" };
  }

  if (!formData.get("password")) {
    return { message: "no_password" };
  }

  if (!formData.get("image")) {
    return { message: "no_image" };
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const response = await fetch(`${baseUrl}/api/users`, {
    method: "post",
    body: formData,
    credentials: "include",
  });
  console.log(response.status);

  if (response.status === 403) {
    return { message: "user_exists" };
  }

  console.log(response.json());
  redirect("/home");
  await signIn("credentials", {
    // ✅ 프로바이더에서 정의한 키와 동일하게 보낸다
    email: formData.get("id"),
    password: formData.get("password"),
    redirect: false,
  });
}
