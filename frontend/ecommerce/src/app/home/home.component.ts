import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductUtil } from 'src/util/productUtil';
import { Product } from '../../models/product';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService, private productUtil: ProductUtil,private router:Router) { }

  products: any = [];

  ngOnInit(): void {

    const observer = {
      next: (data: Product) => {
        this.products = data;
      },
      error: (err: Error) => {
        console.log(err);
      }
    }
    const observable: Observable<Product> = this.homeService.getAllProducts();

    observable.subscribe(observer);

    // const observable1: Observable<Product> = this.homeService.getAllProductFromCart();
    // const observer1 = {
    //   next: (data1: any) => {
    //     console.log(data1);
    //   }
    // }

    // observable1.subscribe(observer1);
  }



  addProduct(product: Product) {
    // console.log(product);
    // console.log(this.productUtil.converterOfProductToProductDto(product));
    const observable: Observable<any> = this.homeService.addProduct(this.productUtil.converterOfProductToProductDto(product));
    const observer = {
      next: (data: any) => {
        this.router.navigate(["/cart"]);
        // console.log(data);
      },
      error: (err: Error) => {
        console.log(err);
      }
    }
    observable.subscribe(observer);
  }
  addProductToWish(product: Product) {
    console.log(product);
    // console.log(this.productUtil.converterOfProductToProductDto(product));
    const observable: Observable<any> = this.homeService.addProductToWishlist(this.productUtil.converterOfProductToWishlist(product));
    const observer = {
      next: (data: any) => {
        this.router.navigate(["/wishlist"]);
        // console.log(data);
      },
      error: (err: Error) => {
        console.log(err);
      }
    }
    observable.subscribe(observer);
  }



}
