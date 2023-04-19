import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FooditemsComponent } from './fooditems/fooditems.component';
import { HomeComponent } from './home/home.component';
import { BusinessComponent } from './business/business.component';
import { BusinessheaderComponent } from './businessheader/businessheader.component';
import { FooterbusinessComponent } from './footerbusiness/footerbusiness.component';
import { OrderfoodlistsComponent } from './orderfoodlists/orderfoodlists.component';
import { ResturantpartComponent } from './resturantpart/resturantpart.component';
// ye sab http clinet use kr rhe hai

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    FooditemsComponent,
    HomeComponent,
    BusinessComponent,
    BusinessheaderComponent,
    FooterbusinessComponent,
    OrderfoodlistsComponent,
    ResturantpartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
