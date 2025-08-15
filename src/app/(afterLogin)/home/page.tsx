import styles from "./home.module.css";
import Tab from "./_component/Tab";
import PostForm from "./_component/PostForm";
import TabProvider from "./_component/TabProvider";
import { QueryClient } from "@tanstack/react-query";
import { dehydrate } from "@tanstack/react-query";
import { HydrationBoundary } from "@tanstack/react-query";
import { getPostRecommends } from "./_lib/getPostRecommends";
import PostRecommends from "./_component/PostRecommends";

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
        <PostRecommends />
      </TabProvider>
      </HydrationBoundary>
    </main>
  );
}
