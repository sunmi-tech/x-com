'use client';

import { useQuery } from "@tanstack/react-query";
import { getPostRecommends } from "../_lib/getPostRecommends";
import Post from "@/app/(afterLogin)/_component/Post";
import { Post as IPost } from "@/model/Post";

export default function PostRecommends() {
  const { data } = useQuery<IPost[]>({
    queryKey: ['posts', 'recommends'],
    queryFn: getPostRecommends,
    staleTime: 1000 * 60 * 5, // fresh -> stale time
    gcTime: 1000 * 60 * 10, // stale -> gc time
  });

  if (!data) return null;

  return (
    <>
      {data.map((post) => (
        <Post post={post} key={post.postId} />
      ))}
    </>
  );
}
