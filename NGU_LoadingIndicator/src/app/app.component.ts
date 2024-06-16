import { Component, OnInit, inject } from '@angular/core';
import { LoadingService } from './core/services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'NGU_LoadingIndicator';
  loadingService = inject(LoadingService);

  ngOnInit(): void {}
}
