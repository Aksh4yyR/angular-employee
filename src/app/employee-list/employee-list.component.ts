import { Component } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [NgForOf, NgIf, FormsModule],
  styleUrls: ['./employee-list.component.css'],
  template: `
    <div class="employee-list-container">
      <h2>Employee List</h2>
      <table>
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Contact No</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let employee of employees">
            <td>{{ employee.name }}</td>
            <td>{{ employee.contact }}</td>
            <td>{{ employee.email }}</td>
            <td>{{ employee.address }}</td>
          </tr>
        </tbody>
      </table>
      <button (click)="showAddEmployeeModal = true">Add Employee</button>

      <div *ngIf="showAddEmployeeModal">
        <h2>Add Employee</h2>
        <form (ngSubmit)="addEmployee()">
          <label>Employee Name</label>
          <input [(ngModel)]="newEmployee.name" name="name" required />
          <label>Contact No</label>
          <input [(ngModel)]="newEmployee.contact" name="contact" required />
          <label>Email</label>
          <input [(ngModel)]="newEmployee.email" name="email" required />
          <label>Address</label>
          <input [(ngModel)]="newEmployee.address" name="address" required />
          <button type="submit">Submit</button>
          <button type="button" (click)="showAddEmployeeModal = false">Cancel</button>
        </form>
      </div>
    </div>
  `,
  styles: [`
    .employee-list-container {
      max-width: 600px;
      margin: 20px auto;
    }
    table {
      width: 100%;
      border-collapse: collapse;
    }
    th, td {
      border: 1px solid black;
      padding: 8px;
      text-align: left;
    }
    button {
      margin: 10px 0;
    }
  `]
})
export class EmployeeListComponent {
  employees = [
    { name: 'John Doe', contact: '1234567890', email: 'john@example.com', address: 'New York' },
  ];
  showAddEmployeeModal = false;
  newEmployee = { name: '', contact: '', email: '', address: '' };

  addEmployee() {
    this.employees.push({ ...this.newEmployee });
    this.newEmployee = { name: '', contact: '', email: '', address: '' };
    this.showAddEmployeeModal = false;
  }
}
