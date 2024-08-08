import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";

export function SimpleRegistrationForm() {
    return (
        <form className="flex flex-col justify-center items-center w-full h-full gap-y-4">
            <Typography variant="h5" color="black" className="w-4/5" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
                Bejelentkezés
            </Typography>
            <Typography variant="h6" color="gray" className="w-4/5" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
                E-mail cím
            </Typography>
            <div className="w-4/5">
                <Input label="E-mail cím" placeholder="a@b.c" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} crossOrigin="" />
            </div>
            <Typography variant="h6" color="gray" className="w-4/5" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
                Jelszó
            </Typography>
            <div className="w-4/5">
                <Input
                    label="Jelszó"
                    placeholder="********"
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                    crossOrigin=""
                />
            </div>
            <Button
                color="green"
                variant="gradient"
                className="w-4/5"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                translate="no"
                slot=""
                style={{}}
                title=""
                onChange={() => {}}
                onClick={() => {}}
                key=""
                type="submit"
                defaultChecked={false}
                defaultValue=""
            >
                Bejelentkezés
            </Button>
        </form>
    );
}