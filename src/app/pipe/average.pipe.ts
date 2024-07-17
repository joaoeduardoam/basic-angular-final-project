import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../model/Student';

@Pipe({
  name: 'average',
  standalone: true
})
export class AveragePipe implements PipeTransform {

  transform(student: Student): number {
    return (student.grade1+student.grade2)/2;
  }

}
