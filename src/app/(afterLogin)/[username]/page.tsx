import style from "./profile.module.css";
import { QueryClient } from "@tanstack/react-query";
import { dehydrate } from "@tanstack/react-query";
import { getUserPosts } from "./_component/_lib/getUserPosts";
import { HydrationBoundary } from "@tanstack/react-query";
import UserPosts from "./_component/UserPosts";
import UserInfo from "./_component/UserInfo";

type Props = {
  params: Promise<{ username: string }>;
};

export default async function Profile(props: Props) {
  const { username } = await props.params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["posts", "users", username],
    queryFn: getUserPosts,
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <main className={style.main}>
      <HydrationBoundary state={dehydratedState}>
        <UserInfo username={username} />
        <div>
          <UserPosts username={username} />
        </div>
      </HydrationBoundary>
    </main>
  );
}
