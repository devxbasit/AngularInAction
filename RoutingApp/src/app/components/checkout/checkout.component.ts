import { Component, OnInit, inject } from '@angular/core';
import { Course } from '../../interfaces/course';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
})
export class CheckoutComponent implements OnInit {
  private _router: Router = inject(Router);
  checkoutCourse: Course;

  ngOnInit(): void {
    this.checkoutCourse = history.state;
  }
}
