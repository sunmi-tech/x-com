"use client"

import { useQuery } from "@tanstack/react-query";
import { getFollowRecommends } from "../_lib/getFollowRecommends";
import { User } from "@/model/User";
import FollowRecommend from "./FollowRecommend";

export default function FollowRecommendSection() {
    const { data } = useQuery<User[]>({
        queryKey: ['users', 'followRecommends'],
        queryFn: getFollowRecommends,
        staleTime: 1000 * 60 * 5, // fresh -> stale time
        gcTime: 1000 * 60 * 10, // stale -> gc time
    });

    return (
        <>
        {data?.map((user) => (
            <FollowRecommend user={user} key={user.id} />
        ))}
        </>
    )
}