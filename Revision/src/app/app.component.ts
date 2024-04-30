import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  private _router: Router = inject(Router);
  subscription: Subscription;
  title = 'Revision';
  ngOnInit(): void {

    this.subscription = this._router.events.subscribe((event) => {

      console.log(event);

    });

  }


  ngOnDestroy(): void {

    this.subscription.unsubscribe();

  }
}
