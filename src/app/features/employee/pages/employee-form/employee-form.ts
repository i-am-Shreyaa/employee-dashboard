import { Component } from '@angular/core';
import { FormArray, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { inject } from '@angular/core';

  @Component({
    selector: 'app-employee-form',
    imports: [ReactiveFormsModule],
    standalone: true,
    templateUrl: './employee-form.html',
    styleUrl: './employee-form.scss',
  })
  export class EmployeeForm {
    private fb = inject(FormBuilder); //FOrmBuilder is used to group form controls together

    //create reactive form

    employeeForm = this.fb.group({
      empName: ['', Validators.required],
      empEmail: ['', [Validators.required, Validators.email]],
      empPhone: ['', [Validators.pattern(/^[0-9]{10}$/)]],
       skills: this.fb.array([])
    });

    get skills(){
      return this.employeeForm.get('skills') as FormArray
    }
    //add employee skills
    addSkill(){
      this.skills.push(this.fb.control(''))
    }

    //remove employee skills
    removeSkill(index: number){
      this.skills.removeAt(index)
    }

    onFOrmSubmit(){
      console.log(this.employeeForm)
      if(this.employeeForm.valid){
        console.log(this.employeeForm.value)
      }
    }
  }
