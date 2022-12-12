import { Rating } from "./rating";

export class ProductDto {
    category !: string;
    
    username!:string;
    image !: string;

    price !: number;

    rating !: Rating;

    productName : string;
}

// category
// : 
// "string"
// image
// : 
// "string"
// price
// : 
// 0
// productId
// : 
// 1
// productName
// : 
// "puchi"
// quantity
// : 
// 1
// rating
// : 
// {rate: 0, count: 0}
// title
// : 
// "string"