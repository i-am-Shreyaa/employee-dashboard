import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Employee } from "../models/employee.model";

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employeesSubject = new BehaviorSubject<Employee[]>([]);

  employees$ = this.employeesSubject.asObservable();

  addEmployee(employee: Employee) {
    const currentEmployees = this.employeesSubject.value;
    this.employeesSubject.next([
      //next notify all subscribers
      ...currentEmployees,
      employee,
    ]);
  }
}