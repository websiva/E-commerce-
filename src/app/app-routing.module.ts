import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { DetailsComponent } from './details/details.component';
import { UpdatepopupComponent } from './updatepopup/updatepopup.component';
import { ConnectionComponent } from './connection/connection.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'navbar',component:NavbarComponent},
  {path:'footer',component:FooterComponent},
  {path:'home',component:HomeComponent},
  {path: 'login',component:LoginComponent},
  {path:'products',component:ProductsComponent},
  {path:'register',component:RegisterComponent},
  {path:'cart',component:CartComponent},
  {path:'details',component:DetailsComponent},
  {path:'popup',component:UpdatepopupComponent},
  {path:'connection',component:ConnectionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
