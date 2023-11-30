import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginContainerComponent } from './container/login-container/login-container.component';
import { LoginPresenterComponent } from './presenter/login-presenter/login-presenter.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [LoginContainerComponent, LoginPresenterComponent]
})
export class LoginModule { }
