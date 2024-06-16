import { Component, DestroyRef, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cat } from 'src/app/core/models/cat.interface';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.scss'],
})
export class CatComponent implements OnInit {
  route = inject(ActivatedRoute);
  dRef = inject(DestroyRef);
  cat: Cat = {} as Cat;

  ngOnInit(): void {
    this.route.data.pipe(takeUntilDestroyed(this.dRef)).subscribe({
      next: (data) => {
        this.cat = data['cat'];
      },
    });
  }
}
