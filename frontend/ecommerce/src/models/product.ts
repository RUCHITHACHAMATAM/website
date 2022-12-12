import { Rating } from "./rating";

export class Product {
    category !: string;
    

    description !: string;

    id !: string;

    image !: string;

    price !: number;

    rating !: Rating;

    title : string;
} 