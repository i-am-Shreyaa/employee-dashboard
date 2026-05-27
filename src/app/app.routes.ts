import { Routes } from '@angular/router';
import {MainLayout} from './core/layouts/main-layout/main-layout';
import { Dashboard } from './features/dashboard/pages/dashboard/dashboard.js';
import { EmployeeList } from './features/employees/pages/employee-list/employee-list';
import { TaskList } from './features/tasks/pages/task-list/task-list';
export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./features/dashboard/pages/dashboard/dashboard'),
      },
      {
        path: 'employees',
        loadComponent: () =>
          import('./features/employees/pages/employee-list/employee-list')
            .then(m => m.EmployeeList)
      },
      {
        path: 'tasks',
        loadComponent: () =>
          import('./features/tasks/pages/task-list/task-list')
            .then(m => m.TaskList)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];
