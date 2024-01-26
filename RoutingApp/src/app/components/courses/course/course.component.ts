import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Course } from '../../../interfaces/course';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { CourseService } from '../../../services/course.service';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss',
})
export class CourseComponent implements OnInit, OnDestroy {
  private _activeRoute: ActivatedRoute = inject(ActivatedRoute);
  private _courseService: CourseService = inject(CourseService);
  private _location: Location = inject(Location);
  private _router: Router = inject(Router);
  private _paramMapSubscription: Subscription;
  selectedCourse: Course;

  ngOnInit(): void {
    this._paramMapSubscription = this._activeRoute.paramMap.subscribe(
      (paramsMap) => {
        const courseId = +paramsMap.get('courseId');
        this.selectedCourse = this._courseService.getCourseById(courseId);
      }
    );
  }

  ngOnDestroy(): void {
    this._paramMapSubscription.unsubscribe();
  }

  backToCourses() {
    // Dynamic Back Navigation with Browser History
    this._location.back();
  }

  checkout() {
    this._router.navigate(['/checkout'], {
      queryParams: { courseId: this.selectedCourse.courseId },
    });
  }
}
