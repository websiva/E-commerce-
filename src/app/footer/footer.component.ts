import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(private viewPortScroller:ViewportScroller, private router:Router){

  }

  public OnClick(elementId:string){
    this.viewPortScroller.scrollToAnchor(elementId);
    this.router.navigate(['home']);
  }

}
