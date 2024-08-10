"use client";
import { useState } from "react";
import React from "react";
import { Typography, Input, Button } from "@material-tailwind/react";
import { useCreatePostMutation } from "@/store/services/apiSlice"; // Import the mutation hook

interface FormProps {
  onSubmit: (data: FormData) => void;
}

interface FormData {
  postcim: string;
  postleiras: string;
  postlink: string;
  type: string;
}

function Form({ onSubmit }: FormProps) {
  const [formData, setFormData] = useState<FormData>({
    postcim: '',
    postleiras: '',
    postlink: '',
    type: 'News', // Default type
  });

  const [createPost, { isLoading, error }] = useCreatePostMutation(); // Use the mutation hook

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Construct the data for the API
    const postData = {
      token: "acd2ff32c04905012bdde2a7884e4c134a191e61", // Replace with actual token management
      content: formData.postleiras,
      visibility: "PUB", // Assuming visibility is always public
      title: formData.postcim,
      image: formData.postlink,
      type_of_post: formData.type === 'News' ? 'HI' : 'ES', // Assuming type maps to HI for News and ES for Event
    };

    try {
      const result = await createPost(postData).unwrap();
      console.log("Post created successfully:", result);
      onSubmit(formData); // Optional: Call parent onSubmit if needed
    } catch (error) {
      console.error("Failed to create post:", error);
    }
  }

  return (

 
      
          
    <main className="bg-[#3B6F3F]">
      <div className="h-screen w-screen absolute">
        <img src="/circles.svg" className="absolute mix-blend-darken opacity-75 z-10 pointer-events-none" />
        <img src="/circles.svg" className="absolute mix-blend-lighten opacity-100 z-10 pointer-events-none" />
      </div>
      
      <div className="w-1/2 h-1/2 absolute top-0 translate-x-1/2 -translate-y-1/2 left-0 opacity-5 bg-[#28B61B] rounded-full mix-blend-darken z-10"></div>

      <form onSubmit={handleSubmit}>
        <div className="bg-[#FCFFF8] m-10 pb-[120px] py-5 rounded-[73px] w-6/12 mx-auto px-20 justify-center items-center">
          <h1 className="text-2xl text-center p-5 text-green-800 font-sans font-extrabold">Post feltöltése</h1>

          <div className="mx-auto w-full px-10 py-3 bg-white rounded-3xl drop-shadow-lg">
            <div className="my-5 w-full flex">
              <div className="my-5 w-full">
                <label htmlFor="type" className="text-gray-800 font-semibold">Válasszon típust:</label>
                <br />
              </div>
              
              <div className="my-5 w-full">
                <select
                  className="text-gray-700 italic bg-green-50 p-2 rounded-2xl focus:outline-green-100"
                  name="type"
                  id="type"
                  value={formData.type}
                  onChange={handleInputChange}
                >
                  <option className="text-gray-700 focus:outline-none" value="News">Hír</option>
                  <option className="text-gray-700 focus:outline-none" value="Event">Esemény</option>
                </select>
              </div>
            </div>

            <div className="my-5 w-full">
              <label htmlFor="postcim" className="text-gray-800 font-semibold">Adja meg a címet:</label>
              <br />
              <input
                className="rounded-xl text-gray-700 focus:outline-green-100 border-green-50 w-full bg-green-50"
                type="text"
                name="postcim"
                id="cim"
                value={formData.postcim}
                onChange={handleInputChange}
              />
              <br />
            </div>

            <div className="my-5 w-full">
              <label className="w-full text-gray-800 font-semibold" htmlFor="postleiras">Adja meg a leírást:</label>
              <br />
              <textarea
                className="focus:outline-green-100 rounded-xl w-full bg-green-50 text-gray-700 placeholder:text-gray-500 placeholder:italic"
                name="postleiras"
                id="leiras"
                placeholder="Kezdjen el írni..."
                value={formData.postleiras}
                onChange={handleInputChange}
              />
              <br />
            </div>

            <div className="my-5 w-full">
              <label className="w-full text-gray-800 font-semibold" htmlFor="postlink">Adja meg a kép linkjét (url):</label>
              <br />
              <input
                className="text-gray-700 focus:outline-green-100 rounded-xl w-full bg-green-50"
                type="text"
                name="postlink"
                id="link"
                value={formData.postlink}
                onChange={handleInputChange}
              />
              <br />
            </div>

            <button
              type="submit"
              className="m-5 drop-shadow-md bg-green-500 hover:bg-green-700 rounded-xl p-2 px-10 text-green-50 font-semibold"
              disabled={isLoading}
            >
              {isLoading ? "Feltöltés..." : "Feltöltés"}
            </button>

            {error && <p className="text-red-500">Failed to create post.</p>}
          </div>
        </div>
      </form>
    </main>



  

  );
}

export default Form;
