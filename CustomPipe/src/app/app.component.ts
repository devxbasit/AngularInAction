import { Component } from '@angular/core';
import { CommonModule, PercentPipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { GreetPipe } from './pipes/greet.pipe';
import { Student } from './interfaces/student';
import { FilterStudentPipe } from './pipes/filter-student.pipe';
import { FormsModule } from '@angular/forms';
import { PercentagePipe } from './pipes/percentage.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    GreetPipe,
    PercentagePipe,
    FilterStudentPipe,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'CustomPipe';
  name: string = 'David';
  filterBy: string = '';
  students: Student[] = [
    { name: 'John', age: 10, gender: 'm', percentage: 50.78362 },
    { name: 'David', age: 10, gender: 'm', percentage: 99.65198 },
    { name: 'Alice', age: 10, gender: 'f', percentage: 55.6 },
    { name: 'Marry', age: 10, gender: 'f', percentage: 10.876 },
  ];
}
