import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Student } from '../model/Student';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-form-component',
  standalone: true,
  imports: [FormsModule, CommonModule, MatIconModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './form-component.component.html',
  styleUrl: './form-component.component.css'
})
export class FormComponentComponent implements OnChanges{

  

  @Output() outputSaveStudent = new EventEmitter<Student>();

  @Input() studentSelectedForm:Student = new Student();

  @Output() outputUpdateStudent = new EventEmitter<Student>();

  @Output() outputRemoveIndex = new EventEmitter<number>();




    ngOnChanges (): void {
      
      if (this.studentSelectedForm.name != null) {

      this.selectStudent(this.studentSelectedForm.id);

      }      

    }  


    


  //Button Visibility
  btnSave:boolean = true;

  formStudent = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    grade1: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(10)]),
    grade2: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(10)])
  })


  remove() {
    this.outputRemoveIndex.emit(this.formStudent.value.id);
    this.btnSave = true;
    this.formStudent.reset();
  }

  update() {
    
    this.outputUpdateStudent.emit(this.formStudent.value as Student);
    this.btnSave = true;
    this.formStudent.reset();
  }

  cancel() {

    this.studentSelectedForm = new Student();
    this.formStudent.reset();    
    this.btnSave = true;    
    
  }
  
  save() {
    this.outputSaveStudent.emit(this.formStudent.value as Student);
    this.formStudent.reset();
  }



  selectStudent(index:number) {
    this.formStudent.setValue({
      id : this.studentSelectedForm.id,
      name : this.studentSelectedForm.name,
      grade1 : this.studentSelectedForm.grade1,
      grade2 : this.studentSelectedForm.grade2      
    });

    this.btnSave = false;
  }


}
