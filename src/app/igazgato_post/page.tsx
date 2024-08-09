"use client"
import { useState } from "react";

import { Typography, Input, Button } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import { SimpleRegistrationForm } from "./components/forms";

export default function AuthPage() {
  return (
    <main className="">
        
        <div className="bg-white ">

            <h1>Post </h1>
            <div className="w-500 h-200">
                <label htmlFor="post_cim">Adja meg a címet</label>
                <input type="text" name="postcim" id="cim" />
            </div>
            
            <div>
                <label htmlFor="postleiras">Adja meg a leírást</label>
                <textarea name="postleiras" id="leiras"></textarea>
            </div>

            
            <div>
                <label htmlFor="postlink">Adja meg a kép linkjét</label>
                <input type="text" name="postlink" id="link" />
            </div>

            
            <input color="green" type="Button" value="Küldés" />
        </div>
            
    </main>
  );
}