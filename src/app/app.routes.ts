import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  //loadChildren - lazy loading
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./features/dashboard/pages/dashboard/dashboard').then(m => m.Dashboard)
  },
  {
    path: 'employees',
    loadComponent: () => 
      import('./features/employee/pages/employee-list/employee-list').then(m => m.EmployeeList)
  },
  {
    path: 'employee-form',
    loadComponent: () => 
      import('./features/employee/pages/employee-form/employee-form').then(m => m.EmployeeForm)
  }
];

