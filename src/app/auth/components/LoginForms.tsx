import React, { useState } from 'react';
import { Typography, Input, Button } from "@material-tailwind/react";
import { useAuthTokenMutation } from "@/store/services/apiSlice";

export function SimpleRegistrationForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [login, { data, error }] = useAuthTokenMutation();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
    const credentials = { username, password };
    const response = await login(credentials).unwrap();
    // Handle successful login
    } catch (error) {
    // Handle login error
    }
  };


  return (
  <form 
    className="flex flex-col justify-center items-center w-full h-full gap-y-4"
    onSubmit={handleSubmit}
  >
    <Typography variant="h5" color="black" className="w-4/5">Bejelentkezés</Typography>
    <Typography variant="h6" color="gray" className="w-4/5">Felhasználónév/E-mail</Typography>
    <div className="w-4/5">
    <Input 
      label="Felhasználónév/E-mail" 
      placeholder=""
      value={username}
      onChange={(e) => setUsername(e.target.value)}
    />
    </div>
    <Typography variant="h6" color="gray" className="w-4/5">Jelszó</Typography>
    <div className="w-4/5">
    <Input 
      label="Jelszó" 
      type="password" 
      placeholder="********" 
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    </div>
    <Button 
    color="green" 
    variant="gradient" 
    className="w-4/5" 
    type="submit"
    >
    Bejelentkezés
    </Button>
  </form>
  );
}