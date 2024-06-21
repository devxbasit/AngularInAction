import { Component, OnInit, inject } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  scullyService = inject(ScullyRoutesService);
  posts$: Observable<ScullyRoute[]> | undefined
  
  ngOnInit(): void {
    this.posts$ = this.scullyService.available$.pipe(map((posts) => {
      return posts.filter(post => post.title)
    }))

  }
}
