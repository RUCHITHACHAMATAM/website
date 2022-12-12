import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/models/product';
import { ProductDto } from 'src/models/productDto';

@Injectable({
   providedIn: 'root'
})
export class HomeService {

   constructor(private httpClient: HttpClient) {

   }


   baseUrl: string = "https://fakestoreapi.com/products"

   cartUrl: string = "http://localhost:7075/cart/"

   wishlistUrl: string = "http://localhost:8080/"


   getAllProducts() {
      return this.httpClient.get<any>(this.baseUrl);
   }

   getAllProductFromCart() {
      // console.log("hello");
      console.log(localStorage.getItem('username')+"*********************");
      return this.httpClient.get<any>(this.cartUrl + "productList/"+localStorage.getItem('username'));


   }

   deleteProduct(id: number): Observable<any> {
      return this.httpClient.delete(this.cartUrl + "deleteProduct/" + id);
   }

   addProduct(productDto: any): Observable<any> {
      return this.httpClient.post<any>(this.cartUrl + "addProduct", productDto);
   }

   getAllProductFromWishlist() {
      return this.httpClient.get<any>(this.wishlistUrl + "productList/"+ localStorage.getItem('username'));
   }
   deleteProductfromWishlist(id: number): Observable<any> {
      return this.httpClient.delete(this.wishlistUrl + "deleteProduct/" + id);
   }
   addProductToWishlist(productDto: any): Observable<any> {
      return this.httpClient.post<any>(this.wishlistUrl + "addProduct", productDto);
   }
}
