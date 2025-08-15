import styles from "./home.module.css";
import Tab from "./_component/Tab";
import PostForm from "./_component/PostForm";
import Post from "@/app/(afterLogin)/_component/Post";
import TabProvider from "./_component/TabProvider";
import { QueryClient } from "@tanstack/react-query";
import { dehydrate } from "@tanstack/react-query";
import { HydrationBoundary } from "@tanstack/react-query";

async function getPostRecommends() {
  const res = await fetch('http://localhost:3000/api/posts/recommends',
    {
      next: {
        // 업데이트 할때 사용하는 키
        tags: ['posts', 'recommends'],
        revalidate: 60,
      },
      cache: 'force-cache',
    }
  );
  const data = await res.json();
  return data;
}

export default async function Home() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['posts', 'recommends'],
    queryFn: getPostRecommends
  })
  const dehydratedState = dehydrate(queryClient);

  return (
    <main className={styles.main}>
      <HydrationBoundary state={dehydratedState}>
      <TabProvider>
        <Tab />
        <PostForm />
        <Post />
        <Post />
        <Post />
        <Post />
      </TabProvider>
      </HydrationBoundary>
    </main>
  );
}
