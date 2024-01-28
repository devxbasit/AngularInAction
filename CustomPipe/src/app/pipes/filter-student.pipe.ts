import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../interfaces/student';

@Pipe({
  name: 'filterStudent',
  standalone: true,
})
export class FilterStudentPipe implements PipeTransform {
  transform(students: Student[], filterBy: string): Student[] {
    if (filterBy) {
      return students.filter((s) => {
        return s.gender === filterBy;
      });
    }

    return students;
  }
}
