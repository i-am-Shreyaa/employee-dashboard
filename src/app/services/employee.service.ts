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
    console.log('Before Subject val ---> ', currentEmployees)
    this.employeesSubject.next([
      //next notify all subscribers
      ...currentEmployees,
      employee,
    ]);

console.log(
  'After Subject called data ---> ',
  this.employeesSubject.value
)
  }

  deleteEmployee(email:string){
    const updatedEmp = this.employeesSubject.value.filter
    (emp => emp.empEmail !== email);

    this.employeesSubject.next(updatedEmp)
  }
}