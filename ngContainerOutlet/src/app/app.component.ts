import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ngContainerOutlet';
  brandContextInfo = {
    brandName: 'Brand Name',
    subHeading: 'sub heading here',
  };

  // see also $implicit

  // brandContextInfo = {
  //   $implicit: 'Brand Name',
  //   subHeading: 'sub heading here',
  // };
}
