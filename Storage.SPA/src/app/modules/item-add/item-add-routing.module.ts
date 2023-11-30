import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemAddContainerComponent } from './container/item-add-container/item-add-container.component';

const routes: Routes = [
  {
    path: '',
    component: ItemAddContainerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class itemAddRoutingModule { }
