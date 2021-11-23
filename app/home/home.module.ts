import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './components/home/home.component';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from './../shared/shared.module';
import { CardsComponent } from './components/cards/cards.component';
import { MaterialModule } from './../material/material.module';

@NgModule({
  declarations: [
    BannerComponent,
    HomeComponent,
    CardsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    MaterialModule
  ]
})
export class HomeModule {

}
