import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductCardComponent } from './shared/product-card/product-card.component';
import { MaterialModule } from './material/material.module';
import { ProductComponent } from './shared/product/product.component';
import { HomeComponent } from './shared/home/home.component';
import {HttpClientModule}from '@angular/common/http';
import { NavbarComponent } from './shared/navbar/navbar.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    ProductComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
