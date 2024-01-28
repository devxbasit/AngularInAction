import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Student } from '../interfaces/student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private studentSubject: Subject<Student[]> = new Subject<Student[]>();
  constructor() {
    setTimeout(() => {
      this.studentSubject.next([
        { name: 'John', age: 10 },
        { name: 'David', age: 20 },
        { name: 'Alice', age: 30 },
      ]);
    }, 6000);
  }

  getStudentObservable(): Observable<Student[]> {
    return this.studentSubject.asObservable();
  }
}
