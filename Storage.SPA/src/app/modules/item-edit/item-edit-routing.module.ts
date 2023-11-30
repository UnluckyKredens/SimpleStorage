import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemEditContainerComponent } from './container/item-edit-container/item-edit-container.component';

const routes: Routes = [
  {
    path: ':id',
    component: ItemEditContainerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class itemEditRoutingModule { }
