"use client"
import { useState } from "react";
import React from "react";
import { Typography, Input, Button } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import { SimpleRegistrationForm } from "./components/forms";

interface FormProps {
  onSubmit: (data: FormData) => void;
}

interface FormData {
  postcim: string;
  postleiras: string;
  postlink: string;
}

function Form({ onSubmit }: FormProps) {
  const [formData, setFormData] = React.useState<FormData>({ postcim: '', postleiras: '', postlink: '' });

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit(formData);
  }



  return (
    <main className="Igazgato_post">

      
      <form  onSubmit={handleSubmit}>


        <div className="bg-green-50 m-10 pb-[120px] py-5 rounded-[73px]  w-6/12 mx-auto   px-20 justify-center items-center "   >

          <h1 className="text-2xl text-center p-5  text-green-800 font-sans font-extrabold ">Post feltöltése</h1>

          <div className="mx-auto w-full px-10 py-3 bg-white rounded-3xl drop-shadow-lg ">


            <div className="my-5 w-full flex">
              <div className="my-5 w-full ">
                <label htmlFor="tipus" className="text-gray-800 font-semibold">Válasszon típust:</label>
                <br />
              </div>
              
              <div className="my-5 w-full ">
                <select className=" text-gray-700 italic bg-green-50 p-2 rounded-2xl focus:outline-green-100" name="type" id="type">
                  <option className="text-gray-700 focus:outline-none" value="News">Hír</option>
                  <option className="text-gray-700 focus:outline-none" value="Event">Esemény</option>
                </select>
              </div>

            </div>

            <div className="my-5 w-full ">
              <label htmlFor="postcim" className="text-gray-800 font-semibold">Adja meg a címet:</label>
              <br />
              <input className="rounded-xl text-gray-700 focus:outline-green-100 border-green-50 w-full bg-green-50" type="text" name="postcim" id="cim" value={formData.postcim} onChange={handleInputChange}  />
              <br />
            </div>


            <div className="my-5 w-full ">
              <label className="w-full text-gray-800 font-semibold" htmlFor="postleiras">Adja meg a leírást:</label>
              <br />
              <textarea className=" focus:outline-green-100 rounded-xl w-full bg-green-50 text-gray-700  placeholder:text-gray-500 placeholder:italic" name="postleiras" id="leiras" placeholder="Kezdjen el írni..." ></textarea>
              <br />
            </div>


            <div className="my-5 w-full" >
              <label className="w-full text-gray-800 font-semibold" htmlFor="postlink">Adja meg a kép linkjét (url):</label>
              <br />
              <input className= " text-gray-700 focus:outline-green-100  rounded-xl w-full bg-green-50 " type="text" name="postlink" id="link" value={formData.postlink} onChange={handleInputChange} />
              <br />
            </div>

            <button type="submit" className="m-5 drop-shadow-md bg-green-500 hover:bg-green-700 rounded-xl p-2  px-10 text-green-50 font-semibold " >Feltöltés</button>



          </div>
        </div>
      </form>

    </main>
  );
}

export default Form;