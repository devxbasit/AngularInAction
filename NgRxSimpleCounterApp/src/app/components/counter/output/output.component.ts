import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css'],
})
export class OutputComponent implements OnInit {
  counter: number = 0;

  store = inject(Store<{ counter: { currentCounter: number } }>);
  ngOnInit(): void {
    this.store.select('counter').subscribe((data) => {
      this.counter = data.currentCounter;
    });
  }
}
