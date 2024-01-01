import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ObservableExample';

  nums: number[] = []

  observable = new Observable(function (subscriber) {

    setTimeout(() => { subscriber.next(1) }, 1000);
    setTimeout(() => { subscriber.next(2) }, 2000);
    setTimeout(() => { subscriber.next(3) }, 3000);

    setTimeout(() => { subscriber.error(new Error('something went wrong! please try again later')) }, 3500);
    setTimeout(() => { subscriber.complete() }, 3500);


    setTimeout(() => { subscriber.next(4) }, 4000);
    setTimeout(() => { subscriber.next(5) }, 5000);


  });


  getData() {

    this.observable.subscribe({
      next: (val: any) => {

        this.nums.push(val);

      },
      error: (error: Error) => {
        console.log("Error occurred, nothing can be emitted now onwards ")
        console.log(error.message);


      },
      complete: () => {
        console.log('All the data is streamed, nothing can be emitted now onwards')
      }
    });

  }






}
