import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  /*
public cartItems:any[]=[];
public cartquantity:number=1;
public grandtotal=0;
public productList=new BehaviorSubject<any>([]);
  constructor() { }

getProducts(){
 return this.productList.asObservable();
}
setProducts(product:any){
this.cartItems.push(...product);
this.productList.next(product);
}

addToCart(product:any){
  const existingItem = this.cartItems.find(cartItem => cartItem.id === product.id);
  if (existingItem) {
    existingItem.quantity += product.quantity;
  }
  else{
    this.cartItems.push(product);
    this.productList.next(this.cartItems);
    this.getTotalAmount();
  }

}

getTotalAmount(): number {
  return this.cartItems.reduce((total, item) => total + item.price, 0);
}

removeOneItem(product:any){
  this.cartItems.map((a:any, index:any)=>{
    if(product.id===a.id){
      this.cartItems.splice(index,1);
    }
  })
  this.productList.next(this.cartItems);
}

removeAllItem(){
  this.cartItems=[];
  this.productList.next(this.cartItems);
}

cartQuantity(value:string){
  if(this.cartquantity>0&&value=='min'){
    this.cartquantity-=1;
  }
  else if(this.cartquantity>0&&value=='max'){
    this.cartquantity+=1;
  }
}

checkProduct(product: any): boolean {
  return this.cartItems.some(item => item.id === product.id);
}

updateQuantity(itemId: number, newQuantity: number): void {
  const itemToUpdate = this.cartItems.find(item => item.id === itemId);

  if (itemToUpdate) {
    itemToUpdate.quantity = newQuantity;
  }
}

getQuantityById(itemId: number): number {
  const item = this.cartItems.find(item => item.id === itemId);
  return item ? item.quantity : 0;
}
getTotalPrice(): number {
  return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
}*/
private cart: any[] = [];
  private cartSubject = new BehaviorSubject<any[]>(this.cart);

  getCart(): BehaviorSubject<any[]> {
    return this.cartSubject;
  }

  addToCart(product: any): void {
    const existingProduct = this.cart.find((p) => p.id === product.id);

    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }

    this.cartSubject.next(this.cart);
  }

  removeFromCart(productId: number): void {
    this.cart = this.cart.filter((product) => product.id !== productId);
    this.cartSubject.next(this.cart);
  }

  removeAllFromCart(): void {
    this.cart = [];
    this.cartSubject.next(this.cart);
  }

  updateQuantity(productId: number, quantity: number): void {
    const product = this.cart.find((p) => p.id === productId);

    if (product) {
      product.quantity = quantity;
    }

    this.cartSubject.next(this.cart);
  }

  getTotalAmount(): number {
    return this.cart.reduce((total, product) => total + product.price * product.quantity, 0);
  }

  getItemCount(): number {
    return this.cart.reduce((count, product) => count + product.quantity, 0);
  }
}
