import React, { useState } from 'react';
import { Typography, Input, Button } from "@material-tailwind/react";
import { useAuthTokenMutation } from "@/store/services/apiSlice";
import { useDispatch } from 'react-redux';
import { login } from '@/store/services/authSlice';

export function SimpleRegistrationForm() {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const dispatch = useDispatch<AppDispatch>();

    const [authToken, { data, error }] = useAuthTokenMutation();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const credentials = { username, password };
            const response = await authToken(credentials).unwrap();
            dispatch(login(response.token)); // Assuming `login` is an action that expects a string token
        } catch (error) {
            // Handle login error
            console.error("Login failed:", error);
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
