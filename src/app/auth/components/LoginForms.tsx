import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
   
export function SimpleRegistrationForm() {
return (
    <div className="flex flex-col justify-center items-center w-full h-full gap-y-4">
        <Typography variant="h5" color="black" className="w-4/5">Bejelentkezés</Typography>
        <Typography variant="h6" color="gray" className="w-4/5">E-mail cím</Typography>
        <div className="w-4/5">
        <Input label="E-mail cím" placeholder="a@b.c"/>
        </div>
        <Typography variant="h6" color="gray" className="w-4/5">Jelszó</Typography>
        <div className="w-4/5">
        <Input label="Jelszó" placeholder="********" />
        </div>
        <Button color="green" variant="gradient" className="w-4/5">Bejelentkezés</Button>
    </div>
);
}