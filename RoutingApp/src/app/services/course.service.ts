import { Injectable, OnInit } from '@angular/core';
import { Course } from '../interfaces/course';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private _courses = [];
  private _coursesBehaviorSubject: BehaviorSubject<Course[]> =
    new BehaviorSubject<Course[]>([]);

  constructor() {
    this._courses = [
      { courseId: 1, name: 'Angular In Depth', price: 1000 },
      { courseId: 2, name: 'JavaScript In Depth', price: 2000 },
      { courseId: 3, name: 'Python In Depth', price: 3000 },
      { courseId: 4, name: 'CSS 3 In Depth', price: 4000 },
      { courseId: 5, name: 'React In Depth', price: 5000 },
      { courseId: 6, name: 'Java In Depth', price: 6000 },
    ];
    this._coursesBehaviorSubject.next(this._courses);
  }

  getCoursesObs() {
    return this._coursesBehaviorSubject.asObservable();
  }

  getCourseById(courseId) {
    const courseIndex = this._courses.findIndex(
      (course) => course.courseId == courseId
    );

    if (courseIndex > -1) {
      return this._courses[courseIndex];
    }
  }
}
