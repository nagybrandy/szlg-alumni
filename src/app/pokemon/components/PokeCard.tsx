import { Card, CardHeader, CardBody, Chip, CardFooter, Typography, Avatar, Tooltip, Button, IconButton } from "@material-tailwind/react";
import { Pokemon } from "../page"; 

export function PokeCard({ pokemon }: { pokemon: Pokemon }) {
    return (
        <Card className="w-64 overflow-hidden" color="transparent" shadow={false} placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
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
                defaultChecked={false}
            >
                <img
                    src={pokemon.sprite}
                    alt="ui/ux review check"
                    className="w-full h-48 p-8"
                />
            </CardHeader>
            <CardBody
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                color=""
                translate="no"
                slot=""
                style={{}}
                title=""
                onChange={() => {}}
                onClick={() => {}}
                className=""
                key=""
                defaultChecked={false}
                defaultValue=""
                // ... add the remaining properties here
            >
                <Typography variant="h4" color="blue-gray" className="capitalize" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
                    {pokemon.name}
                </Typography>
                <Typography variant="lead" color="gray" className="mt-3 font-normal capitalize"  placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
                    {pokemon.name}
                </Typography>
            </CardBody>
            <CardFooter className="flex items-center justify-between" placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                color=""
                translate="no"
                slot=""
                style={{}}
                title=""
                onChange={() => {}}
                onClick={() => {}}
                key=""
                defaultChecked={false}
                defaultValue="">
                <div className="flex items-center -space-x-3">
                    {pokemon.types.map((type, index) => (
                        <>
                            <Chip color="light-green" value={type} className="capitalize" />
                            {index !== pokemon.types.length - 1 && <Chip color="light-green" value="&" className="capitalize" />}
                        </>
                    ))}
                </div>
                <Typography className="font-normal"  placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>#{pokemon.id}</Typography>
            </CardFooter>
        </Card>
    );
}