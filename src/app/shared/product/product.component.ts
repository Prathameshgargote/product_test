import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/model/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productId!:string
  productInfo!:Iproduct

  isFavorite = false;
  quantity: number = 1
  constructor(
    private _ActiveRouter:ActivatedRoute,
    private _productServie:ProductService
  ) { }

  ngOnInit(): void {
   this.productId= this._ActiveRouter.snapshot.params['Id']
   console.log(this.productId); 
   this._productServie.getsingleById(this.productId)
   .subscribe(res=>{
    console.log(res);
    this.productInfo=res
  })
  }

  decreaseQty() {
    if (this.quantity > 0) {
      this.quantity--

    }
  }

  increaseQty() {
    this.quantity++
  }

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }

}
