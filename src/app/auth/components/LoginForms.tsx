import React, { useState } from 'react';
import { Typography, Input, Button } from "@material-tailwind/react";
import { useAuthTokenMutation } from "@/store/services/apiSlice";
import { useDispatch } from 'react-redux';
import { login } from '@/store/services/authSlice';
import Loading from '@/app/components/Loading';

export function SimpleRegistrationForm() {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const dispatch = useDispatch<AppDispatch>();

    const [authToken, { data, error, isLoading }] = useAuthTokenMutation();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
       
        try {
            const credentials = { username, password };
            const response = await authToken(credentials).unwrap();
            
            console.log(response.token);
            
            dispatch(login({ "token": response.token }));
            
            // Redirect to the main page after successful login
            window.location.href = '/news';  // Use window.location.href for client-side redirection

        } catch (error) {
            // Handle login error
            console.error("Login failed:", error);
        }
    };
    if(isLoading) return <Loading />;
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
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <Typography variant="h6" color="gray" className="w-4/5">Jelszó</Typography>
            <div className="w-4/5">
                <Input
                    label="Jelszó"
                    type="password"
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
