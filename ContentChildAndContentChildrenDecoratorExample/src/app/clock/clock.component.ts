import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Pipe } from '@angular/core';

@Component({
  selector: 'app-clock',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.scss',
})
export class ClockComponent {
  time: Date = new Date();
}
