import { Component, inject, OnInit } from '@angular/core';
import { EmployeeService } from '../../../../services/employee.service';
import { Employee } from '../../../../models/employee.model';

@Component({
  selector: 'app-employee-list',
  imports: [],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.scss',
})
export class EmployeeList implements OnInit{
  private emp = inject(EmployeeService);

  employees : Employee[] = [];

  ngOnInit() {
    this.emp.employees$.subscribe( data => {
      this.employees = data;
    })
  }
}
