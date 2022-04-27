import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { BannerModule } from '../shared/banner/banner.module';
import { InputModule } from '../shared/input/input.module';
import { ButtonModule } from '../shared/button/button.module';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    BannerModule,
    InputModule,
    ButtonModule,
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomePageModule { }
