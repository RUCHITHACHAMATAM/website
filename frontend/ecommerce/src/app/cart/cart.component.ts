import { Component, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { Product } from 'src/models/product';
import { HomeService } from 'src/services/home.service';
import { ProductUtil } from 'src/util/productUtil';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private homeService: HomeService, private productUtil: ProductUtil) { }

  products: any[] = [];
  cart: boolean = true;
  productPresent: boolean = false;


  ngOnInit(): void {
    // if (this.products.length === 0) {
    //   this.cart = true;
    // } else {
    //   this.cart = false;
    // }
    const observable: Observable<any> = this.homeService.getAllProductFromCart();
    const observer = {
      next: (data: any) => {
        this.cart = false;
        this.productPresent = true;
        console.log(data);
        this.products = data;
        // console.log(data);
        this.countTotal();

      },
      error: (err: Error) => {
        console.log(err);
      }
    }
    observable.subscribe(observer);

  }

  deleteProduct(id: number) {

    const observable: Observable<any> = this.homeService.deleteProduct(id);
    const observer = {
      next: (data: any) => {

        this.ngOnInit();
        this.cart = false;


        // console.log(data);
      },
      error: (err: Error) => {
        console.log(err);
      }
    }

    observable.subscribe(observer);


  }

  addProduct(product: Product) {
    // console.log(product);
    // console.log(this.productUtil.converterOfProductToProductDto(product));
    
    const observable: Observable<any> = this.homeService.addProduct(product);
    const observer = {
      next: (data: any) => {
        // console.log(product.username);
        console.log("inside add products"+data);
        this.ngOnInit();
        
      },
      error: (err: Error) => {
        console.log(err);
      }
    }

    observable.subscribe(observer);
  }

  price=0;
  countTotal() {
    let total: number = 0;
    for (let product of this.products) {
      console.log(product.price * product.quantity);
      total += product.price * product.quantity;
    }
    console.log(total);
    this.price=total;
  }
}
