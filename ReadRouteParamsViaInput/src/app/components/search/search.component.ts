import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent implements OnInit {
  @Input() query?: string;
  @Input('id') pathId?: string;
  @Input('title') dataTitle?: string;
  @Input('searchData') resolvedData?: [];

  ngOnInit(): void {
    console.log('Do Something with data');
  }
}
