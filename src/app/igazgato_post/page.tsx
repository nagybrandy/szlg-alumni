"use client";
import { useState } from "react";
import React from "react";
import { Typography, Input, Button } from "@material-tailwind/react";
import { useCreatePostMutation } from "@/store/services/apiSlice";

interface FormData {
  postcim: string;
  postleiras: string;
  postlink: string;
  type: string;
}

export default function Page() {  // Ensure no props are being passed in this function
  const [formData, setFormData] = useState<FormData>({
    postcim: '',
    postleiras: '',
    postlink: '',
    type: 'News',
  });

  const [createPost, { isLoading, error }] = useCreatePostMutation();

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const postData = {
      token: "your-token",
      content: formData.postleiras,
      visibility: "PUB",
      title: formData.postcim,
      image: formData.postlink,
      type_of_post: formData.type === 'News' ? 'HI' : 'ES',
    };

    try {
      const result = await createPost(postData).unwrap();
      console.log("Post created successfully:", result);
    } catch (error) {
      console.error("Failed to create post:", error);
    }
  }

  return (
    <main className="bg-green-800">
      <div className="h-screen w-screen absolute">
        <img src="/circles.svg" className="absolute mix-blend-lighten opacity-100 z-10 select-none pointer-events-none" />
      </div>
      <div className="w-1/2 h-1/2 absolute top-0 translate-x-1/2 -translate-y-1/2 left-0 opacity-5 bg-[#28B61B] rounded-full mix-blend-darken z-10"></div>
      <form onSubmit={handleSubmit}>
        <div className="bg-[#FCFFF8] m-10 pb-[120px] py-5 rounded-[73px] w-6/12 mx-auto px-20 justify-center items-center">
          <h1 className="text-2xl text-center p-5 text-green-800 font-sans font-extrabold">Post feltöltése</h1>
          <div className="mx-auto w-full px-10 py-3 bg-white rounded-3xl drop-shadow-lg">
            {/* Form Fields */}
            {/* Input Handling */}
            {/* Submit Button */}
          </div>
        </div>
      </form>
    </main>
  );
}
