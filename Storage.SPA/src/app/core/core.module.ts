import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NavBarComponent } from './Layouts/nav-bar/nav-bar.component';
import { MainLayoutComponent } from './Layouts/main-layout/main-layout.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LoginLayoutComponent } from './Layouts/login-layout/login-layout.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    NavBarComponent,
    MainLayoutComponent,
    LoginLayoutComponent
  ]
})
export class CoreModule { }
