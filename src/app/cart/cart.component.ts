import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  /*public product: any = [];
  public total: number=0;
  public noOfItem: string = "";
  public cartQuantity: number = 1;
  public itemTotal: number = 0;
  constructor(private cartservice: CartService) { }

  ngOnInit(): void {
    this.cartservice.getProducts().subscribe((res: any) => {
      this.product = res;
      this.noOfItem = res.length;
    })
  }

  removecartItem(product: any) {
    this.cartservice.removeOneItem(product);
  }

  removeall() {
    this.cartservice.removeAllItem();
  }

  quantity(value: string) {
    this.cartservice.cartQuantity(value);
  }

  increaseQuantity(id:number){
    this.cartservice.updateQuantity(id, this.cartservice.getQuantityById(id) + 1);
  }

  decreaseQuantity(id:number){
    const currentQuantity = this.cartservice.getQuantityById(id);

    if (currentQuantity > 1) {
      this.cartservice.updateQuantity(id, currentQuantity - 1);
  }

  }

  getTotalAmount(){
    this.total=this.cartservice.getTotalPrice()
  }*/

  cart: any[] = [];
  totalAmount = 0;
  itemCount = 0;
  
  constructor(private cartService: CartService) {}
  ngOnInit(): void {
    this.cartService.getCart().subscribe((cart) => {
      this.cart = cart;
      this.totalAmount = this.cartService.getTotalAmount();
      this.itemCount = this.cartService.getItemCount();
    });
  }

  removeFromCart(productId: number): void {
    this.cartService.removeFromCart(productId);
  }

  removeAllFromCart(): void {
    this.cartService.removeAllFromCart();
  }

  updateQuantity(productId: number, quantity: number): void {
    this.cartService.updateQuantity(productId, quantity);
  }

}
