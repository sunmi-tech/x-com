'use client';

import { useQuery } from "@tanstack/react-query";
import Post from "@/app/(afterLogin)/_component/Post";
import { Post as IPost } from "@/model/Post";
import { getFollowingPosts } from "../_lib/getFollowingPosts";

export default function FollowingPosts() {
  const { data } = useQuery<IPost[]>({
    queryKey: ['posts', 'followings'],
    queryFn: getFollowingPosts,
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
