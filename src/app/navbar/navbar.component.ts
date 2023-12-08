import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public itemCount:number=0;
  constructor(private viewPortScroller:ViewportScroller, private router:Router, private cartservice:CartService){

  }

  ngOnInit(): void {

    this.cartservice.getCart().subscribe((cart) => {
      this.itemCount = this.cartservice.getItemCount();
    });
  }

  public OnClick(elementId:string){
    this.viewPortScroller.scrollToAnchor(elementId);
    this.router.navigate(['home']);
  }

  goToLogin(){
    this.router.navigate(['login']);
  }

}
