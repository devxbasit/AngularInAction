import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    Comp1Component,
    Comp2Component,
    Comp3Component,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None,
  //encapsulation: ViewEncapsulation.Emulated,
  // encapsulation: ViewEncapsulation.ShadowDom,
})
export class AppComponent {
  title = 'ViewEncapsulation';
}
