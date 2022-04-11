import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { BannerModule } from '../shared/banner/banner.module';
import { InputModule } from '../shared/input/input.module';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    BannerModule,
    InputModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomePageModule { }
