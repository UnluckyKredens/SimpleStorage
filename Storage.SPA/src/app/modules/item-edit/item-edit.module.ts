import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardRoutingModule } from '../dashboard/dashboard-routing.module';
import { ItemEditContainerComponent } from './container/item-edit-container/item-edit-container.component';
import { ItemEditPresenterComponent } from './presenter/item-edit-presenter/item-edit-presenter.component';
import { itemEditRoutingModule } from './item-edit-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    itemEditRoutingModule
  ],
  declarations: [ItemEditContainerComponent, ItemEditPresenterComponent]
})
export class ItemEditModule { }
