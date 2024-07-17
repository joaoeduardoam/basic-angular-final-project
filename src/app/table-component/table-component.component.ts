import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../model/Student';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AveragePipe } from "../pipe/average.pipe";

@Component({
  selector: 'app-table-component',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, AveragePipe],
  templateUrl: './table-component.component.html',
  styleUrl: './table-component.component.css'
})
export class TableComponentComponent {

  
  @Input() vector:Student[] = [];

  @Output() outputSelectedIndex = new EventEmitter<number>();


  //Sends idx that came from form (button) to principal-component.html
  selectStudent(idx:number){
    this.outputSelectedIndex.emit(idx);
  }



}
