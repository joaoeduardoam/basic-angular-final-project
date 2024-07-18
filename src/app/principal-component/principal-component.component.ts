import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { TableComponentComponent } from "../table-component/table-component.component";
import { FormComponentComponent } from "../form-component/form-component.component";
import { StudentService } from '../service/student.service';
import { Student } from '../model/Student';
import { HeaderComponentComponent } from "../header-component/header-component.component";

@Component({
  selector: 'app-principal-component',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule, TableComponentComponent, FormComponentComponent, HeaderComponentComponent],
  templateUrl: './principal-component.component.html',
  styleUrl: './principal-component.component.css'

})

export class PrincipalComponentComponent {

  constructor(private service:StudentService){}

  students:Student[] = [];

  studentSelected:Student = new Student();


  
  ngOnInit(){
    this.select();
  } 

  // sendBack receives the API return(service.select()) and the vector students receives the sendBack value
  select(){
    this.service.select().subscribe(sendBack => {this.students = sendBack});
     console.log(this.students);
  }

  
  save(student:Student){
    
    this.service.save(student).subscribe(sendBack => {
      this.students.push(sendBack);
    });

  }

  update(student:Student) {
    this.service.update(student).subscribe(sendBack => {
      let updatedIndex = this.students.findIndex(obj => {
        return student.id === obj.id;
      });

      this.students[updatedIndex] = sendBack;
    })
  }

  remove(index:number) {
    this.service.remove(index).subscribe(() => {
      let removedIndex = this.students.findIndex(obj => {
                                      return index === obj.id;
      });

      this.students.splice(removedIndex,1);
    })

  }

  selectStudent(index:number){
      
    this.studentSelected=this.students[index];

  }

  


}
