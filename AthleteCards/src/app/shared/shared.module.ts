import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputModule } from './input/input.module';
import { BannerModule } from './banner/banner.module';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { IconModule } from './icon/icon.module';
import { ButtonModule } from './button/button.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    BannerModule,
    ButtonModule,
    FooterModule,
    HeaderModule,
    IconModule,
    InputModule
  ],
  exports: [
    BannerModule,
    ButtonModule,
    FooterModule,
    HeaderModule,
    IconModule,
    InputModule
  ]
})
export class SharedModule { }
