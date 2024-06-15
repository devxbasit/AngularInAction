import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Observable, from, of } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'RxJsOperatorsFromAndOf';

  ngOnInit(): void {
    console.clear();
    const observable1 = of(
      1,
      2,
      3,
      [4, 5, 6],
      7,
      'eight',
      ['nine', 'ten'],
      true,
      { a: 1 }
    );

    observable1.subscribe((data) => {
      console.log('data', data);
    });

    const observable2 = from([1, 2, 3, 4, 5]);

    observable2.subscribe((data) => {
      console.log('data', data);
    });
  }
}
