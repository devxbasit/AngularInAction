import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { StudentService } from './services/student.service';
import { Observable } from 'rxjs';
import { Student } from './interfaces/student';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'AsyncPipe';
  studentService: StudentService = inject(StudentService);
  students$: Observable<Student[]>;

  ngOnInit(): void {
    this.students$ = this.studentService.getStudentObservable();
  }
}
