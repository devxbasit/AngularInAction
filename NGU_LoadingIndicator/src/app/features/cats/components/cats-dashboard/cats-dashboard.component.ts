import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Cat } from 'src/app/core/models/cat.interface';
import { CatsService } from 'src/app/core/services/cats.service';

@Component({
  selector: 'app-cats-dashboard',
  templateUrl: './cats-dashboard.component.html',
  styleUrls: ['./cats-dashboard.component.scss'],
})
export class CatsDashboardComponent implements OnInit {
  catsService = inject(CatsService);
  dRef = inject(DestroyRef);
  cats: Cat[] = [];

  ngOnInit(): void {
    this.catsService
      .getAllCats()
      .pipe(takeUntilDestroyed(this.dRef))
      .subscribe({
        next: (cats) => {
          console.log('respone', cats);
          this.cats = cats;
        },
      });
  }
}
