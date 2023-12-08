import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  param:any;
  public productList:any;
  id:string='';
  title:string = '';
  description:string='';
  img:string='';
  price:string='';
  rating:string='';

  constructor(private route:ActivatedRoute, private http:HttpClient, private product:ProductsService,
    public cartservice:CartService)
  { 
    this.route.queryParams.subscribe((res)=>{
      this.param=res['id'];
    })
   }

  ngOnInit(): void {  
    this.retriveProduct()
  }
  addTocart(product:any){
    this.cartservice.addToCart(product);
  }
  retriveProduct(){
    this.productList = this.product.getProductsData()
      this.title = this.productList?.title;
      this.description=this.productList.description;
      this.img=this.productList.image;
      this.price=this.productList.price;
      this.rating=this.productList.rating;
      this.id=this.productList.id;
  }
}
