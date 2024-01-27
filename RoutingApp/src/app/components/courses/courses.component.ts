import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Course } from '../../interfaces/course';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent implements OnInit, OnDestroy {
  private _courseService: CourseService = inject(CourseService);
  private _courseServiceSubscription: Subscription;
  private _router: Router = inject(Router);
  private _activeRoute: ActivatedRoute = inject(ActivatedRoute);
  courses: Course[] = [];

  ngOnInit(): void {
    alert(this._activeRoute.snapshot.data['someData']);
    alert(this._activeRoute.snapshot.data['staticData']);

    this._courseServiceSubscription = this._courseService
      .getCoursesObs()
      .subscribe((data) => {
        this.courses = data;
      });
  }

  goToCourseDetails(courseId: number): void {
    this._router.navigate(['course', courseId], {
      relativeTo: this._activeRoute,
    });
  }
  ngOnDestroy(): void {
    this._courseServiceSubscription?.unsubscribe();
  }
}
