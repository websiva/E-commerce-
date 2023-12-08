import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public productData:any;
  //url="https://localhost:7253/test/products"
url='https://fakestoreapi.com/products';
  constructor(private http:HttpClient) { }

  getAllProducts():Observable<any>{
    return this.http.get<any[]>(this.url);
  }
  
  getProductById(id:number):Observable<any[]>{
    return this.http.get<any[]>(this.url);
  }

  setProductsData(data:any){
    this.productData=data;
  }

  getProductsData(){
    return this.productData;
  }
}
