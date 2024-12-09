import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

export const routes: Routes = [
  { path: '', component: LoginComponent }, // Default route for the login page
  { path: 'employee-list', component: EmployeeListComponent }, // Route for employee list page
];

