import { Component, inject, OnInit, Output } from '@angular/core';
import { EmployeeService } from '../../../../services/employee.service';
import { Employee } from '../../../../models/employee.model';
import { RouterLink } from "@angular/router";
import { EmployeeCard } from '../../../../shared/components/employee-card/employee-card';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-employee-list',
  imports: [RouterLink, EmployeeCard],
  standalone: true,
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.scss',
})
export class EmployeeList implements OnInit{
  private emp = inject(EmployeeService);

  employees : Employee[] = [];


  ngOnInit() {
    this.emp.employees$.pipe(
      takeUntilDestroyed()
    )
    .subscribe( data => {
      console.log('Received data employee-list', data)

      this.employees = data;
      console.log(data)
    })
  }

  deleteEmployee(
 email:string
){

 this.emp
   .deleteEmployee(email);

}
}
