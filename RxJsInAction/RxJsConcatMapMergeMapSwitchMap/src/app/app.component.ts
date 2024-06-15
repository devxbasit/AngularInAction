import { Component, inject } from '@angular/core';
import { AsyncPipe, CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CatService } from './service/cat.service';
import { Observable } from 'rxjs';
import { Cat } from './interface/cat';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgFor, NgIf, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  #catService: CatService = inject(CatService);
  cats$: Observable<Cat[]> = this.#catService.cats$;
  hoveredCat$: Observable<Cat> = this.#catService.hoveredCat$;

  catHovered(catId: string) {
    this.#catService.notifyCatHoveEvent(catId);
  }

}
