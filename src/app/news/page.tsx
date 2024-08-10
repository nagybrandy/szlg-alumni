'use client';
import Image from "next/image";
import { BlogCard } from "../components/BlogCard";
import { BlogContainer } from "../components/BlogContainer";
import { useGetPostsMutation } from "@/store/services/apiSlice.js";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

export default function Home() {
  const [getPosts, { data, isLoading, error }] = useGetPostsMutation();
  const [fetchedPosts, setFetchedPosts] = useState<any[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const result = await getPosts({}).unwrap();

        // Create a shallow copy of the result array and then sort it
        const sortedPosts = [...result].sort((a: { date: string }, b: { date: string }) =>  new Date(a.date).getTime() - new Date(b.date).getTime()).reverse();

        setFetchedPosts(sortedPosts);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    }

    fetchPosts();
  }, [getPosts]);

  if (error) return <div>Error!</div>;

  return (
    <main className="bg-[#3B6F3F] min-w-screen min-h-screen pt-12 overflow-clip overscroll-y-none">
      <div className="h-screen w-screen absolute">
        <img src="/circles.svg" className="absolute mix-blend-lighten opacity-100 z-10 pointer-events-none select-none" />
      </div>
      <div className="w-8/12 mx-auto bg-[#FCFFF8] h-screen pb-[100px] p-5 rounded-[5em] flex flex-col text-center relative z-0">
        <div className="w-1/2 h-1/2 absolute top-0 translate-x-1/2 -translate-y-1/2 left-0 opacity-5 bg-[#28B61B] rounded-full mix-blend-darken z-10"></div>
        <img src="/logo-vertical.svg" alt="Logo" className="size-1/5 mx-auto" />
        {isLoading ? <Loading /> :
          <BlogContainer>
            {fetchedPosts.length > 0 && fetchedPosts.map((post, index) => (
              <BlogCard key={index} {...(post as object)} />
            ))}
          </BlogContainer>}
      </div>
    </main>
  );
}
