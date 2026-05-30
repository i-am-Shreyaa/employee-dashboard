import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },

  {
    path: 'dashboard',
    loadComponent: () =>
      import(
        './features/dashboard/pages/dashboard/dashboard'
      ).then(m => m.Dashboard)
  },

  {
    path: 'employees',
    loadComponent: () =>
      import(
        './features/employee/pages/employee-list/employee-list'
      ).then(m => m.EmployeeList)
  }

];
