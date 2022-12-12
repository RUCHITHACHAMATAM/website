import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/models/product';
import { HomeService } from 'src/services/home.service';
import { ProductUtil } from 'src/util/productUtil';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {


  constructor(private homeService: HomeService, private productUtil: ProductUtil) { }

  products: any[] = [];
  cart: boolean = true;
  productPresent: boolean = false;


  ngOnInit(): void {
    if (this.products.length === 0) {
      this.cart = true;
    } else {
      this.cart = false;
    }
    const observable: Observable<any> = this.homeService.getAllProductFromWishlist();
    const observer = {
      next: (data: any) => {
        this.cart = false;
        this.productPresent = true;
        console.log(data);
        this.products = data;
        console.log(data);
  

      },
      error: (err: Error) => {
        console.log(err);
      }
    }
    observable.subscribe(observer);

  }

  deleteProduct(id: number) {

    const observable: Observable<any> = this.homeService.deleteProductfromWishlist(id);
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


}
