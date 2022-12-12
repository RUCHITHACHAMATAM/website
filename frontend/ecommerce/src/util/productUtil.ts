import { Injectable } from "@angular/core";
import { Product } from "src/models/product";
import { ProductDto } from "src/models/productDto";
import { Wishlist } from "src/models/Wishlist";


@Injectable({
    providedIn: 'root'
})
export class ProductUtil {
    public constructor() { }
    converterOfProductToProductDto(product: Product): ProductDto {

        const productDto: ProductDto = {
            "category": product.category,
            "image": product.image,
            "username":localStorage.getItem('username'),
            "price": product.price,
            "productName": product.title,
            "rating": product.rating
        }
        console.log(productDto);
        return productDto;

    }
    converterOfProductToWishlist(product: Product): Wishlist{

        const wishlist: Wishlist = {
            "category": product.category,
            "image": product.image,
            "username":localStorage.getItem('username'),
            "price": product.price,
            "productName": product.title,
            "rating": product.rating
        }
        return wishlist;

    }
}