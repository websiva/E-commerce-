import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private viewPortScroller:ViewportScroller, private router:Router){

  }

  public OnClick(elementId:string){
    this.viewPortScroller.scrollToAnchor(elementId);
  }
  goToProduct(){
this.router.navigate(['products']);
  }

}
