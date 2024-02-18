import { Component, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent implements OnInit {
  // public _activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  // bookId: number = 0;
  @Input() bookId!: Number;
  ngOnInit(): void {
    //this.bookId = Number(this._activatedRoute.snapshot.paramMap.get('bookId'));
  }
}
