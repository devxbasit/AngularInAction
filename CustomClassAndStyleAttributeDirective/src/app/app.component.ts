import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MyNgClassDirective } from './directives/my-ng-class.directive';
import { MyNgStyleDirective } from './directives/my-ng-style.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MyNgClassDirective, MyNgStyleDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'CustomClassAndStyleAttributeDirective';
}
