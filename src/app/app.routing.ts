import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { UserListComponent } from './user-list/user-list.component';
import { WelcomeComponent } from './welcome/welcome.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'user-list',
    component: UserListComponent
  },
  {
    path: 'form',
    component: FormComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
