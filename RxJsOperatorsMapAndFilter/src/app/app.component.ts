import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { filter, from, map } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'RxJsOperatorsMapAndFilter';

  ngOnInit(): void {
    const source = from([1, 2, 3, 4]);

    const obs = source.pipe(
      map((data) => {
        return data * 10;
      }),
      filter((data) => {
        return data !== 30;
      })
    );

    source.subscribe((data) => {
      console.log('source subscriber: data', data);
    });

    obs.subscribe((data) => {
      console.log('piped observable subscriber: data', data);
    });
  }
}
