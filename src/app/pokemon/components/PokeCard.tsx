import { Card, CardHeader, CardBody, Chip, CardFooter, Typography, Avatar, Tooltip, Button, IconButton } from "@material-tailwind/react";
import { Pokemon } from "../page"; 

export function PokeCard({ pokemon }: { pokemon: Pokemon }) {
    return (
        <Card className="w-64 overflow-hidden">
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
            >
                <img
                    src={pokemon.sprite}
                    alt="ui/ux review check"
                    className="w-full h-48 p-8"
                />
            </CardHeader>
            <CardBody>
                <Typography variant="h4" color="blue-gray" className="capitalize">
                    {pokemon.name}
                </Typography>
                <Typography variant="lead" color="gray" className="mt-3 font-normal capitalize">
                    {pokemon.name}
                </Typography>
            </CardBody>
            <CardFooter className="flex items-center justify-between">
                <div className="flex items-center -space-x-3">
                    {pokemon.types.map((type, index) => (
                        <>
                            <Chip color="light-green" value={type} className="capitalize" />
                            {index !== pokemon.types.length - 1 && <Chip color="light-green" value="&" className="capitalize" />}
                        </>
                    ))}
                </div>
                <Typography className="font-normal">#{pokemon.id}</Typography>
            </CardFooter>
        </Card>
    );
}