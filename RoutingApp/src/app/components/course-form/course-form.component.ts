import { Component } from '@angular/core';
import { IDeactivateComponent } from '../../interfaces/ideactivatecomponent';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-course-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './course-form.component.html',
  styleUrl: './course-form.component.scss',
})
export class CourseFormComponent implements IDeactivateComponent {
  courseTitle: string = '';
  coursePrice: string = '';

  canExit(): boolean | Observable<boolean> | Promise<boolean> {
    if (this.courseTitle || this.coursePrice) {
      return confirm('You have unsaved changes, do you want to leave?');
    }

    return true;
  }

  addCourse() {
    console.log('course Added');
    this.courseTitle = this.coursePrice = '';
  }
}
