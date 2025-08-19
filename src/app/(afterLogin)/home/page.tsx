import styles from "./home.module.css";
import Tab from "./_component/Tab";
import PostForm from "./_component/PostForm";
import TabProvider from "./_component/TabProvider";
import { QueryClient } from "@tanstack/react-query";
import { dehydrate } from "@tanstack/react-query";
import { HydrationBoundary } from "@tanstack/react-query";
import { getPostRecommends } from "./_lib/getPostRecommends";
import TabDicider from "./_component/TabDicider";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey: ['posts', 'recommends'],
    queryFn: getPostRecommends,
    initialPageParam: 0,//cursor 값
  })
  const dehydratedState = dehydrate(queryClient);

  return (
    <main className={styles.main}>
      <HydrationBoundary state={dehydratedState}>
      <TabProvider>
        <Tab />
        <PostForm me={session} />
        <TabDicider />
      </TabProvider>
      </HydrationBoundary>
    </main>
  );
}
