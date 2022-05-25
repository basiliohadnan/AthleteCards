import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerModule } from './banner/banner.module';
import { ButtonModule } from './button/button.module';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { IconModule } from './icon/icon.module';
import { InputModule } from './input/input.module';

@NgModule({
  imports: [
    CommonModule,
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