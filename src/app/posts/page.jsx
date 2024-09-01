import { getPosts } from "@/services/postApi";
import Link from "next/link";
import React from "react";
export const metadata = {
  title: "Posts",
  keywords: ["Next-hero", "best-search"],
  description: "user search results",
};

const page = async () => {
  const postsData = await getPosts();
  return <div className="h-screen">
    <h1>All Page</h1>
    <div className="grid grid-cols-4 gap-6 px-4">
        {postsData?.slice(0, 12).map(post => <div key={post.id} className="border-2 border-black p-4">
            <h2>title: {post.title}</h2>
            <p>Description: {post.body}</p>
            <button className="bg-red-500 px-4 py-2">
                <Link href={`/posts/${post?.id}`}>See Details</Link>
            </button>
        </div>)}
    </div>
  </div>
};
export default page;
