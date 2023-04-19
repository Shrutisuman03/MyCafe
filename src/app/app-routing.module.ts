import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooditemsComponent } from './fooditems/fooditems.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import{HomeComponent} from './home/home.component';
import{BusinessComponent} from './business/business.component';
import{ResturantpartComponent} from'./resturantpart/resturantpart.component';



  const routes: Routes = [{component:LoginComponent, path: 'login'},{component:SignupComponent, path: 'signup'},{component:FooditemsComponent,path:'fooditems'},{component:HomeComponent,path:''},{component:BusinessComponent,path: 'partner-with-us'},{component:ResturantpartComponent,path:'listofresturants'}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
