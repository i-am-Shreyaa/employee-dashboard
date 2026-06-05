import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Employee } from '../../../models/employee.model';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-employee-card',
  imports: [JsonPipe],
  standalone: true,
  templateUrl: './employee-card.html',
  styleUrl: './employee-card.scss',
})
export class EmployeeCard implements OnChanges{

  @Input() employee!: Employee;


  ngOnChanges(changes: SimpleChanges) {
    console.log('Employee Card Input:', this.employee);
  }

  @Output() deleteClicked = new EventEmitter<any>();

  onDelete(){
    this.deleteClicked.emit(this.employee.empEmail)
  }
}
