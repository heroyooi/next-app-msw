'use client';

import { useQuery } from '@tanstack/react-query';
import { getPostRecommends } from '@/app/(afterLogin)/home/_lib/getPostRecommends';
import Post from '../../_component/Post';
import { Post as IPost } from '@/model/Post';

export default function PostRecommends() {
  const { data } = useQuery<IPost[]>({
    queryKey: ['posts', 'recommends'],
    queryFn: getPostRecommends,
    staleTime: 60 * 1000, // fresh -> stale
    gcTime: 5 * 60 * 1000, // 5분
  });

  return data?.map((post) => <Post key={post.postId} post={post} />);
}
