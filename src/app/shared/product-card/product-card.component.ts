import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Iproduct } from 'src/app/model/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() image!: string;
  @Input() category!: string;
  @Input() title!: string;
  @Input() price!: string;

  proArr!:Array<Iproduct>
  constructor( 
    private _productService:ProductService
  ) { }

  ngOnInit(): void {

    // this.proArr=this._productService.fetchallproduct()
    this._productService.getproduct()
    .subscribe(res=>{
      console.log(res);
      this.proArr=res
    })


  }

}
