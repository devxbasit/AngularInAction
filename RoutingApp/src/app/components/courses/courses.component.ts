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
  courses: Course[] = [];

  router: Router = inject(Router);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this._courseServiceSubscription = this._courseService
      .getCoursesObs()
      .subscribe((data) => {
        this.courses = data;
      });
  }

  goToCourseDetails(courseId: number): void {
    this.router.navigate(['course', courseId], {
      relativeTo: this.activeRoute,
    });
  }
  ngOnDestroy(): void {
    this._courseServiceSubscription.unsubscribe();
  }
}
