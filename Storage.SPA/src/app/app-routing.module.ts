import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from './core/core.module';
import { MainLayoutComponent } from './core/Layouts/main-layout/main-layout.component';
import { LoginLayoutComponent } from './core/Layouts/login-layout/login-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      //Storage
      {
        path: '',
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(x => x.DashboardModule)
      },
      {
        path: 'edit',
        loadChildren: () => import('./modules/item-edit/item-edit.module').then(x=> x.ItemEditModule)
      },
      {
        path: 'add',
        loadChildren: () => import('./modules/item-add/item-add.module').then(x => x.ItemAddModule)
      },
    ]
  },
  {
    path: 'auth',
    component: LoginLayoutComponent,
    children: [
        {
          path: '',
          loadChildren: () => import('./modules/login/login.module').then(x => x.LoginModule)
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
