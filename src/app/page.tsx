import Image from "next/image";
import { BlogCard } from "./components/BlogCard";
import posts from './components/blog.json'
import { BlogContainer } from "./components/BlogContainer";
export default function Home() {
  return (
    <main className="bg-[#3B6F3F] min-w-screen min-h-screen pt-12 overflow-clip overscroll-y-none">
      <div className="h-screen w-screen absolute">
        <img src="/circles.svg" className="absolute  mix-blend-darken opacity-75 z-10 pointer-events-none" />
        <img src="/circles.svg" className="absolute  mix-blend-lighten opacity-100 z-10 pointer-events-none" />
      </div>
      <div className="w-8/12 mx-auto bg-[#FCFFF8] h-screen pb-[100px] p-5 rounded-[5em] flex flex-col text-center relative z-0">
        <div className="w-1/2 h-1/2 absolute top-0 translate-x-1/2 -translate-y-1/2 left-0 opacity-5 bg-[#28B61B] rounded-full mix-blend-darken z-10"></div>
        <img src="/logo-vertical.svg" alt="Logo" className="size-1/5 mx-auto" />
        <BlogContainer>
          {posts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </BlogContainer>
      </div>
    </main>
  )
};
