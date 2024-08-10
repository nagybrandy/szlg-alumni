import React, { useState } from 'react';
import { Typography, Input, Button } from "@material-tailwind/react";
import { useCreateAccountMutation } from "@/store/services/apiSlice";
import Loading from '@/app/components/Loading';

export function SimpleRegistrationForm() {
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    const [createAccount, { isLoading }] = useCreateAccountMutation();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const newUser = { username, email, password };
            const response = await createAccount(newUser).unwrap();
            
            console.log("Account created:", response);
            
            // Redirect to the main page after successful registration
            window.location.href = '/news';  // Use window.location.href for client-side redirection

        } catch (error) {
            // Handle registration error
            console.error("Registration failed:", error);
        }
    };

    if (isLoading) return <Loading />;

    return (
        <form
            className="flex flex-col justify-center items-center w-full h-full gap-y-2"
            onSubmit={handleSubmit}
        >
            <Typography variant="h5" color="black" className="w-4/5">Regisztráció</Typography>
            <Typography variant="h6" color="gray" className="w-4/5">Felhasználónév</Typography>
            <div className="w-4/5">
                <Input
                    label="Felhasználónév"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <Typography variant="h6" color="gray" className="w-4/5">E-mail cím</Typography>
            <div className="w-4/5">
                <Input
                    label="E-mail cím"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
            <Typography variant="h6" color="gray" className="w-4/5">Jelszó újra</Typography>
            <div className="w-4/5">
                <Input
                    label="Jelszó újra"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </div>
            <Button
                color="green"
                variant="gradient"
                className="w-4/5"
                type="submit"
            >
                Regisztráció
            </Button>
        </form>
    );
}