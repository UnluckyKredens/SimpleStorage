import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { itemAddRoutingModule } from './item-add-routing.module';
import { ItemAddContainerComponent } from './container/item-add-container/item-add-container.component';
import { ItemAddPresenterComponent } from './presenter/item-add-presenter/item-add-presenter.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    itemAddRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [ItemAddContainerComponent, ItemAddPresenterComponent]
})
export class ItemAddModule { }
