import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SearchService } from '../services/search.service';
import { CartService } from '../services/cart.service';
import { ProductsService } from '../services/products.service';
import { NgxStarsModule } from 'ngx-stars';
import { ToastrService } from "ngx-toastr"

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  searchTerm:string="";
  rate:number=4.5;
  public getProducts: any = [];
  public filterCategory: any = [];
  constructor(private http: HttpClient, private find: SearchService, private cartservice:CartService,
    private product:ProductsService,private toastr: ToastrService) {

  }


  ngOnInit(): void {
    this.getProductsAll();
    this.find.search.subscribe((val: any) => {
      this.searchTerm = val;
    })

    /*this.getProducts.forEach((a:any)=>{
      Object.assign(a,{quantity:1,total:a.price});
    })*/

  }
  getProductsAll() {
    this.product.getAllProducts().subscribe((products) => {
      this.getProducts = products;
      this.filterCategory = products;
    })
  }

  filter(category: string) {
    this.filterCategory = this.getProducts.filter((a: any) => {
      if (a.category == category || category == "") {
        return a;
      }
    })
  }


  addTocart(product:any){
      this.cartservice.addToCart(product);
      this.toastr.success('Item added successfully...')
  }


  search(event:any){
    this.searchTerm=(event.target as HTMLInputElement).value;
    this.find.search.next(this.searchTerm);
  }
}
